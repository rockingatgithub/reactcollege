import React from "react";
import img1 from "./college_01.jpg";
import img2 from "./college_02.jpg";

function College(props) {
  const { college, imgind } = props;
  return (
    <div className="collegeitem">
      {college.promoted && <img src="" className="promoted" />}
      <div className="overlay">
        <img
          src={imgind % 2 === 0 ? img1 : img2}
          alt="college image"
          className="collegeimage"
        />
      </div>
      <div className="rating-box">
        <div className="coverup">
          <span className="givenrating">3.9</span>/5
          <br />
          Very Good
        </div>
      </div>
      <div className="tagbox">
        {college.tags.map((tag, ind) => (
          <div className={`tags-${ind}`}>
            <span className={`tagstext-${ind}`}>{tag}</span>
          </div>
        ))}
      </div>
      <div className="ranking">#{college.ranking}</div>
      <div className="collegename">{college.college_name}</div>
      <img src="" className="collegerating" />
      <div className="originalprice">{college.original_fees}</div>
      <img className="disctag" src="" />
      <div className="nearplace">
        {college.nearest_place.map((place, ind) => (
          <div className={`nearplace-${ind}`}>
            {place}
            {ind === 0 && " |"}
          </div>
        ))}
      </div>

      <div className="disc_fees">{college.discounted_fees}</div>
      <div className="fee-cycle">{college.fees_cycle}</div>
      <div className="famous-place">
        <span className="matchtext">93% Match: </span>
        <span className="matchtextnames">{college.famous_nearest_places}</span>
      </div>

      <div className="offertext">{college.offertext}</div>

      {college.amenties.map((amenty) => (
        <div className="amenty">{amenty}</div>
      ))}
    </div>
  );
}

export default College;
