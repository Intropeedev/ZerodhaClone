import { GoArrowRight } from "react-icons/go";
function Stats() {
  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5 p-5 my-auto">
            <h3 className="fs-4">Trust with confidence</h3>
            <h4 className="mt-5 fs-5">Customer-first always</h4>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India
            </p>
            <h3 className="mt-5 fs-5">No spam or gimmicks</h3>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a href="#">Our philosophies.</a>
            </p>

            <h3 className="mt-5 fs-5">The Zerodha universe</h3>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h3 className="mt-5 fs-5">Do better with money</h3>
            <p>
              With initiatives like <a href="#">Nudge</a> and
              <a href="#"> Kill Switch</a>, we don't just facilitate
              transactions, but actively help you do better with your money.
            </p>
          </div>
          <div className="col-7 p-5">
            <img src="/media/images/ecosystem.png" className="w-100"></img>
            <p className="text-center">
              <a href="#" className="mr-5">
                Explore our products <GoArrowRight className="iconStyle" />
              </a>
              <a href="#" className="ml-5">
                Try Kite Demo <GoArrowRight className="iconStyle" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <img
        src="/media/images/pressLogos.png"
        alt="Press logos"
        className="text-center m-auto"
      ></img>
    </section>
  );
}

export default Stats;
