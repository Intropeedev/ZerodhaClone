function Universe() {
  return (
    <>
      <div className="text-center mt-5">
        <h4 className="mt-5">The Zerodha Universe</h4>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="container my-5 mx-auto">
        <div className="row d-flex g-1 justify-center">
          <div className="col-3 py-5 d-flex flex-col gap-5">
            <div className="text-center d-flex flex-col gap-3 items-center">
              <img
                src="/media/images/zerodhaFundhouse.png"
                className="w-[50%]"
              />
              <p className="text-muted text-[12px] w-[75%] mb-3">
                Our asset management venture <br />
                that is creating simple and transparent index funds to help you
                save for your goals.
              </p>
            </div>

            <div className="text-center d-flex flex-col gap-3 items-center">
              <img src="/media/images/streakLogo.png" className="w-[50%]"></img>
              <p className="text-muted text-[12px] w-[65%] mb-0">
                Systematic trading platform
                <br /> that allows you to create and backtest strategies without
                coding.
              </p>
            </div>
          </div>

          <div className="col-3 py-5 d-flex flex-col gap-5">
            <div className="text-center d-flex flex-col gap-3 items-center">
              <img
                src="/media/images/sensibullLogo.svg"
                className="w-[70%]"
              ></img>
              <p className="text-muted text-[12px] w-[80%] mb-3">
                Options trading platform that lets you <br />
                create strategies, analyze positions, and examine data points
                like open interest, FII/DII, and more.
              </p>
            </div>

            <div className="text-center d-flex flex-col gap-3 items-center ">
              <img
                src="/media/images/smallcaseLogo.png"
                className="w-[70%]"
              ></img>
              <p className="text-muted text-[12px] w-[60%] mb-0">
                Thematic investing platform <br />
                that helps you invest in diversified baskets of stocks on ETFs.
              </p>
            </div>
          </div>

          <div className="col-3 py-5 d-flex flex-col gap-5">
            <div className="text-center d-flex flex-col gap-2 items-center">
              <img src="/media/images/tijori.svg" className="w-[50%]"></img>
              <p className="text-muted text-[12px] w-[65%] mb-3">
                Investment research platform <br />
                that offers detailed insights on stocks, sectors, supply chains,
                and more.
              </p>
            </div>
            <div className="text-center d-flex flex-col gap-3 items-center">
              <img src="/media/images/dittoLogo.png" className="w-[50%]"></img>
              <p className="text-muted text-[12px] w-[50%] mb-0">
                Personalized advice on life <br />
                and health insurance. No spam and no mis-selling.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary py-2 w-[15%] fs-5 fw-semibold mb-5"
            style={{ backgroundColor: "#387ed1" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
}

export default Universe;
