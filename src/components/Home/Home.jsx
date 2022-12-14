import Logo from "../picture/picture";
import Favour from "./favour.jpg";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div className="profile__img">
        <img src={Favour} id="profile_img" alt="" />
      </div>

      <h1 id="twitter-name"> Shunnode </h1>
      <h2 id="slack">  Shun </h2>

      <div className="links">
        <a href="twitter.com/shunnode" id="twitter" role='button'>
          Twitter Link
        </a>

        <a  href="https://training.zuri.team/" id="btn__zuri" role="button">
           Zuri Team
          
        </a>

        <a id="books" href="https://books.zuri.team" title="follow this link to resource for design and coding" role="button">
          Zuri Books
        </a>

        <a title="Python books broken down to your level of understanding"
          href="https://https://books.zuri.team/python-for-beginners?ref_id=Shun"
          id="book__python"
          role="button"
        >
          Python books
        </a>

        <a href="https://background.zuri.team" id="pitch" role="button" title=" checkr">
        Background Check For Coders
        </a>

        <a href="href://books.zuri.team/design-rules" id="book__design" title=" this is the best design book around for now">
          Design Books
        </a>

        <a id="contact" href="/contact">
          Contact Me
        </a>
      </div> <br/><br/>
      <Logo />
    </main>
  );
};

export default Home;
