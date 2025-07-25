function Hero() {
  return (
    <div className="container mt-5 pt-5 ">
      <div className="text-center my-5">
        <h3 className="mt-5">Charges</h3>
        <h5 className="text-muted ">List of all charges and taxes</h5>
      </div>

      <div className="d-flex flex-row mx-auto justify-center gap-5 align-center text-center">
        <div className="d-flex flex-col align-items-center">
          <img src="/media/images/pricing0.svg" className="w-[75%] "></img>
          <h3 className="my-3">Free equity delivery</h3>
          <p className="leading-loose">
            All equity delivery investments (NSE, BSE), <br />
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="d-flex flex-col align-items-center">
          <img src="/media/images/other-trades.svg" className="w-[75%]"></img>
          <h3 className="mt-2 mb-3">Intraday and F&O trades</h3>
          <p className="leading-loose">
            Flat ₹ 20 or 0.03% (whichever is lower) per <br />
            executed order on intraday trades across <br />
            equity, currency, and commodity trades. Flat <br /> ₹20 on all
            option trades.
          </p>
        </div>
        <div className="d-flex flex-col align-items-center">
          <img src="/media/images/pricing0.svg" className="w-[75%]"></img>
          <h3 className="my-3">Free direct MF</h3>
          <p className="leading-loose">
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
