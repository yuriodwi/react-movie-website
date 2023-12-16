import "./header.css";
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import Search from "../components/Search";
import MainBtn from "../components/MainBtn";

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
      <Search />
      <MainBtn
        icon={<ion-icon name="log-in-outline"></ion-icon>}
        name="Sign In"
      />
    </header>
  );
}

export default Header;
