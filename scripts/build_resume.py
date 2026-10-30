"""Generate the recruiter-facing PDF from the supplied resume. Run with bundled Python."""
from pathlib import Path
import shutil
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output/pdf/Sai_Kiran_Patro_Resume.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)
# Match the default ReportLab frame padding used by all body paragraphs.
CONTENT_WIDTH = 595.276 - 36 - 36 - 12
for name, file in [("Calibri", "calibri.ttf"), ("Calibri-Bold", "calibrib.ttf"), ("Calibri-Italic", "calibrii.ttf")]:
    pdfmetrics.registerFont(TTFont(name, str(Path("C:/Windows/Fonts") / file)))
pdfmetrics.registerFontFamily("Calibri", normal="Calibri", bold="Calibri-Bold", italic="Calibri-Italic")
INK = colors.HexColor("#20262D")
MUTED = colors.HexColor("#535B64")
ACCENT = colors.HexColor("#A94820")
styles = {
    "body": ParagraphStyle("body", fontName="Calibri", fontSize=10, leading=12.3, textColor=INK, spaceAfter=3),
    "small": ParagraphStyle("small", fontName="Calibri", fontSize=9, leading=11.6, textColor=MUTED, spaceAfter=3),
    "section": ParagraphStyle("section", fontName="Calibri-Bold", fontSize=10, leading=12, textColor=ACCENT, spaceBefore=9, spaceAfter=4),
    "role": ParagraphStyle("role", fontName="Calibri-Bold", fontSize=10.5, leading=12.7, textColor=INK),
    "date": ParagraphStyle("date", fontName="Calibri", fontSize=9.3, leading=12.7, textColor=MUTED, alignment=TA_RIGHT),
    "bullet": ParagraphStyle("bullet", fontName="Calibri", fontSize=10, leading=12.2, textColor=INK, leftIndent=10, firstLineIndent=0, bulletIndent=0, spaceAfter=3),
    "name": ParagraphStyle("name", fontName="Calibri-Bold", fontSize=25, leading=28, textColor=INK, spaceAfter=3),
    "title": ParagraphStyle("title", fontName="Calibri-Bold", fontSize=11.5, leading=14, textColor=ACCENT, spaceAfter=5),
}
story = []
def p(text, style="body"):
    return Paragraph(text, styles[style])
def add(text, style="body"):
    story.append(p(text, style))
def link(label, url):
    return '<a href="' + url + '" color="#A94820">' + label + '</a>'
def section(title):
    add(title, "section")
    story.append(HRFlowable(width="100%", thickness=.45, color=colors.HexColor("#D4C2B7"), spaceAfter=5))
def role(company, title, dates):
    row = Table([[p(company + " | " + title, "role"), p(dates, "date")]], colWidths=[CONTENT_WIDTH * 0.74, CONTENT_WIDTH * 0.26], hAlign="LEFT")
    row.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING",(0,0),(-1,-1),0), ("RIGHTPADDING",(0,0),(-1,-1),0), ("TOPPADDING",(0,0),(-1,-1),0), ("BOTTOMPADDING",(0,0),(-1,-1),3)]))
    story.append(row)
def bullet(text):
    story.append(Paragraph(text, styles["bullet"], bulletText="-"))

add("SAI KIRAN PATRO", "name")
add("FRONTEND &amp; AI ENGINEER  |  React - TypeScript - Full-Stack", "title")
add("Hyderabad, India  |  " + link("+91 91828 63688", "tel:+919182863688") + "  |  " + link("saikiranpatro198@gmail.com", "mailto:saikiranpatro198@gmail.com"), "small")
add(link("linkedin.com/in/sai-kiran-patro", "https://www.linkedin.com/in/sai-kiran-patro/") + "  |  " + link("github.com/saikiran-patro", "https://github.com/saikiran-patro") + "  |  " + link("saikiranpatro.in", "https://saikiranpatro.in/"), "small")

section("PROFILE")
add("Frontend-focused full-stack engineer building scalable React and TypeScript products and production AI agents. Delivered a subscription center serving <b>1.8M active users</b> and real-time voice experiences with <b>sub-2-second latency</b>. Owns solutions from interface and API design to multi-agent orchestration and cloud deployment.")

section("TECHNICAL SKILLS")
add("<b>Frontend:</b> React, TypeScript, JavaScript, Redux, Tailwind CSS, HTML, CSS, responsive design")
add("<b>Backend &amp; data:</b> Node.js, Express, Python, FastAPI, REST, WebSockets, MongoDB, MySQL, Firestore, pgvector")
add("<b>AI:</b> OpenAI Agents SDK, LangGraph, Google ADK, Vertex AI, RAG, MCP, voice agents, OCR, prompt engineering, guardrails")
add("<b>Cloud &amp; tools:</b> GCP, GKE, Cloud Run, Docker, Kubernetes, Git, GitHub, Claude Code, OpenAI Codex, Cursor, Grok, C++")

