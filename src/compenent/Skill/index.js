import "./style.css";

const Skill = ({name,per}) => {
  return (
    <div className="box">
      <div className="topic">{name}</div>
      <div className="per">{per}%</div>
    </div>
  );
};

export default Skill;
