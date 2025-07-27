function Brokerage() {
  return (
    <div className="container mx-auto my-5">
      <div className="row justify-end my-5">
        <div className="col-1"></div>
        <div className="col-10 my-5">
          <h4>Charges for account opening</h4>
          <table className="border text-[14px] outer-border-only w-full table-sm text-muted mt-4">
            <thead className="fw-100">
              <tr>
                <th className="p-3 text-[14px]">Type of account</th>
                <th className="p-2">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-top">
                <td scope="row" className="p-3 mt-3">
                  Online account
                </td>
                <td>
                  <p className="bg-[#4caf50] w-[50px] text-white text-center py-1 m-2 rounded-sm fw-300 text-[12px]">
                    FREE
                  </p>
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td scope="row" className="p-3 mt-3">
                  Offline account
                </td>
                <td>
                  <p className="bg-[#4caf50] w-[50px] text-white text-center py-1 m-2 rounded-sm fw-300 text-[12px]">
                    FREE
                  </p>
                </td>
              </tr>

              <tr>
                <td scope="row" className="p-3 mt-3">
                  NRI account (offline only)
                </td>
                <td className="p-3 mt-3">₹ 500</td>
              </tr>

              <tr className="bg-gray-50">
                <td scope="row" className="p-3 mt-3 ">
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td className="p-3 mt-3">₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row justify-end">
        <div className="col-1"></div>
        <div className="col-10">
          <h4>Charges for optional value added services</h4>
          <table className="border outer-border-only w-full text-[14px] table-sm mt-4 text-muted">
            <thead>
              <tr>
                <th className="p-3 mt-3 w-25">Service</th>
                <th className="p-3 mt-3 w-25">Billing Frquency</th>
                <th className="p-3 mt-3 w-100">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-top">
                <td scope="row" className="p-3 mt-3 ">
                  Tickertape
                </td>
                <td className="p-3 mt-3 ">Monthly / Annual</td>
                <td className="p-3 mt-3 ">Free: 0 | Pro: 249/2399</td>
              </tr>

              <tr className="bg-gray-50">
                <td scope="row" className="p-3 mt-3 ">
                  Smallcase
                </td>
                <td className="p-3 mt-3 ">Per transaction</td>
                <td className="p-3 mt-3 ">Buy & Invest More: 100 | SIP: 10</td>
              </tr>

              <tr>
                <td scope="row" className="p-3 mt-3 ">
                  Kite Connect
                </td>
                <td className="p-3 mt-3">Monthly</td>
                <td className="p-3 mt-3">Connect: 500 | Historical: 500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Brokerage;
