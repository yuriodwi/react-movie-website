import "./movieContent.css";
import titleImg from "../images/the-little-mermaid-title.png";
import MainBtn from "./MainBtn";

function MovieContent() {
  return (
    <div className="content active">
      <img src={titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>Year</span>
        <span>
          <i>age</i>
        </span>
        <span>length</span>
        <span>category</span>
      </h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum libero
        dicta eos animi quibusdam vel? Sint ullam veritatis nam aut id dicta
        alias tempore ut, laboriosam voluptates necessitatibus debitis in quam
        tenetur inventore. Similique nostrum distinctio laboriosam animi nihil a
        doloremque perferendis, pariatur, quo sequi fuga esse ipsum quibusdam
        accusamus!
      </p>
      <div className="bottom">
        <MainBtn
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="Book"
          color="#ff3700"
          bgColor="#ffffff"
        />
        <MainBtn
          icon={<ion-icon name="add-outline"></ion-icon>}
          name="My List"
        />
      </div>
    </div>
  );
}

export default MovieContent;
