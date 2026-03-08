import React, { useState } from "react";

function App() {
  const [apiResult, setApiResult] = useState(null);

  const testAPI = async () => {
    try {
      const response = await fetch("/api/process/123/");
      const data = await response.json();
      setApiResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setApiResult("Error calling API");
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "40px", maxWidth: "900px", margin: "auto" }}>
      
      <h1>Amardip Chimankar</h1>
      <h3>Backend Engineer | Python | Django | FastAPI | AWS</h3>
      <hr />

      <h2>About Me</h2>
      <p>
        Backend engineer with experience building production-level microservice 
        architectures using Django, FastAPI, PostgreSQL, Docker and AWS EC2.
      </p>

      <h2>Skills</h2>
      <ul>
        <li>Python</li>
        <li>Django & Django REST Framework</li>
        <li>FastAPI</li>
        <li>PostgreSQL</li>
        <li>Docker & Docker Compose</li>
        <li>AWS EC2 Deployment</li>
        <li>Nginx Reverse Proxy</li>
        <li>Microservices Architecture</li>
      </ul>

      <h2>Projects</h2>
      <ul>
        <li><strong>Microservice Event Processing System</strong> – Live AWS deployment with Docker and Nginx</li>
        <li><strong>Edge Telemetry Processing System</strong> – Real-time API gateway architecture</li>
        <li><strong>PARFA Analytics Tool</strong> – Internal data visualization platform</li>
      </ul>

      <h2>Live API Demo</h2>
      <button onClick={testAPI} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Test Live API
      </button>

      {apiResult && (
        <pre style={{ background: "#f4f4f4", padding: "15px", marginTop: "20px" }}>
          {apiResult}
        </pre>
      )}

      <hr />
      <p>GitHub: https://github.com/Amardeep11123</p>
    </div>
  );
}

export default App;