// src/react-app/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Landing from "./pages/Landing";
import Info from "./pages/Info";
import MapPage from "./pages/MapPage";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("unknown");
	const [page, setPage] = useState<"home" | "info" | "map">("home");

	return (
		<>
			<header className="site-header">
				<h1 className="site-title">Sijangkang Community</h1>
				<nav className="site-nav">
					<button onClick={() => setPage("home")} aria-label="home">
						Home
					</button>
					<button onClick={() => setPage("info")} aria-label="info">
						Info
					</button>
					<button onClick={() => setPage("map")} aria-label="map">
						Map
					</button>
				</nav>
			</header>

			<main className="site-main">
				{page === "home" && (
					<Landing />
				)}
				{page === "info" && (
					<Info />
				)}
				{page === "map" && (
					<MapPage />
				)}
			</main>

			<footer className="site-footer">
				<div className="logos">
					<a href="https://vite.dev" target="_blank">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<div className="debug-cards">
					<div className="card">
						<button onClick={() => setCount((c) => c + 1)} aria-label="increment">
							count is {count}
						</button>
					</div>
					<div className="card">
						<button
							onClick={() => {
								fetch("/api/")
									.then((res) => res.json() as Promise<{ name: string }>)
									.then((data) => setName(data.name));
							}}
							aria-label="get name"
						>
							Name from API is: {name}
						</button>
					</div>
				</div>
			</footer>
		</>
	);
}

export default App;
