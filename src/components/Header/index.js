import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";

const Header = (props) => (
  <AppBar position="static" color="primary">
    <div className="header">
      <p className="title">
        <Link to="/">Lista de Compras</Link>
      </p>
    </div>
  </AppBar>
);

export default Header;
