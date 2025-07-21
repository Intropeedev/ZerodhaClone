import { GoArrowRight } from "react-icons/go";
function Education() {
  return (
    <section>
      <div className="container">
        <div className="row pl-6">
          <div className="col-6 d-flex align-center justify-center">
            <img src="/media/images/education.svg" className="w-40%"></img>
          </div>

          <div className="col-6 mt-5 ">
            <h3 className="fs-4">Free and open market education</h3>
            <p className="mt-4 w-130">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="mr-5">
              Varsity <GoArrowRight className="iconStyle" />
            </a>
            <p className="mt-4 w-120">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#" className="mr-5">
              TradingQ&A <GoArrowRight className="iconStyle" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
