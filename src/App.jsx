import { useEffect, useState } from "react";
import "./App.css";
//import { useTypingEffect } from "./hooks/useTypingEffect";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Input from "./components/Input";
import AIPrompt from "./components/AIPrompt";
import StatsCard from "./components/StatsCard";
import FigmaClone from "./components/FigmaClone";

export default function App() {
  useEffect(()=>{
    typeWriter();
  },[]);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  var i = 0;
  var txt = 'Skyclad UI Design System';
  var speed = 70;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("heading").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  return (
    <div className="page">
      <div className="hero">
        <h1 id="heading"></h1>
        <p id="heading-para"></p>
      </div>

      <div className="section">
        <Card title="Buttons">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </Card>

        <Card title="Input Field">
          <Input
            label="Email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={
              !email.includes("@") && email.length > 0 ? "Invalid email" : ""
            }
          />
        </Card>

        <Card title="Modal">
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal
            title="Skyclad Modal"
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          >
            <p>This modal is animated and styled with simple CSS.</p>
          </Modal>
        </Card>

        <Card title="AI Prompt Component">
          <AIPrompt />
        </Card>

        <Card title="Stats Card">
          <StatsCard title="Daily Users" value="1,200" trend={5} />
        </Card>

        <Card title="Figma Mini UI">
          <FigmaClone />
        </Card>
      </div>
    </div>
  );
}
