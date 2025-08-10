import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Position from "./Positions";
import Apps from "./Apps";
import Funds from "./Funds";

import { Routes, Route } from "react-router-dom";
function dashboard() {
  return (
    <>
      <div className="d-flex">
        <WatchList />
        <div>
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Position />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default dashboard;
