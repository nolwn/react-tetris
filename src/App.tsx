import BuildArea from "./components/BuildArea";
import "./App.css";
import { CellColor } from "./components/Cell";

const App = () => {
	const blankBuildArea: CellColor[] = [];

	for (let i = 0; i < 200; i++) {
		blankBuildArea.push("off");
	}

	return (
		<div className="App">
			<BuildArea cells={blankBuildArea} width={10} height={20} />
		</div>
	);
};

export default App;
