import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineTune } from "react-icons/md";
function dashboard() {
  return (
    <>
      <div className="d-flex flex-row w-[35%] ">
        <div className="img-wrapper">
          <div className="input-group shadow-sm">
            <span className="input-group-text bg-white px-4" id="basic-addon1">
              <IoSearchSharp className="fs-4" />
            </span>
            <input
              type="text"
              className="form-control p-4 fs-6 text-muted "
              placeholder="Eg: how do i activate F&O..."
              aria-label="Ask Anything"
              aria-describedby="basic-addon1"
            />
            <MdOutlineTune />
          </div>
        </div>
      </div>
    </>
  );
}

export default dashboard;
