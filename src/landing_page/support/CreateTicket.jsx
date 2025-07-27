import { IoSearchSharp } from "react-icons/io5";
import { PiTarget } from "react-icons/pi";

function CreateTicket() {
  return (
    <div className="bg-gray-100 p-5">
      <div className="container  mx-auto">
        <div className="row d-flex justify-between mt-5">
          <div className="col-6 py-2 w-50 px-5 ">
            <h1 className=" justify-evenly">Support Portal</h1>
          </div>
          <div className="col-6 px-5 py-4 w-25 d-flex justify-end">
            <button
              type="button"
              className="btn btn-primary fs-6 fw-semibold d-flex align-items-center gap-2 p-2 rounded-0"
              style={{ backgroundColor: "#387ed1" }}
            >
              <PiTarget className="fs-5" /> My tickets
            </button>
          </div>
          <div className="d-flex justify-center w-[50%] mx-auto px-5">
            <div className="input-group shadow-sm">
              <span
                className="input-group-text bg-white px-4"
                id="basic-addon1"
              >
                <IoSearchSharp className="fs-4" />
              </span>
              <input
                type="text"
                className="form-control p-4 fs-6 text-muted "
                placeholder="Eg: how do i activate F&O..."
                aria-label="Ask Anything"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
