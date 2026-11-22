import { useState } from "react";
import "./App.css";

const RAIL = ["circle", "square", "triangle", "diamond"];

/* Hero: shapes drift with the pointer, each layer at a different depth */
function Hero() {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.setProperty("--mx", x.toFixed(3));
    e.currentTarget.style.setProperty("--my", y.toFixed(3));
  };
  const leave = (e) => {
    e.currentTarget.style.setProperty("--mx", 0);
    e.currentTarget.style.setProperty("--my", 0);
  };

  return (
    <div className="hero" onPointerMove={move} onPointerLeave={leave}>
      <span className="ring" />
      <span className="disc" />
      <span className="half" />
    </div>
  );
}

/* Tile: click to turn the artwork a quarter turn */
function Tile({ name, label }) {
  const [turn, setTurn] = useState(0);
  return (
    <button
      type="button"
      className={`tile ${name}`}
      aria-label={label}
      onClick={() => setTurn((t) => t + 1)}
    >
      <span className="art" style={{ transform: `rotate(${turn * 90}deg)` }} />
    </button>
  );
}

export default function App() {
  const [active, setActive] = useState(0);

  return (
    <div className="site">
      <nav className="rail" aria-label="Main">
        {RAIL.map((shape, i) => (
          <button
            key={shape}
            type="button"
            className={`pip ${shape} ${i === active ? "on" : ""}`}
            aria-label={`Section ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </nav>

      <main className="grid">
        <Hero />
        <Tile name="a" label="Panel 1" />
        <Tile name="b" label="Panel 2" />
        <Tile name="c" label="Panel 3" />
        <Tile name="d" label="Panel 4" />
        <Tile name="e" label="Panel 5" />
      </main>
    </div>
  );
}
