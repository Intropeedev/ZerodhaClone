function StepsToNewAcc() {
  return (
    <div className="bg-[#fbfbfb] py-5">
      <div className="container mx-auto ">
        <h4 className="text-center">
          Steps to open a demat account with Zerodha
        </h4>
        <div className="d-flex flex-row gap-5">
          <div className="col-6 d-flex justify-content-end pr-5 mr-3 mt-5">
            <img src="/media/images/steps-acop.svg" className="w-90"></img>
          </div>
          <div className="col-6">
            <div className="d-flex flex-col mt-5 w-95">
              <>
                <p className="fw-medium text-[20px] mb-0">
                  <span className="text-[18px] fw-normal border rounded-5 p-1 mr-5">
                    01
                  </span>
                  Enter the requested details
                </p>
                <hr />
              </>
              <>
                <p className="fw-medium text-[20px] mb-0">
                  {" "}
                  <span className="text-[18px] fw-normal border rounded-5 p-1 mr-5">
                    02
                  </span>
                  Complete e-sign & verification
                </p>
                <hr />
              </>
              <>
                <p className="fw-medium text-[20px] mb-0">
                  {" "}
                  <span className="text-[18px] fw-normal border rounded-5 p-1 mr-5">
                    03
                  </span>
                  Start investing!
                </p>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsToNewAcc;
