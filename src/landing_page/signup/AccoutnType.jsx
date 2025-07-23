function AccountType() {
  return (
    <div className="container mx-auto px-5">
      <h4 className="text-center mb-5">Explore different account types</h4>

      <div className="d-flex flex-row gap-5 mx-auto align-end justify-center mb-5 relative">
        <img
          src="/media/images/acop-individual.svg"
          className="absolute top-9 left-10 z-1 p-2 rounded-5"
          style={{ backgroundColor: "#eff6ff" }}
        ></img>
        <div className="card" style={{ width: "21rem" }}>
          <div className="card-body d-flex flex-col justify-center align-start p-4 my-3">
            <h5 className="card-title pb-4 pl-2">Individual Account</h5>
            <p className="card-text text-muted">
              Invest in equity, mutual funds and derivatives
            </p>
          </div>
        </div>

        <img
          src="/media/images/acop-huf.svg"
          className="absolute top-9 left-106 z-1 p-2 rounded-5"
          style={{ backgroundColor: "#eff6ff" }}
        ></img>
        <div className="card" style={{ width: "21rem" }}>
          <div className="card-body d-flex flex-col justify-center align-start p-4 my-3">
            <h5 className="card-title pb-4 pl-3">HUF Account</h5>
            <p className="card-text text-muted">
              Make tax-efficient investments for your family
            </p>
          </div>
        </div>

        <img
          src="/media/images/acop-nri.svg"
          className="absolute top-9 left-202 z-1 p-2 rounded-5"
          style={{ backgroundColor: "#eff6ff" }}
        ></img>
        <div className="card" style={{ width: "21rem" }}>
          <div className="card-body d-flex flex-col justify-center align-start p-4 my-3">
            <h5 className="card-title pb-4 pl-3">NRI Account</h5>
            <p className="card-text text-muted">
              Invest in equity, mutual funds, debentures, and more
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row gap-5 mx-auto align-start justify-center relative">
        <img
          src="/media/images/acop-minor.svg"
          className="absolute top-10 left-58 z-1 p-2 rounded-5"
          style={{ backgroundColor: "#eff6ff" }}
        ></img>
        <div className="card" style={{ width: "21rem" }}>
          <div className="card-body d-flex flex-col justify-center align-start px-4 py-4 my-3">
            <h5 className="card-title pb-4 pl-2">Minor Account</h5>
            <p className="card-text text-muted">
              Teach your little ones about money & invest for their future with
              them
            </p>
          </div>
        </div>

        <img
          src="/media/images/acop-corporate.svg"
          className="absolute top-10 left-154 z-1 p-2 rounded-5"
          style={{ backgroundColor: "#eff6ff" }}
        ></img>
        <div className="card" style={{ width: "21rem" }}>
          <div className="card-body d-flex flex-col justify-center align-start px-4 py-4 my-3">
            <h5 className="card-title pb-4 pl-2">
              Corporate / LLP/ Partnership
            </h5>
            <p className="card-text text-muted">
              Manage your business surplus and investments easily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountType;
