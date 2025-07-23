import { GoArrowRight } from "react-icons/go";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  linkOne,
  linkTwo,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5">
      <div className="row mx-auto gap-5 justify-center">
        <div className="col-6 p-5 ">
          <img src={imageURL} />
        </div>
        <div className="col-4 p-5 my-5 ">
          <h3>{productName}</h3>
          <p className="my-3 leading-loose fs-6">{productDescription}</p>

          {linkOne && linkOne.length > 1 && (
            <div className="d-flex flex-row gap-5">
              <a href="">
                <p>
                  {linkOne} <GoArrowRight className="iconStyle" />
                </p>
              </a>
              {linkTwo && linkTwo.length > 1 && (
                <a href="">
                  <p>
                    {linkTwo} <GoArrowRight className="iconStyle" />
                  </p>
                </a>
              )}
            </div>
          )}

          <div className="d-flex flex-row gap-3 mt-3">
            <a href={googlePlay}>
              <img src="/media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="/media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
