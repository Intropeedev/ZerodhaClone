import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  return (
    <div
      style={{
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.20)",
      }}
      className="fixed-top bg-white"
    >
      <div className="container ">
        <div className="row">
          <div className="mt-3 px-5 pt-2 col-6">
            <img src="/media/images/logo.svg" className="w-30"></img>
          </div>

          <div className="col-6 p-2 mt-2">
            <ul className="d-flex flex-row gap-5">
              <li>
                <a href="#">Signup</a>{" "}
              </li>
              <li>
                <a href="#">About</a>{" "}
              </li>
              <li>
                <a href="#">Products</a>{" "}
              </li>
              <li>
                <a href="#">Pricing</a>{" "}
              </li>
              <li>
                <a href="#">Support</a>{" "}
              </li>
              <li>
                <GiHamburgerMenu
                  style={{ fontSize: "20px", marginTop: "2px" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
