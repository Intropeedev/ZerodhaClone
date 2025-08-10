import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function Menu() {
  return (
    <>
      <div className="d-flex justify-between align-items-center mt-2">
        <div className="d-flex align-items-center">
          <img
            src="/media/images/kite-logo.svg"
            className="w-6"
            alt="Kite Logo"
          />
        </div>

        <div className="d-flex align-items-center text-[0.75rem] gap-3">
          <div className="d-flex gap-4">
            <a href="/">Dashboard</a>
            <a href="/">Orders</a>
            <a href="/">Holdings</a>
            <a href="/">Positions</a>
            <a href="/">Bids</a>
            <a href="/">Funds</a>
          </div>

          <div className="border-start h-[20px]"></div>

          <div className="d-flex justify-between gap-3 flex-grow-1 ml-4 text-[0.9rem]">
            <LiaShoppingCartSolid size={23} />
            <IoMdNotificationsOutline size={23} />
            <CgProfile size={23} />
            <p className="mb-0">AB123</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
