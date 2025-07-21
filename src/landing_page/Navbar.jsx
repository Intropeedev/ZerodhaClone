import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <img src="/media/images/logo.svg" className="w-30"></img>
            </Link>
          </div>

          <div className="col-6 p-2 mt-2">
            <ul className="d-flex flex-row gap-5">
              <li>
                <Link to="/signup">Signup</Link>{" "}
              </li>
              <li>
                <Link to="/about">About</Link>{" "}
              </li>
              <li>
                <Link to="/products">Products</Link>{" "}
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>{" "}
              </li>
              <li>
                <Link to="/support">Support</Link>{" "}
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
