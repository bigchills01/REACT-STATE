import "./Profil.css";

const Profil = (props) => {
  const { img, fullName, profession, bio } = props.persone;
  return (
    <div className="center">
      <div className="avatar">
        <img src={require('../../image/pics.jpg')} alt="img" />
      </div>
      <div className="contente" style={{ padding: "20px" }}>
        <h1 style={{ color: "darkblue" }}>{fullName}</h1>
        <h2 style={{ color: "brown" }}>{profession}</h2>
        <p style={{ color: "black" }}>{bio}</p>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          <i className="far fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};
export default Profil;
