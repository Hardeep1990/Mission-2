import "./chatbot.css";
function ChatBot() {
  return (
    <div className="chat">
      <input
        className="form"
        id="myInput"
        type="text"
        placeholder="typing.."
      ></input>
    </div>
  );
}
export default ChatBot;
