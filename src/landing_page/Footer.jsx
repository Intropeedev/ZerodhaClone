import { PiCopyright } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { BiLogoLinkedin } from "react-icons/bi";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div
        className="border-t border-gray-200 mt-4"
        style={{ backgroundColor: "#fbfbfb" }}
      >
        <div className="container px-5 pt-5">
          <div className="row">
            <div className="col-3">
              <img src="/media/images/logo.svg" className="w-40"></img>
              <p className="mt-3 text-muted text-[14px]">
                <PiCopyright className="iconStyle mr-2 mb-[2px]" />
                2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.
              </p>
              <RiTwitterXLine className="iconStyle text-muted mr-6 fs-5" />
              <ImFacebook2 className="iconStyle text-muted mr-6 fs-5" />
              <SiInstagram className="iconStyle text-muted mr-6 fs-5" />
              <BiLogoLinkedin className="iconStyle text-muted mr-6 fs-5" />
              <hr className="text-muted" />
              <PiYoutubeLogoFill className="iconStyle text-muted mr-6 fs-5" />
              <MdOutlineWhatsapp className="iconStyle text-muted mr-6 fs-5" />
              <FaTelegram className="iconStyle text-muted mr-6 fs-5" />
            </div>

            <div className="col-2">
              <ul className="d-flex flex-col gap-3 text-[14px]">
                <li>
                  <h5>Account</h5>
                </li>
                <li>Open demat account</li>
                <li>Minor demat account</li>
                <li>NRI demat account</li>
                <li>Commodity</li>
                <li>Dematerialisation </li>
                <li> Fund transfer</li>
                <li> MTF </li>
                <li>Referral program</li>
              </ul>
            </div>
            <div className="col-2">
              <ul className="d-flex flex-col gap-3 text-[14px]">
                <li>
                  <h5>Support</h5>
                </li>
                <li>Contact us</li>
                <li>Support portal</li>
                <li>How to file a complaint?</li>
                <li>Status of complaint</li>
                <li>Bulletin </li>
                <li> Circular </li>
                <li> Z-Connect blog </li>
                <li>Downloads</li>
              </ul>
            </div>
            <div className="col-2">
              <ul className="d-flex flex-col gap-3 text-[14px]">
                <li>
                  <h5>Company</h5>
                </li>
                <li>About</li>
                <li>Philosophy</li>
                <li>Press & media</li>
                <li>Careers</li>
                <li>Zerodha Cares (CSR) </li>
                <li> Zerodha.tech </li>
                <li>Open source </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="d-flex flex-col gap-3 text-[14px]">
                <li>
                  <h5>Quick links</h5>
                </li>
                <li>Upcoming IPOs</li>
                <li>Brokerage charges</li>
                <li>Market holidays</li>
                <li>Economic calendar</li>
                <li>Calculators</li>
                <li> Markets </li>
                <li> Sectors </li>
                <li>Referral program</li>
              </ul>
            </div>
          </div>
          <div className="text-gray-500 text-[12px] leading-losse px-3 pt-3">
            <p style={{ marginBottom: "0" }}>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to{" "}
              <a href="#">
                <b>complaints@zerodha.com</b>
              </a>
              , for DP related to
              <a href="#">
                {" "}
                <b>dp@zerodha.com</b>
              </a>
              . Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF <br />
              <br />
              Procedure to file a complaint on<a href="#"> SEBI SCORES</a> :
              Register on SCORES portal. Mandatory details for filing complaints
              on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
              Effective Communication, Speedy redressal of the grievances <br />
              <br />
              <b>
                <a href="#">Smart Online Dispute Resolution</a> |{" "}
                <a href="#">Grievances Redressal Mechanism</a>
              </b>
              <br />
              <br />
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
              <br />
              <br /> Attention investors: 1) Stock brokers can accept securities
              as margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
              <br />
              <br />
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please
              <a href="#">
                <b> create a ticket here</b> .
              </a>
              <br />
              <br />
            </p>
            <div>
              <ul className="d-flex flex-row gap-6 text-muted mx-[150px]">
                <li>
                  {" "}
                  <a href="#">NSE </a>
                </li>
                <li>
                  {" "}
                  <a href="#">BSE </a>
                </li>
                <li>
                  <a href="#">MCX </a>
                </li>
                <li>
                  {" "}
                  <a href="#">Terms & conditions</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Policies & procedures </a>
                </li>
                <li>
                  {" "}
                  <a href="#">Privacy policy </a>
                </li>
                <li>
                  <a href="#">Disclosure </a>
                </li>
                <li>
                  {" "}
                  <a href="#">For investor's attention </a>
                </li>
                <li>
                  {" "}
                  <a href="#">Investor charter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
