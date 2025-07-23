function Team() {
  return (
    <div className="container">
      <div className="row">
        <h4 className="text-center my-5 pb-2 mx-auto w-75">People</h4>
      </div>

      <div className="row px-5 mb-5 fs-6 leading-loose w-75 mx-auto">
        <div className="d-flex flex-col col-5 my-2 align-items-center">
          <img
            src="/media/images/nithinKamath.jpg"
            className="w-75 border rounded-full mb-4"
          ></img>
          <h5>Nithin Kamath</h5>
          <h6 className="text-muted mb-3">Founder, CEO</h6>
        </div>

        <div className="col-7 my-2">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage /</a> <a href="#">TradingQnA /</a>
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>

      <div className="mx-auto d-flex gap-3 justify-evenly">
        <div className="col-3 justify-items-center">
          <img
            src="/media/images/Nikhil.jpg"
            className="w-[75%] border rounded-full mb-4"
          ></img>
          <h5>Nikihil Kamath</h5>
          <h6 className="text-muted mt-3 mb-5">Co-Founder & CFO</h6>
          <img
            src="/media/images/Hanan.jpg"
            className="w-[75%] border rounded-full mb-4"
          ></img>
          <h5>Hanan Delvi</h5>
          <h6 className="text-muted mt-3 mb-5">CCO</h6>
        </div>
        <div className="col-3 justify-items-center">
          <img
            src="/media/images/Kailash.jpg"
            className="w-[75%] border rounded-full mb-4"
          ></img>
          <h5>Dr. Kailash Nadh</h5>
          <h6 className="text-muted mt-3 mb-5">CTO</h6>

          <img
            src="/media/images/Seema.jpg"
            className="w-[75%] border rounded-full mb-4"
          ></img>
          <h5>Seema Patil</h5>
          <h6 className="text-muted mt-3 mb-5">Director</h6>
        </div>
        <div className="col-3 justify-items-center">
          <img
            src="/media/images/Venu.jpg"
            className="w-[75%] border rounded-full mb-4"
          ></img>
          <h5>Venu Madhav</h5>
          <h6 className="text-muted mt-3 mb-5">COO</h6>

          <img
            src="/media/images/karthik.jpg"
            className="w-[75%] border rounded-full mb-4"
          ></img>
          <h5>Karthik Rangappa</h5>
          <h6 className="text-muted mt-3 mb-5">Chief of Education</h6>
        </div>
      </div>
    </div>
  );
}

export default Team;
