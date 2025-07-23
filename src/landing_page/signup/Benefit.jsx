function Benefits() {
  return (
    <section>
      <div className="container my-5 pt-3">
        <div className="d-flex flex-row">
          <div className="col-7 d-flex flex-col justify-center items-center">
            <img
              src="/media/images/acop-benefits.svg"
              className="w-50 mb-5"
            ></img>
            <h4 className="text-center pr-5 mr-5">
              Benefits of opening a Zerodha demat account
            </h4>
          </div>

          <div className="col-5 my-auto">
            <h3 className="my-4 fs-5">Unbeatable pricing</h3>
            <p
              className="text-muted 
             mb-5"
            >
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for
              <br /> intraday and F&O trades.
            </p>

            <h3 className="my-4 fs-5">Best investing experience</h3>
            <p
              className="text-muted 
             mb-5 "
            >
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>

            <h3 className="my-4 fs-5">No spam or gimmicks</h3>
            <p className="text- mb-5">
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>

            <h3 className="my-4 fs-5">The Zerodha universe</h3>
            <p
              className="text-muted 
             mb-5"
            >
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
