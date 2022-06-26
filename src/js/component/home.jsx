import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

//create your first component
const Home = (props) => {
	
  return (
		<>
		<div className="container bg-light d-flex justify-content-center">
      <div className="row">
        <div className="col">
		      <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="col">
          {props.digits.digitFour}
        </div>
        <div className="col">
          {props.digits.digitThree}
        </div>
        <div className="col">
          {props.digits.digitTwo}
        </div>
        <div className="col">
          {props.digits.digitOne}
        </div>
      </div>
    </div>
		</>
	);
};

export default Home;
