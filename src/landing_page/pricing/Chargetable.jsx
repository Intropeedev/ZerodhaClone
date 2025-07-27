function ChargeTable() {
  return (
    <div className="container mx-auto mt-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <table className="border outer-border-only text-[14px] table-sm">
            <thead className="fw-300 w-100 text-muted">
              <tr>
                <th>
                  <td></td>
                </th>
                <th className="text-muted p-3">
                  <td>Equity delivery</td>
                </th>
                <th className="text-muted p-3">
                  <td>Equity intraday</td>
                </th>
                <th className="text-muted p-3">
                  <td>F&O - Futures</td>
                </th>
                <th className="text-muted p-3">
                  <td>F&O - Options</td>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-top">
                <td scope="row" className=" text-muted p-3 mt-3">
                  Brokerage
                </td>
                <td className="p-3">Zero Brokerage</td>
                <td className="py-3">
                  0.03% or Rs. 20/executed
                  <br /> order whichever is lower
                </td>
                <td className="py-3 ">
                  @0.03% or Rs. 20/executed <br />
                  order whichever is lower
                </td>
                <td className="py-3">Flat Rs. 20 per executed order</td>
              </tr>

              <tr className="bg-gray-50">
                <td scope="row" className="text-muted py-5 px-3">
                  STT/CTT
                </td>
                <td className="py-5 ">0.1% on buy & sell</td>
                <td className=" py-5 ">0.025% on the sell side</td>
                <td className="py-5 ">0.02% on the sell side </td>
                <td className="py-4">
                  <li>
                    0.125% of the intrinsic value on
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; options that are bought and
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; exercised
                  </li>
                  <li> 0.1% on sell side (on premium)</li>
                </td>
              </tr>

              <tr>
                <td scope="row" className="text-muted p-3">
                  Transaction <br />
                  charges
                </td>
                <td className="py-3">
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td className="py-3">
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td className="py-3">
                  NSE: 0.00173% <br />
                  BSE: 0
                </td>
                <td className="py-3">
                  NSE: 0.03503% (on premium)
                  <br /> BSE: 0.0325% (on premium)
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td scope="row" className="py-4 px-3 w-[10%] text-muted">
                  GST
                </td>
                <td className="py-3">
                  18% on (brokerage + SEBI <br />
                  charges + transaction
                  <br /> charges)
                </td>
                <td className="py-3">
                  18% on (brokerage + SEBI <br />
                  charges + transaction
                  <br /> charges)
                </td>
                <td className="py-3">
                  18% on (brokerage + SEBI <br />
                  charges + transaction
                  <br /> charges)
                </td>
                <td className="py-3">
                  18% on (brokerage + SEBI <br />
                  charges + transaction
                  <br /> charges)
                </td>
              </tr>

              <tr>
                <td scope="row" className="text-muted p-3">
                  SEBI charges
                </td>
                <td className="py-3">₹10 / crore</td>
                <td className="py-3">₹10 / crore</td>
                <td className="py-3">₹10 / crore</td>
                <td className="py-3">₹10 / crore</td>
              </tr>

              <tr className="bg-gray-50">
                <td scope="row" className="text-muted p-3">
                  Stamp charges
                </td>
                <td className="w-[15%] py-3">
                  0.015% or ₹1500 / crore on
                  <br /> buy side
                </td>
                <td className="w-[15%] py-3">
                  0.015% or ₹1500 / crore on
                  <br /> buy side
                </td>
                <td className="w-[15%] py-3">
                  0.015% or ₹1500 / crore on
                  <br /> buy side
                </td>
                <td className="w-[15%] py-3">
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default ChargeTable;
