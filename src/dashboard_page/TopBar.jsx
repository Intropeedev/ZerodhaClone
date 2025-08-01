import { LiaShoppingCartSolid } from "react-icons/lia";

function TopBar() {
  return (
    <>
      <div className="d-flex flex-row w-[35%] justify-between m-3 flex-nowrap">
        <div className="d-flex flex-row gap-3">
          <p>NIFTY 50</p>
          <p>23456.57</p>
        </div>
        <div className="d-flex flex-row gap-3">
          <p>SENSEX</p>
          <p>56134.11</p>
        </div>
      </div>
      <div>
        <div>
          <img src="./media/images/kite-logo.svg" />
          <li>Dashboard</li>
          <li>Orders</li>
          <li>Holdings</li>
          <li>Positions</li>
          <li>Bids</li>
          <li>Funds</li>
          <li>
            <LiaShoppingCartSolid />
          </li>
          <li></li>
          <li></li>
        </div>
      </div>
    </>
  );
}

export default TopBar;
