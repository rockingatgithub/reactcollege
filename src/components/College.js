// ==================================================the college card component=================================

import React from "react";
import img1 from "./college_01.jpg";
import img2 from "./college_02.jpg";
import promotedtext from "./promotedtext.png";
import disccount from "./disccount.svg";
import ratingstars from "./ratingstars.PNG";

function College(props) {
  const { college, imgind } = props;
  return (
    <div className="collegeitem">
      {college.promoted && <img src={promotedtext} className="promoted" />}
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
      <div className="secondbox">
        <div className="collegename">{college.college_name}</div>
        <img src={ratingstars} className="collegerating" />
        <div className="originalprice">{college.original_fees}</div>
        <img className="disctag" src={disccount} />
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
          <span className="matchtextnames">
            <span className="matchsubtext">2.5kms</span>
            {college.famous_nearest_places}
            <span className="matchsubtext-1">
              7 Kms {` ${college.famous_nearest_places_2}`}
            </span>
          </span>
        </div>

        <div className="offertext">
          <span className="offertextbox">
            {`${college.offertext1}${" "}`}{" "}
            <span className="offersubtext"> 2,000</span>
            {`${" "}${college.offertext2}${" "}`}{" "}
            <span className="offersubtext"> 500</span>
            {`${" "}${college.offertext3}${" "}`}{" "}
            <span className="offersubtext"> LOGIN</span>
          </span>
        </div>

        <div className="amentybox">
          {college.amenties.map((amenty, ind) => (
            <div className={`amenty-${ind}`}>
              {amenty}
              {ind === 0 && <span className="dotbox">.</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default College;
