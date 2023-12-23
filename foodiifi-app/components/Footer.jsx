import { LINKEDIN_URL } from "../src/constants";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        Created By 💛
        <a href={LINKEDIN_URL} target="_blank">
          Bhavesh Wagh
        </a>
        <div>&copy; {new Date().getFullYear()}</div>
        <strong>
          Foodiiiee<span>Fi</span>
        </strong>
      </div>
    </div>
  );
};

export default Footer;
