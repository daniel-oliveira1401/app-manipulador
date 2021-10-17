import "./App.css";

function App() {
	return (
		<div id="app">
			<div id="status-bar"></div>
			<div id="status-panel">
				<div className="title"></div>
				<div className="enable-control"></div>
				<div className="current-state"></div>
			</div>
			<div id="control-panel">
				<div className="pads-display"></div>
				<div className="confirm-dialogue"></div>
			</div>
		</div>
	);
}

export default App;
