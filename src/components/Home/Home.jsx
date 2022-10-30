import Favour from "./favour.jpg";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div className="profile_img">
        <img src={Favour} id="profile_img" alt="" />
      </div>

      <h3 id="twitter"> @shunnode </h3>
      <h2 id="slack"> favourkcb</h2>

      <div className="links">
        <a className="button" href="https://training.zuri.team/" id="btn_zuri" role="button">
          {" "}
          <div className="link-text">
            <h2> Zuri</h2></div>{" "}
          
        </a>

        <a id="books" href="https://books.zuri.team" role="button">
          <div className="link-text">
          <h2> books</h2>
          <p> follow this link to resource for design and coding </p>
          </div>
        </a>

        <a
          href="https://https://books.zuri.team/python-for-beginners?ref_id=<favourkcb"
          id="book_python"
          role="button"
        >
          {" "}
          <div className="link-text"> <h2>Python Book</h2></div>
        </a>

        <a href="https://background.zuri.team" id="pitch" role="button">
          {" "}
         <div className="link-text"> <h2>background</h2></div>
        </a>

        <a href="href://books.zuri.team/design-rules">
          <div className="link-text">
          <h2>Design Rules</h2>
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            rerum.
          </p>
          </div>
        </a>
      </div>
    </main>
  );
};

export default Home;
