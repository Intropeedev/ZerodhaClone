import Hero from "./Hero";
import Plan from "./Plan";
import OpenAccount from "../OpenAccount";
import StepsToNewAcc from "./StepsToNewAcc";
import Benefits from "./Benefit";
import AccountType from "./AccoutnType";
import FAQ from "./FAQ";

function Signup() {
  return (
    <>
      <Hero />
      <Plan />
      <StepsToNewAcc />
      <Benefits />
      <AccountType />
      <FAQ />
      <OpenAccount />
    </>
  );
}

export default Signup;
