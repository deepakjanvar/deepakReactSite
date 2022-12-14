import { NavLink } from "react-router-dom";
import web from "./img/s1.jpg"

function Card(props) {
  return (
    <>

      <div className="col-md-4 col-10 max-auto">
        <div className="card w-100" style={{ width: "18rem" }}>
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc
          } />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
          </div>
        </div>
      </div>

    </>
  );
}

export default Card;