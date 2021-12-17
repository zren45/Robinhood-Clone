<<<<<<< HEAD
import React from "react";
import "./Newsfeed.css";
import Linegraph from "./Linegraph";

import Chip from "@material-ui/core/Chip";
import { Avatar } from "@material-ui/core";

function Newsfeed() {
  const popularTopics = [
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ];
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1 className="newsfeed__portfolioHeading">$8888</h1>
            <p className="newsfeed__portfolioParagraph">+$32.7 (+0.3%) Today</p>

            <div className="newsfeed__chart">
              <Linegraph />
            </div>
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2 className="newsfeed__buying__heading"> Buying Power</h2>
          <h2 className="newsfeed__buying__heading"> $4.11</h2>
        </div>

        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1 className="newsfeed__popularlists__heading">Trending Lists</h1>
            {/* <p className="newsfeed__popularlists__p">Show More</p> */}
          </div>
          <div className="newsfeed_popularlists_badges">
            {popularTopics.map((topic) => (
              <Chip
                className="topic__badge"
                size="medium"
                clickable={true}
                variant="outlined"
                label={topic}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/jdenticon/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
=======
import React from "react";
import "./Newsfeed.css";
import Linegraph from "./Linegraph";

import Chip from "@material-ui/core/Chip";
import { Avatar } from "@material-ui/core";

function Newsfeed() {
  const popularTopics = [
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ];
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1 className="newsfeed__portfolioHeading">$8888</h1>
            <p className="newsfeed__portfolioParagraph">+$32.7 (+0.3%) Today</p>

            <div className="newsfeed__chart">
              <Linegraph />
            </div>
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2 className="newsfeed__buying__heading"> Buying Power</h2>
          <h2 className="newsfeed__buying__heading"> $4.11</h2>
        </div>

        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1 className="newsfeed__popularlists__heading">Trending Lists</h1>
            {/* <p className="newsfeed__popularlists__p">Show More</p> */}
          </div>
          <div className="newsfeed_popularlists_badges">
            {popularTopics.map((topic) => (
              <Chip
                className="topic__badge"
                size="medium"
                clickable={true}
                variant="outlined"
                label={topic}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/jdenticon/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
>>>>>>> fb1e426982acb339acff623b0fcf145be187d86c
