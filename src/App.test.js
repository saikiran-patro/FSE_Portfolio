import { fireEvent, render, screen, within } from '@testing-library/react';
import { useReducedMotion } from 'framer-motion';
import App from './App';
import Contact from './components/Contact';
import LeftContainer from './components/LeftContainer';
import appStore from './constants/appStore';
import { changeWindow } from './constants/windowSlice';
jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  useReducedMotion: jest.fn(() => true),
}));

beforeAll(() => {
  window.scrollTo = jest.fn();
  Object.defineProperties(HTMLDialogElement.prototype, {
    showModal: { configurable: true, value() { this.setAttribute('open', ''); } },
    close: { configurable: true, value() { this.removeAttribute('open'); } },
  });
  window.matchMedia = (query) => ({
    matches: query.includes('prefers-reduced-motion'), media: query,
    addListener: jest.fn(), removeListener: jest.fn(),
    addEventListener: jest.fn(), removeEventListener: jest.fn(),
  });
  global.IntersectionObserver = class { observe() {} disconnect() {} };
});
beforeEach(() => {
  useReducedMotion.mockReturnValue(true);
  window.history.replaceState({}, '', '/');
  appStore.dispatch(changeWindow('Home'));
});
test('navigation keeps mobile and desktop state in sync and exposes the current page', async () => {
  render(<App />);
  const content = screen.getByRole('main');
  content.scrollTop = 240;
  const mobile = within(screen.getByRole('navigation', { name: 'Mobile navigation' }));
  fireEvent.click(mobile.getByRole('link', { name: 'About', exact: true }));
  expect(await screen.findByRole('heading', { name: /Engineer. Creator./ })).toBeInTheDocument();
  expect(mobile.getByRole('link', { name: 'About', exact: true })).toHaveAttribute('aria-current', 'page');
  const desktop = within(screen.getByRole('navigation', { name: 'Main navigation' }));
  expect(desktop.getByRole('link', { name: 'About', exact: true })).toHaveAttribute('aria-current', 'page');
  expect(screen.getByText('OpenAI Codex', { selector: 'li' })).toBeInTheDocument();
  expect(document.activeElement).toBe(screen.getByRole('main'));
  expect(content.scrollTop).toBe(0);
});
test('resume includes both employers with corrected dates and the new downloadable PDF', async () => {
  render(<App />);
  fireEvent.click(within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', { name: 'Resume', exact: true }));
  expect(await screen.findByRole('heading', { name: 'RealPage' }, { timeout: 3000 })).toBeInTheDocument();
  expect(screen.getByText('Jun 2022 – May 2025')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Frontend Expert' })).toBeInTheDocument();
  expect(within(screen.getByRole('main')).getByRole('link', { name: /Download resume\s*PDF/ })).toHaveAttribute('href', '/Assets/Sai_Kiran_Patro_Resume.pdf');
  expect(screen.getByRole('link', { name: 'Open PDF' })).toHaveAttribute('href', '/Assets/Sai_Kiran_Patro_Resume.pdf');
});
test('contact offers direct email and phone and requires valid form content', async () => {
  render(<Contact />);
  expect(await screen.findByRole('heading', { name: /Good things start/ })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Email me/ })).toHaveAttribute('href', 'mailto:saikiranpatro198@gmail.com');
  expect(screen.getByRole('img', { name: 'Dotted world map with a location marker in India' })).toBeInTheDocument();
  expect(screen.getByText('Europe · Visa sponsorship required')).toBeInTheDocument();
  expect(screen.getByLabelText('Your email')).toBeRequired();
  expect(screen.getByLabelText('Your message')).toBeRequired();
  expect(screen.getByLabelText('Your message')).toHaveAttribute('minLength', '10');
});

test('home stays professional and GitHub belongs to code profiles', () => {
  render(<App />);
  expect(screen.queryByText(/Marvel|Tony Stark/i)).not.toBeInTheDocument();
  expect(within(screen.getByRole('region', { name: 'Code profiles' })).getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/saikiran-patro');
  expect(within(screen.getByRole('region', { name: 'Social profiles' })).queryByRole('link', { name: 'GitHub' })).not.toBeInTheDocument();
});

test('mobile contact menu opens, provides profile links, and restores focus on Escape', () => {
  render(<LeftContainer />);
  const trigger = screen.getByRole('button', { name: 'Open contact menu' });
  fireEvent.click(trigger);
  const menu = screen.getByRole('dialog', { name: 'Contact & profiles' });
  expect(trigger).toHaveAttribute('aria-expanded', 'true');
  expect(within(menu).getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/saikiran-patro');
  expect(within(menu).getByRole('link', { name: 'saikiranpatro198@gmail.com' })).toHaveAttribute('href', 'mailto:saikiranpatro198@gmail.com');
  expect(within(menu).getByRole('button', { name: 'Close contact menu' })).toHaveFocus();
  fireEvent(menu, new Event('cancel', { bubbles: false, cancelable: true }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toHaveAttribute('aria-expanded', 'false');
  expect(trigger).toHaveFocus();
});

test('contact menu stays modal through its exit slide before returning focus', () => {
  useReducedMotion.mockReturnValue(false);
  render(<LeftContainer />);
  const trigger = screen.getByRole('button', { name: 'Open contact menu' });
  fireEvent.click(trigger);
  const menu = screen.getByRole('dialog', { name: 'Contact & profiles' });
  fireEvent.click(within(menu).getByRole('button', { name: 'Close contact menu' }));
  expect(menu).toHaveAttribute('open');
  expect(menu).toHaveClass('is-closing');
  expect(trigger).toHaveAttribute('aria-expanded', 'true');
  const animationEnd = new Event('animationend', { bubbles: true });
  Object.defineProperty(animationEnd, 'animationName', { value: 'contactMenuExit' });
  fireEvent(menu, animationEnd);
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toHaveFocus();
  fireEvent.click(trigger);
  expect(screen.getByRole('dialog')).not.toHaveClass('is-closing');
});