section("PROFESSIONAL EXPERIENCE")
role("RealPage", "SDE 2 - AI Engineer", "Jun 2025 - Present")
add("<b>Multi-agent web application</b> | React, LangGraph, Vertex AI, Docker, GKE", "small")
bullet("Built the React interface and solely architected multi-agent workflows for research, outreach, and invoice ingestion using LangGraph and Vertex AI.")
bullet("Containerized AI microservices with Docker and deployed to Google Kubernetes Engine; reduced input-token cost by <b>6%</b> through prompt optimization.")
add("<b>Lumina AI Screen Share</b> | " + link("Spotlighted by OpenAI", "https://www.linkedin.com/feed/update/urn:li:ugcPost:7437938261152595969/"), "small")
bullet("Developed a real-time voice agent with screen sharing and interactive feedback using the OpenAI Agents SDK and Node.js.")
bullet("Maintained <b>sub-2-second end-to-end voice latency</b> by tuning VAD, endpointing, and turn-taking; improved reliability with guardrails and function-tool calling.")
bullet("Integrated conversation summaries with Salesforce REST APIs and migrated voice records from legacy Transcript to Messaging objects.")
story.append(Spacer(1,5))
role("Tata Consultancy Services", "Software Engineer - Full-Stack", "Jun 2022 - May 2025")
bullet("Built a scalable <b>React subscription center serving 1.8M active users</b>.")
bullet("Developed an automotive RAG chatbot using Node.js, Express, and the Gemini API for vehicle and offer queries.")
bullet("Delivered a referral-offer code program associated with a reported <b>80% increase in sales</b>.")

section("SELECTED PROJECTS & OPEN SOURCE")
bullet("<b>http-query-method</b> | " + link("npm package", "https://www.npmjs.com/package/http-query-method") + " - Published a zero-dependency package for HTTP QUERY requests with validation, retries, POST fallback, and TypeScript support.")
bullet("<b>TowerLink AI</b> | " + link("Demo", "https://youtu.be/Wz8Si9eActU") + " - Full-stack chat app with JWT authentication, user profiles, protected routes, and responsive UI. React, Node.js, Express, MongoDB, Tailwind CSS.")
bullet("<b>NeuraLensAI</b> | " + link("Project story", "https://www.linkedin.com/posts/sai-kiran-patro_i-built-neuralens-ai-screenshare-voice-activity-7500641412162433024-sKU3") + " - Screen-aware conversational voice assistant; top 30% of approximately 4,000 Codex Hackathon participants.")
bullet("<b>Pulse Music AI</b> | " + link("Demo", "https://youtu.be/thp3XHEdflo") + " - Personal music-player application with a published video demonstration.")

section("EDUCATION & RECOGNITION")
add("<b>B.Tech, Electronics &amp; Communication Engineering</b> | 2018 - 2022")
add("Anil Neerukonda Institute of Technology and Sciences | <b>CGPA: 8.7 / 10</b>", "small")
add("<b>Certifications:</b> " + link("Frontend Expert - AlgoExpert", "https://certificate.algoexpert.io/FrontendExpert%20Certificate%20FE-2e88dc380f") + " | " + link("Data Structures &amp; Algorithms - Coding Ninjas", "https://certificate.codingninjas.com/verify/80a54541c2c5798e"), "small")
add("<b>Recognition:</b> " + link("REALSTARS Award - RealPage", "https://drive.google.com/drive/folders/1z0lUuYhYNTOb8Gt2MpXYS1g_2FAZkoWc") + " for technical excellence | 400+ DSA problems solved", "small")

doc = SimpleDocTemplate(str(OUT), pagesize=(595.276,841.89), rightMargin=36, leftMargin=36, topMargin=27, bottomMargin=26, title="Sai Kiran Patro | Frontend & AI Engineer", author="Sai Kiran Patro", subject="React, TypeScript, full-stack development, and AI agents", pageCompression=1)
doc.build(story)
reader = PdfReader(OUT)
if len(reader.pages) != 1:
    raise RuntimeError("Resume must fit on one page; got " + str(len(reader.pages)))
text = reader.pages[0].extract_text()
for required in ["SAI KIRAN PATRO", "RealPage", "1.8M", "Frontend Expert", "saikiranpatro198@gmail.com"]:
    assert required in text, required
assert "Ropana" not in text, "Freelance project must stay out of the resume"
shutil.copyfile(OUT, ROOT / "public/Assets/Sai_Kiran_Patro_Resume.pdf")
print("Created one-page resume with", len(reader.pages[0].get("/Annots", [])), "clickable links:", OUT)
