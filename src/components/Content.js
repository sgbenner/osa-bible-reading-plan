import React from "react";
import moment from "moment";
import readingPlan from "../_data/readingPlan";

const Content = ({ styles }) => {
  
  const contentStyle = {
    paddingTop: styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.footerMenuHeight + 20,
    paddingLeft: 20
  };

  return (
    <div style={contentStyle}>
      {readingPlan.map((post, i) => {
        return (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 0 }}>{moment(post.day).format('dddd MMMM D, YYYY')}</h2>
            <p>{post.oldTestament}</p>
            <p>{post.newTestament}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
