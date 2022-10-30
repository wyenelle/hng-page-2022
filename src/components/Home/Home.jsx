import Favour from "./favour.jpg";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div className="profile_img">
        <img src={Favour} id="profile_img" alt="" />
      </div>

      <h3 id="twitter"> Favour Timothy </h3>
      <h2 id="slack"> favourkcb</h2>

      <div className="links">
        <a href="twitter.com/shunnode" id="twitter" role='button'><h2 className="link-text"> Twitter Link </h2></a>
        
        <a  href="https://training.zuri.team/" id="btn_zuri" role="button">
          {" "}
          <div className="link-text">
            <h2> Zuri Team</h2></div>{" "}
          
        </a>

        <a id="books" href="https://books.zuri.team" title="follow this link to resource for design and coding" role="button">
          <div className="link-text">
          <h2>Zuri books</h2>
          
          </div>
        </a>

        <a title="Python books broken down to your level of understanding"
          href="https://https://books.zuri.team/python-for-beginners?ref_id=s-h-u-n"
          id="book_python"
          role="button"
        >
          {" "}
          <div className="link-text"> <h2>Python Books</h2></div>
        </a>

        <a href="https://background.zuri.team" id="pitch" role="button" title=" checkr">
          {" "}
         <div className="link-text"> <h2>Background Check for coders</h2></div>
        </a>

        <a href="href://books.zuri.team/design-rules" id="book_design" title=" this is the best design book around for now">
          <div className="link-text">
          <h2>Design Books</h2>
         
          </div>
        </a>
      </div>
    </main>
  );
};

export default Home;
