import CustomAccordion from "./CustomAccordion";

function SupportLink({ icon, title, link }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="container mt-4">
            <CustomAccordion title={title} content={link} Icon={icon} />
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default SupportLink;
