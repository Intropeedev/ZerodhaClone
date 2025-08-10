import Menu from "./Menu";
function TopBar() {
  return (
    <>
      <div className="d-flex justify-start">
        <div className="d-flex flex-row w-[28%] gap-2 mt-2">
          <div className="d-flex flex-row justify-evenly w-50 text-[0.8rem]">
            <p>NIFTY 50</p>
            <p>24363.30</p>
            <small className="mt-0.5">-235.85(-0.95%)</small>
          </div>
          <div className="d-flex flex-row justify-evenly w-50 text-[0.8rem] mx-0">
            <p>SENSEX</p>
            <p>79857.79</p>
            <small className="mt-0.5">-765.47(-0.95%)</small>
          </div>
        </div>
        <div className="border-start h-[20px] mt-2 mx-4"></div>
        <div className="w-[70%]">
          <Menu />
        </div>
      </div>
    </>
  );
}

export default TopBar;
