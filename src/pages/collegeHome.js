import React, { Component } from "react";
import { connect } from "react-redux";
import collegDuniaJsonData from "./colleges.json";
import collegeImage from "../images/college_02.jpg";
import StarRatings from "react-rating-stars-component";
import { faRupeeSign, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CollegeHome extends Component {
  state = {
    lastArticle: 9
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const galleryBottomPosition =
      document.getElementById("gallery-1").offsetHeight +
      document.getElementById("gallery-1").offsetTop;
    const lastArticlePosition = document.getElementById(
      "" + this.state.lastArticle
    ).offsetTop;
  };

  getPreview = () => {
    return collegDuniaJsonData.colleges.map((college, index) => (
      <article className="card" id={index}>
        <figure className="figure-margin">
          <img className="card-img" src={collegeImage} />
          <figcaption className="card-caption">
            <button>{college.tags[1]}</button>
            <em className="ranking">#{college.ranking}</em>
          </figcaption>
        </figure>
        <div className="content-body">
          <div className="college-name-star-rating">
            {college.college_name}{" "}
            <StarRatings count={college.rating} size={10} color2={"#ffd700"} />
            <div className="fees-discounts">
              <span className="fees">{college.original_fees.toString()}</span>{" "}
              <FontAwesomeIcon icon={faTag} />
              <span className="discounts">{college.discount}</span>{" "}
            </div>
          </div>
          <div className="near-place">
            <small>
              {college.nearest_place[0]} | {college.nearest_place[1]}{" "}
            </small>
            <div className="discount">
              <FontAwesomeIcon icon={faRupeeSign} />
              {college.discounted_fees}
            </div>
            <div className="features">
              <span>{college.amenties[0]}</span>.
              <span>{college.amenties[1]}</span>
            </div>
          </div>
        </div>
      </article>
    ));
  };

  render() {
    return <section id="gallery-1">{this.getPreview()}</section>;
  }
}

export default connect(null, {})(CollegeHome);
