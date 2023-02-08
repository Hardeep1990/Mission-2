import "./style.css";
import Nav from "./components/navbar";
import Robot from "./components/robot";
import Customer from "./components/customer";
import ChatBot from "./components/chatbot";
function App() {
  return (
    <div className="main">
      <Nav></Nav>
      <Robot></Robot>
      <Customer></Customer>
      <Robot></Robot>
      <Customer></Customer>
      <Robot></Robot>
      <Customer></Customer>
      <ChatBot></ChatBot>
    </div>
  );
}

export default App;
