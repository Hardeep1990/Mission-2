import "./robot.css";
function Robot() {
  return (
    <div className="first">
      <div>
        <img
          className="pic"
          src="https://media.istockphoto.com/id/1010001882/vector/%C3%B0%C3%B0%C2%B5%C3%B1%C3%B0%C3%B1%C3%B1.jpg?s=612x612&w=0&k=20&c=1jeAr9KSx3sG7SKxUPR_j8WPSZq_NIKL0P-MA4F1xRw="
          alt=""
        ></img>
      </div>
      <div>
        <textarea className="form-control" rows="2" id="comment"></textarea>
      </div>
    </div>
  );
}
export default Robot;
