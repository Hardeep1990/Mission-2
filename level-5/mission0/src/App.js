import Nav from "./components/navigation";
import Intro from "./components/firsthalf";
import Second from "./components/secondhalf";
import Footer from "./components/footer";
import "./style.css";
function App() {
  return (
    <div className="main_main">
      <Nav></Nav>
      <Intro></Intro>
      <Second></Second>
      <Footer></Footer>
    </div>
  );
}

export default App;
