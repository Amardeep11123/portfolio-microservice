import React, { useState } from "react";
// import "./App.css";
import "./index.css";
import profile from "./assets/profile.jpg";

function App() {
  const [lang, setLang] = useState("EN");

  const content = {
    EN: {
      title: "Full Stack Developer | Python | Django | FastAPI | AWS",
      about:
        "Experienced software engineer with 13+ years including Japan projects. Specialized in backend architecture, microservices, and cloud deployment.",
      projects: "Projects",
      project1: "EdgeAI Event Processing System",
      projectDesc: "Django + FastAPI + MongoDB + AWS EC2 Deployment",
      skills: "Skills",
      resume: "Download Resume",
      enBtn: "English Resume",
      jpBtn: "Japanese Resume",
    },
    JP: {
      title: "フルスタックエンジニア | Python | Django | FastAPI | AWS",
      about:
        "日本案件を含む13年以上の経験を持つソフトウェアエンジニア。バックエンド設計、マイクロサービス、クラウド構築を専門としています。",
      projects: "プロジェクト",
      project1: "EdgeAI イベント処理システム",
      projectDesc: "Django + FastAPI + MongoDB + AWS EC2 デプロイ",
      skills: "スキル",
      resume: "履歴書ダウンロード",
      enBtn: "英語履歴書",
      jpBtn: "日本語履歴書",
    },
  };

  const t = content[lang];

  return (
    <div className="container">

      {/* Language Toggle */}
      <div className="lang-toggle">
        <button onClick={() => setLang("EN")}>EN</button>
        <button onClick={() => setLang("JP")}>JP</button>
      </div>

      <div className="hero">
        <div className="hero-text">
          <h1>Amardip Chimankar</h1>
          <h3>{t.title}</h3>
          <p>{t.about}</p>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Amardip" />
        </div>
      </div>

      <section>
        <h2>{t.projects}</h2>
        <div className="card">
          <h3>{t.project1}</h3>
          <p>{t.projectDesc}</p>
        </div>
      </section>

      <section>
        <h2>{t.skills}</h2>
        <div className="skills">
          <span>Python</span>
          <span>Django</span>
          <span>FastAPI</span>
          <span>React</span>
          <span>AWS</span>
          <span>Docker</span>
          <span>PostgreSQL</span>
        </div>
      </section>

      <section>
        <h2>{t.resume}</h2>
        <div className="buttons">
          <a href="/EN_Amar.pdf" target="_blank" rel="noreferrer">
            {t.enBtn}
          </a>
          <a href="/JA_Amar.pdf" target="_blank" rel="noreferrer">
            {t.jpBtn}
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;