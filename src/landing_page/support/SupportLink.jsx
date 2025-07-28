import CustomAccordion from "./CustomAccordion";

function SupportLink({ icon, title, link }) {
  return (
    <div className="ml-4 mt-4">
      <CustomAccordion title={title} content={link} Icon={icon} />
    </div>
  );
}

export default SupportLink;
