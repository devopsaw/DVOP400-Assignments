import "./App.css";
import HomePage from "./pages/HomePage"
import CentralizedWorkflow from "./pages/CentralizedWorkflow"
import FeatureBranchWF from "./pages/FeatureBranchWF"
import {Routes, Route} from "react-router-dom"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/centralized-workflow" element={<CentralizedWorkflow />}/>
				<Route path="/feature-branch-workflow" element={<FeatureBranchWF />}/>
			</Routes>
		</>
	);
}

export default App;