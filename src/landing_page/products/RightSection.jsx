import { GoArrowRight } from "react-icons/go";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  linkOne,
  linkTwo,
}) {
  return (
    <div className="container my-5 ">
      <div className="row mx-auto justify-evenly">
        <div className="col-5 d-flex flex-col justify-center align-center w-25">
          <h3>{productName}</h3>
          <p className="my-3 leading-loose fs-6">{productDescription}</p>
          {linkOne.length > 1 && (
            <div className="d-flex flex-row gap-5">
              <a href="">
                <p>
                  {linkOne} <GoArrowRight className="iconStyle" />
                </p>
              </a>
              {linkTwo.length > 1 && (
                <a href="">
                  <p>
                    {linkTwo} <GoArrowRight className="iconStyle" />
                  </p>
                </a>
              )}
            </div>
          )}
        </div>
        <div className="col-7 ">
          <img src={imageURL} className="" />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
