
import Navbar from "./components/Navbar";
import Routes from "./routes/routes";
import "./styles.css";

export default function App() {
  const version= process.env.REACT_APP_VERSION;
  return (
    <div className="App">
      <p>{version}</p>
      <Navbar />
      <Routes />
    </div>
  );
}
