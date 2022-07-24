import { Router } from "./Routes/Router";
import './GlobalStyle.css'
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <Router/>
  );
}

export default App;
