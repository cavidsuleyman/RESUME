import "./style.css";

const Footerbar = ({name,title}) => {
    return (
        <footer>
        <div className="text">
          <span>
            Created By <a href="#">{name}</a> | &#169; {title}
          </span>
        </div>
      </footer>
    )
}

export default Footerbar;