function Hero() {
  return (
    <section>
      <div className="container my-[120px]">
        <div className="text-center row">
          <img
            src="/media/images/homeHero.png"
            alt="Hero Image"
            className=" my-4 mx-auto w-75	"
          ></img>
          <h2 className="mt-5">Invest in everything</h2>
          <div className="pb-10 fs-5">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </div>

          <button
            className="btn btn-primary py-2 fs-5 "
            style={{
              width: "15%",
              margin: "0 auto",
              backgroundColor: "#387ed1",
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
