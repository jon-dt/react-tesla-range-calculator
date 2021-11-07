import "./TeslaCar.css";
import PropTypes from "react";
import Car from "../../assets/tesla.jpg";

const TeslaCar = (props) => (
  <div className="tesla-car">
    <img src={Car} alt="Car" />
    <div className="tesla-wheels">
      <div
        className={`tesla-wheel tesla-wheel--front tesla-wheel--${props.wheelsize}`}
      >
        sdasdsadad
      </div>
      <div
        className={`tesla-wheel tesla-wheel--rear tesla-wheel--${props.wheelsize}`}
      >
        sdasdsadad
      </div>
    </div>
  </div>
);

TeslaCar.propTypes = {
  wheelsize: PropTypes.number
};

export default TeslaCar;
