import SupportLink from "./SupportLink";
import Hero from "./Hero.jsx";

import { CgProfile } from "react-icons/cg";
import { BiBarChartSquare, BiCoin } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";
import { TbCoinRupee } from "react-icons/tb";
import { CgCircleci } from "react-icons/cg";

function Support() {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-8">
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
                <ul className="py-3 px-5 space-y-4 list-disc text-[#387ed1]">
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
              icon={BiBarChartSquare}
              title={"Kite"}
              link={
                <ul className="py-3 px-5 space-y-4 list-disc text-[#387ed1]">
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
                <ul className="py-3 px-5 space-y-4 list-disc text-[#387ed1]">
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
                <ul className="py-3 px-5 space-y-4 list-disc text-[#387ed1]">
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
            <SupportLink
              icon={BiCoin}
              title={"Coin"}
              link={
                <ul className="py-3 px-5 space-y-4 list-disc text-[#387ed1]">
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
          </div>
          <div className="col-4 mt-4 px-4 gap-3 text-[16px]">
            <ul
              className="list-disc space-y-3 leading-normal border-l-7 [border-left-color:#ff9100] py-3 pl-5 w-[90%]"
              style={{ backgroundColor: "#fff4e5" }}
            >
              <li>
                <a href="#">
                  Exclusion of F&O contracts on 8<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;securities from August 29, 2025
                </a>
              </li>
              <li>
                <a href="#">
                  Revision in expiry day of Index and
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Stock derivatives contracts
                </a>
              </li>
            </ul>
            <div className="w-[90%]">
              <table className="table table-bordered rounded ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      colSpan="2"
                      className="p-3 text-muted bg-light"
                    >
                      Quick links
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row" className="p-3 text-muted ">
                      <a href="#">1. Track account opening</a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" className="p-3 text-muted">
                      <a href="#">2. Track segment activation</a>
                    </td>
                  </tr>

                  <tr>
                    <td scope="row" className="p-3 text-muted">
                      <a href="#">3. Intraday margins</a>
                    </td>
                  </tr>

                  <tr>
                    <td scope="row" className="p-3 text-muted">
                      <a href="#">4. Kite user manual</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
