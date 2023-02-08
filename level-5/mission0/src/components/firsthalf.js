import "./firsthalf.css";
function Intro() {
  return (
    <div className="b">
      <div className="text">
        <i>
          “Technology is best when
          <br /> it brings people together.”
        </i>
      </div>
      <div className="search_bar">
        <form className="text_area">
          <label>
            <input type="textarea" />
            Search
          </label>
        </form>
      </div>
    </div>
  );
}
export default Intro;
