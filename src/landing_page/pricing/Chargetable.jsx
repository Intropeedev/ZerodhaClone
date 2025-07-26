function ChargeTable() {
  return (
    <div className="container mx-auto mt-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <table className="table table-striped table-bordered text-[14px] table-sm">
            <thead className="fw-300 w-100 text-muted">
              <tr>
                <th>
                  <td></td>
                </th>
                <th className="text-muted">
                  <td>Equity delivery</td>
                </th>
                <th className="text-muted">
                  <td>Equity intraday</td>
                </th>
                <th className="text-muted">
                  <td>F&O - Futures</td>
                </th>
                <th className="text-muted">
                  <td>F&O - Options</td>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row" className="p-4 mt-3">
                  Brokerage
                </td>
                <td className="mt-3">Zero Brokerage</td>
                <td className="w-[15%] text-muted">
                  0.03% or Rs. 20/executed
                  <br /> order whichever is lower
                </td>
                <td className="w-[15%] text-muted">
                  @0.03% or Rs. 20/executed <br />
                  order whichever is lower
                </td>
                <td className="w-[15%] text-muted">
                  Flat Rs. 20 per executed order
                </td>
              </tr>

              <tr>
                <td scope="row">STT/CTT </td>
                <td className="w-[15%] text-muted">0.1% on buy & sell</td>
                <td className="w-[15%] text-muted">00.025% on the sell side</td>
                <td className="w-[15%] text-muted">0.02% on the sell side </td>
                <td className="w-[15%] text-muted">
                  <li>
                    0.125% of the intrinsic value on
                    <br /> options that are bought and
                    <br /> exercised 0.1% on sell side (on premium)
                  </li>
                  <li>Flat Rs. 20 per executed order</li>
                </td>
              </tr>

              <tr className="text-muted">
                <td scope="row" className="pt-3 pl-3 w-[10%]">
                  GST
                </td>
                <td className="w-[15%] text-muted">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="w-[15%] text-muted">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="w-[15%] text-muted">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="w-[15%] text-muted">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>

              <tr>
                <td scope="row">SEBI charges</td>
                <td className="w-[15%] text-muted">₹10 / crore</td>
                <td className="w-[15%] text-muted">₹10 / crore</td>
                <td className="w-[15%] text-muted">₹10 / crore</td>
                <td className="w-[15%] text-muted">₹10 / crore</td>
              </tr>

              <tr>
                <td scope="row">Stamp charges</td>
                <td className="w-[15%] text-muted">
                  0.015% or ₹1500 / crore on buy side
                </td>
                <td className="w-[15%] text-muted">
                  0.003% or ₹300 / crore on buy side
                </td>
                <td className="w-[15%] text-muted">
                  @0.002% or ₹200 / crore on buy sidex
                </td>
                <td className="w-[15%] text-muted">
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
