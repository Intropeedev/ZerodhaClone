import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const CustomAccordion = ({ title, content, Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border mb-2 ml-5">
      <div className="d-flex">
        <Icon
          className="text-primary text-[60px] p-3"
          style={{ backgroundColor: "#f7fbfe" }}
        />
        <div
          className=" d-flex w-100 justify-between gap-5 px-4 mt-4 mb-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}
        >
          <h6 className="mb-0 fs-6">{title}</h6>
          <span style={{ color: "#387ed1" }}>
            {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="p-3 border-top bg-white">
          <p className="mb-0">{content}</p>
        </div>
      )}
    </div>
  );
};

export default CustomAccordion;
