import SupportLink from "./SupportLink";
import CreateTicket from "./CreateTicket";

import { CgProfile } from "react-icons/cg";
import { BiBarChartSquare, BiCoin } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";
import { TbCoinRupee } from "react-icons/tb";
import { CgCircleci } from "react-icons/cg";

function Support() {
  return (
    <>
      <CreateTicket />
      <SupportLink
        icon={FiPlusCircle}
        title={"Account opening"}
        link={
          <ul className="py-3 px-5 space-y-4 list-disc text-[#387ed1]">
            <li>
              <a href="#">Resident individual</a>
            </li>
            <li>
              <a href="#">Minor</a>
            </li>
            <li>
              <a href="#">Non Resident Indian (NRI)</a>
            </li>
            <li>
              <a href="#">Company, Partnership, HUF and LLP</a>
            </li>
            <li>
              <a href="#">Glossary</a>
            </li>
          </ul>
        }
      />
      <SupportLink
        icon={CgProfile}
        title={"Your Zerodha Account"}
        link={
          <ul>
            <li>
              <a href="#">Your Profile </a>
            </li>
            <li>
              <a href="#">Account modification</a>
            </li>
            <li>
              <a href="#">
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
            </li>
            <li>
              <a href="#">Nomination</a>
            </li>
            <li>
              <a href="#"> Transfer and conversion of securities</a>
            </li>
          </ul>
        }
      />
      <SupportLink
        icon={BiCoin}
        title={"Coin"}
        link={
          <ul>
            <li>
              <a href="#">Mutual funds </a>
            </li>
            <li>
              <a href="#">National Pension Scheme (NPS)</a>
            </li>
            <li>
              <a href="#">Features on Coin</a>
            </li>
            <li>
              <a href="#">Payments and Orders</a>
            </li>
            <li>
              <a href="#">General</a>
            </li>
          </ul>
        }
      />
      <SupportLink
        icon={BiBarChartSquare}
        title={"Kite"}
        link={
          <ul>
            <li>
              <a href="#">IPO</a>
            </li>
            <li>
              <a href="#"> Trading FAQs </a>
            </li>
            <li>
              <a href="#"> Margin Trading Facility (MTF) and Margins</a>
            </li>
            <li>
              <a href="#">Charts and orders</a>
            </li>
            <li>
              <a href="#">Alerts and Nudges</a>
            </li>
            <li>
              <a href="#">General</a>
            </li>
          </ul>
        }
      />
      <SupportLink
        icon={TbCoinRupee}
        title={"Funds"}
        link={
          <ul>
            <li>
              <a href="#">Add money </a>
            </li>
            <li>
              <a href="#">Withdraw money</a>
            </li>
            <li>
              <a href="#">Add bank accounts</a>
            </li>
            <li>
              <a href="#">eMandates</a>
            </li>
          </ul>
        }
      />
      <SupportLink
        icon={CgCircleci}
        title={"Console"}
        link={
          <ul>
            <li>
              <a href="#">Portfolio </a>
            </li>
            <li>
              <a href="#">Corporate actions</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
            <li>
              <a href="#">Funds statement</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Segments</a>
            </li>
          </ul>
        }
      />
    </>
  );
}

export default Support;
