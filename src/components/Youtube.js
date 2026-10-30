import React, { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import FlickeringGrid from './ui/FlickeringGrid';
import { TextAnimate } from './ui/TextAnimate';
import NumberTicker from './ui/NumberTicker';
import { Play, ArrowUpRight, Smartphone, Monitor, Rocket, Bot, Code2 } from 'lucide-react';
import youtubeList from '../constants/ytLists';

export default function Youtube() {
  const [category, setCategory] = useState('Best Watch');
  const reducedMotion = useReducedMotion();
  return (
    <div className="animateContainer youtube-page">
      <h1 className="sr-only">YouTube · Sai Kiran Patro</h1>
      <a className="channel-banner" href="https://www.youtube.com/saikiranpatro" target="_blank" rel="noreferrer" aria-label="Visit Sai Kiran Patro's YouTube channel">
        <div className={reducedMotion ? 'channel-dot-grid is-static' : 'channel-dot-grid'} aria-hidden="true">
          {!reducedMotion && <FlickeringGrid squareSize={4} gridGap={6} color="#6B7280"
            maxOpacity={0.5} flickerChance={0.1} className="absolute inset-0" />}
        </div>
        <div className="channel-identity">
          {reducedMotion ? <><h2>Sai Kiran Patro</h2><p>Informative Tech Content</p></> : <>
            <TextAnimate as="h2" animation="blurInUp" by="character" startOnView={false}
              aria-label="Sai Kiran Patro">Sai Kiran Patro</TextAnimate>
            <TextAnimate animation="blurInUp" by="character" startOnView={false}
              aria-label="Informative Tech Content">Informative Tech Content</TextAnimate>
          </>}
          <div className="channel-topics" aria-hidden="true"><Smartphone /><Monitor /><Rocket /><Bot /><Code2 /></div>
        </div>
        <div className="channel-stat-panel">
          {[['Videos', 39, ''], ['Views', 105, 'K+'], ['Subscribers', 793, '']].map(([label, value, suffix]) =>
            <span key={label}><b>{label}</b><strong>
              <span className="sr-only">{value}{suffix}</span>
              <span aria-hidden="true">{reducedMotion ? value : <NumberTicker value={value} />}{suffix}</span>
            </strong></span>
          )}
        </div>
        <span className="channel-visit">Visit channel<ArrowUpRight size={14} /></span>
      </a>
      <div className="video-tabs" aria-label="Filter videos">
        {Object.keys(youtubeList).map((name) => <button key={name} aria-pressed={category === name} onClick={() => setCategory(name)}>{name}</button>)}
      </div>
      <div className="video-grid">
        {youtubeList[category].map((video) => (
          <a className="video-card" key={video.videoId} href={video.viewUrl} target="_blank" rel="noreferrer">
            <div className="video-thumbnail">
              <img src={video.bannerImagePath} alt="" loading="lazy" width="480" height="270" />
              <span className="video-play"><Play size={23} fill="currentColor" /></span>
            </div>
            <h2>{video.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}
