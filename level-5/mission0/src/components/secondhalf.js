import "./secondhalf.css";
function Second() {
  return (
    <div className="main">
      <div className="style">
        <img
          className="img_size"
          src="https://www.pbtech.co.nz/fileslib/dep-laptops-computers-tablets-at-pbtech-002.webp"
          alt="macbook"
        />
        <br />
        <button className="btn_style">Computers & Tablets</button>
        <ul>
          <li> Laptop</li>
          <li> Desktops</li>

          <li> Tablets</li>
        </ul>
      </div>
      <div className="style">
        <img
          className="img_size"
          src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dw/media-gallery/monitor-alienware-aw3423dw-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3545&hei=3490&qlt=100,1&resMode=sharp2&size=3545,3490&chrss=full&imwidth=5000"
          alt="second pic"
        />
        <br />
        <button className="btn_style">PC Preipherals & Accessories</button>
        <ul>
          <li> Monitor</li>
          <li>Headsets</li>
          <li>Keyboard </li>{" "}
        </ul>
      </div>
      <div className="style">
        <img
          className="img_size"
          src="https://www.pbtech.co.nz/fileslib/_20220223103447_samsung-galaxy-s22-ultra.png"
          alt="third pic"
        />
        <br />
        <button className="btn_style">Phones & Accessories</button>
        <ul>
          <li> Mobiles</li>
          <li>Mobile Phone Cases</li>
          <li>Power Banks</li>{" "}
        </ul>
      </div>
    </div>
  );
}
export default Second;
