import "./mainBtn.css";

function MainBtn({ icon, name, color = "#ffffff", bgColor = "#ff3700" }) {
  return (
    <a
      href="#"
      className="mainBtn"
      style={{ color: color, background: bgColor }}
    >
      {icon} {name}
    </a>
  );
}

export default MainBtn;
