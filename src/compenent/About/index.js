import "./style.css";

const About = ({photo,title,about}) => {
  return (
    <div className="about-details">
      <div className="left">
        <img src={photo} alt="photo_there" />
      </div>
      <div className="right">
        <div className="topic">{title}</div>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default About;
