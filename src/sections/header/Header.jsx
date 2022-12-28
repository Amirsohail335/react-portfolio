import "./header.css";
import HeaderImage from "../../assets/header.jpg";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Amir Sohail</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          itaque dicta et odit. Quaerat atque modi, enim distinctio commodi
          amet, porro, accusamus ut cupiditate nihil numquam dolor obcaecati
          fugiat alias inventore
        </p>
      </div>
    </header>
  );
};

export default Header;
