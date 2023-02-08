import "./navigation.css";
function Nav() {
  return (
    <div className="navBar">
      <div className="a">
        <div>
          <img
            className="abc"
            src="https://media.istockphoto.com/id/1140324735/vector/new-zealand-flag.jpg?s=1024x1024&w=is&k=20&c=pc0ulwladDebmCW1trgdvETi8pJlCDn-Kgrtc15G284="
            alt="logo"
          ></img>
        </div>
        <div> My Tech</div>
      </div>
      <div className="btn_btn">
        <button className="btn">Desktop</button>
        <button className="btn">Laptop</button>
        <button className="btn">Mobile</button>
        <button className="btn">Help</button>
      </div>
    </div>
  );
}
export default Nav;
