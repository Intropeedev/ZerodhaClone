function SupportLink() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div class="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Account opening
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li> Residential individual </li>
                      <li>Non Resident Indian (NRI)</li>
                      <li>Minor</li>
                      <li>Company, Partnership, HUF and LLP</li>
                      <li>Glossary</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}

export default SupportLink;
