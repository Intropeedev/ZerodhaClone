import { GoArrowRight } from "react-icons/go";
function Pricing() {
  return (
    <section>
      <div className="container p-4">
        <div className="row p-5">
          <div className="col-5 p-5">
            <h3 className="fs-4">Unbeatable pricing</h3>
            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="#">
              See Pricing <GoArrowRight className="iconStyle" />
            </a>
          </div>
          <div className="col-7 d-flex  items-center justify-center">
            <img src="/media/images/pricing0.svg" className="w-[120px]"></img>
            <p className="text-[10px] w-25">Free account opening</p>

            <img src="/media/images/pricing0.svg" className="w-[120px]"></img>
            <p className="text-[10px] w-50">
              Free equity delivery and direct mutual funds Intraday and F&O
            </p>

            <img
              src="/media/images/other-trades.svg"
              className="w-[120px]"
            ></img>
            <p className="text-[10px] w-25">Intraday and F&O</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
