import { useState } from "react";

function Hero() {
  let [PhoneNumber, setPhoneNumber] = useState();

  let handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="conainer mb-6">
      <div className="container mt-40 mx-auto text-center">
        <h3>Open a free demat and trading account online</h3>
        <p className="text-[20px] text-muted mt-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="container p-5 mb-4">
        <div className="row">
          <div className="col-6 d-flex flex-row align-end justify-end">
            <img
              src="/media/images/account_open.svg"
              alt="glimse of Kite UI"
              className="w-[500px]"
            />
          </div>

          <div className="col-6 p-5 d-flex flex-col">
            <h3>Signup now</h3>
            <p className="text-muted">Or track your existing application</p>
            <form>
              <div
                className="input-group mb-4 col-auto"
                style={{ width: "420px" }}
              >
                <div className="input-group-text font-medium fs-4">
                  <img src="/media/images/india-flag.svg"></img>
                  &nbsp;&nbsp;&nbsp;+91
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter your mobile number"
                  value={PhoneNumber}
                  onChange={handlePhoneChange}
                  className="form-control p-3"
                  aria-label="Phone Number"
                  style={{
                    boxShadow: "none",
                    fontSize: "20px",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary py-2 px-5 w-70 fs-4"
                style={{ backgroundColor: "#387ed1" }}
              >
                Get OTP
              </button>

              <p className="mt-4 text-[12px]">
                By proceeding, you agree to the Zerodha <a href="#">terms</a> &{" "}
                <a href="#">privacy policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
