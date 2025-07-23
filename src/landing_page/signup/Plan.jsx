function Plan() {
  return (
    <>
      <div className="container my-[70px] pb-3">
        <h4 className="text-center mb-5 pb-4">
          Investment options with Zerodha demat account
        </h4>
        <div className="row">
          <div className="col-5">
            <div className="d-flex flex-row align-center justify-end gap-5 mb-5">
              <img src="/media/images/stocks-acop.svg" className="w-30"></img>
              <div className="d-flex flex-col align-center justify-center">
                <h4>Stocks</h4>
                <p className="text-muted">
                  Invest in all exchange-listed
                  <br /> securities
                </p>
              </div>
            </div>

            <div className="d-flex flex-row align-center justify-end gap-5">
              <img src="/media/images/ipo-acop.svg" className="w-30"></img>
              <div className="d-flex flex-col align-center justify-center ">
                <h4>IPO</h4>
                <p className="text-muted">
                  Apply to the latest IPOs with
                  <br /> via UPI
                </p>
              </div>
            </div>
          </div>

          <div className="col-2">
            <span>&nbsp;</span>
          </div>
          <div className="col-5">
            <div className="d-flex flex-row align-center justify-start gap-5 mb-5">
              <img src="/media/images/mf-acop.svg" className="w-30"></img>
              <div className="d-flex flex-col align-center justify-center ">
                <h4>Mutual funds </h4>
                <p className="text-muted">
                  Invest in commission-free direct <br />
                  mutual funds
                </p>
              </div>
            </div>

            <div className="d-flex flex-row align-center justify-start gap-5">
              <img src="/media/images/fo-acop.svg" className="w-30"></img>
              <div className="d-flex flex-col align-center justify-center ">
                <h4> Futures & options</h4>
                <p className="text-muted">
                  Hedge and mitigate market risk <br />
                  through simplified F&O trading
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center my-5">
          <button
            className="btn btn-primary py-2 fs-5 fw-medium"
            style={{
              width: "20%",
              margin: "0 auto",
              backgroundColor: "#387ed1",
            }}
          >
            Explore Investments
          </button>
        </div>
      </div>
    </>
  );
}

export default Plan;
