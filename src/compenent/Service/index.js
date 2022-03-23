import "./style.css";



const Service = ({service,title,icon}) => {
  return (
    <div className="box ">
      <div className="icon flex">
        {icon}
      </div>
      <div className="topic">{service}</div>
      <p>
        {title}
      </p>
    </div>
  );
};


export default Service;