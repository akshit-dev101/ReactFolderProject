import Folder from "../components/Folder";
import "./styles.css";
import expData from "../data/folderData.js";
export default function App() {
  return (
    <div className="App">
      <Folder expData={expData} />
    </div>
  );
}
