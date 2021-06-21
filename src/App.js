import Topbar from "./components/topbar/Topbar";
import "./styles.css";
import SideBar from "./components/sidebar/SideBar";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <SideBar />
        <div className="others">other pages</div>
      </div>
    </div>
  );
}
