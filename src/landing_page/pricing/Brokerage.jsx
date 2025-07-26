function Brokerage() {
  return (
    <div className="container mx-auto my-5">
      <div className="row justify-end my-5">
        <div className="col-1"></div>
        <div className="col-10">
          <h4>Charges for account opening</h4>
          <table className="table table-striped table-bordered text-[14px] table-sm mt-4">
            <thead className="fw-300 text-muted">
              <tr>
                <th className="text-muted">
                  <td>Type of account</td>
                </th>
                <th className="text-muted">
                  <td>Charges</td>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row" className="p-4 mt-3">
                  Online account
                </td>
                <td className="mt-3">free</td>
              </tr>

              <tr>
                <td scope="row">Offline account</td>
                <td className="mt-3">free</td>
              </tr>

              <tr className="text-muted">
                <td scope="row" className="pt-3 pl-3">
                  NRI account (offline only)
                </td>
                <td className="w-[15%] text-muted">₹ 500</td>
              </tr>

              <tr>
                <td scope="row">
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td className="w-[15%] text-muted">₹ 500</td>
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
          <table className="table table-striped table-bordered text-[14px] table-sm mt-4">
            <thead className="fw-300 text-muted">
              <tr>
                <th className="text-muted">
                  <td>Type of account</td>
                </th>
                <th className="text-muted">
                  <td>Charges</td>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row" className="p-4 mt-3">
                  Online account
                </td>
                <td className="mt-3">free</td>
              </tr>

              <tr>
                <td scope="row">Offline account</td>
                <td className="mt-3">free</td>
              </tr>

              <tr className="text-muted">
                <td scope="row" className="pt-3 pl-3">
                  NRI account (offline only)
                </td>
                <td className="w-[15%] text-muted">₹ 500</td>
              </tr>

              <tr>
                <td scope="row">
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td className="w-[15%] text-muted">₹ 500</td>
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
