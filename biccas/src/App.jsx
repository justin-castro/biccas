import "./App.css";
import Navigation from "./Navigation";
import Header from "./Header";
import Offering from "./Offering";
function App() {
  return (
    <div className="px-24 pt-8">
      <Header/>
      <Offering/>
      <div className="features">
        <div className="featuresHeading">
          <div className="featuresHeadingMain"></div>
          <div className="featuresHeadingSub"></div>
          <div className="featuresHeadingButton"></div>
        </div>
        <div className="featuresCards">
          <div className="featuresCard"></div>
          <div className="featuresCard"></div>
          <div className="featuresCard"></div>
        </div>
      </div>
      <div className="benefits">
        <div className="benefitsText">
          <div className="benefitsHeading"></div>
          <div className="benefitsList"></div>
        </div>
        <div className="benefitsImage"></div>
      </div>
      <div className="pricing">
        <div className="pricingHeading">
          <div className="pricingHeadingMain"></div>
          <div className="pricingHeadingSub"></div>
          <div className="pricingHeadingToggle"></div>
        </div>
        <div className="pricingCards">
          <div className="pricingCard"></div>
          <div className="pricingCard"></div>
          <div className="pricingCard"></div>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonialSection">
          <div className="testimonialCard">
            <div className="testimonialHeader"></div>
            <div className="testimonialText"></div>
            <div className="testimonialImage"></div>
            <div className="testimonialQuote"></div>
            <div className="testimonialAvatars"></div>
          </div>
          <div className="signup">
            <div className="signupHeading"></div>
            <div className="signupEmailInput"></div>
            <div className="signupEmailMessage"></div>
            <div className="signupButton"></div>
            <div className="signupFreeTrial"></div>
          </div>
        </div>
        <div className="footer">
          <div className="footerSection1">
            <div className="footerLogo"></div>
            <div className="footerSubText"></div>
            <div className="footerSignUp"></div>
          </div>
          <div className="footerSection2">
            <div className="footerLinks">
              <div className="footerLink"></div>
              <div className="footerLink"></div>
              <div className="footerLink"></div>
              <div className="footerLink"></div>
            </div>
            <div className="footerLinks">
              <div className="footerLink"></div>
              <div className="footerLink"></div>
              <div className="footerLink"></div>
              <div className="footerLink"></div>
            </div>
            <div className="footerLinks">
              <div className="footerLink"></div>
              <div className="footerLink"></div>
              <div className="footerLink"></div>
              <div className="footerLink"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
