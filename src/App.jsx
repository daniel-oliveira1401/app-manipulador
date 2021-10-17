import "./App.css";
import { ReactComponent as EstadoIcon } from "assets/estado_dist.svg";
import { ReactComponent as PadIcon } from "assets/pad_dist.svg";
import { ReactComponent as ArmIcon } from "assets/arm_icon_dist.svg";

function App() {
	return (
		<div id="app">
			<div id="status-bar">
				<div className="status-display"></div>
			</div>
			<div id="status-panel">
				<div className="title">
					<div className="bar"></div>
					<div className="text">Status</div>
					<div className="bar"></div>
				</div>
				<div className="enable-control">
					<div className="text">Habilitar Controle</div>
					<div className="btn-enable">
						<div id="toggle-switch-container-container">
							<div id="toggle-switch-container">
								<input type="checkbox" name="" id="toggle-switch-checkbox" />
								<div id="toggle-switch-thumb"></div>
								<div id="toggle-switch-background"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="current-state">
					<div className="text">Estado Atual</div>
					<div className="icon">
						<EstadoIcon></EstadoIcon>
					</div>
				</div>
			</div>
			<div id="control-panel">
				<div className="title">
					<div className="bar"></div>
					<div className="text">Controle</div>
					<div className="bar"></div>
				</div>
				<div className="pads-display">
					<div className="storage-area">
						<div className="top-part">
							<PadIcon></PadIcon>
							<PadIcon></PadIcon>
							<PadIcon></PadIcon>
						</div>
						<div className="bot-part">
							<PadIcon></PadIcon>
							<ArmIcon></ArmIcon>
							<PadIcon></PadIcon>
						</div>
					</div>
					<div className="main-area">
						<div className="pad" id="main-pad">
							<PadIcon></PadIcon>
						</div>
					</div>
				</div>
				<div className="confirm-dialogue">
					<div className="text">Deseja mover padOrigem para padDestino?</div>
					<div className="btn-confirm">Confirmar</div>
				</div>
			</div>
		</div>
	);
}

export default App;
