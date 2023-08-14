import { Link } from "react-router-dom";
import "./styles.css";

const HomeButton = () => {
  return (
    <div className="btn-container">
      <button className="btn bg-primary">
        <Link to="/githubsearch">
          <h6>Começar</h6>
        </Link>
      </button>
    </div>
  );
};

export default HomeButton;
