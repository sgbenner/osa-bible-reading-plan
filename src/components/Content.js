import React from "react";
import moment from "moment";
import readingPlan from "../_data/readingPlan";

const scriptureUrlPrefix = 'https://www.biblegateway.com/passage/?search='
const scriptureUrlSuffix = '&version=ESV'

function createScriptpureLink (scripture) {
    return scriptureUrlPrefix + encodeURIComponent(scripture) + scriptureUrlSuffix
}

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
                        {/* If OT script exists, add to section */}
                        {post.oldTestament !== '' ? <p>{`Old Testament: ` }
                            <a href={`${createScriptpureLink(post.oldTestament)}`} target="_blank" rel="noreferrer">{`${post.oldTestament}`}</a></p> : undefined}
                        {/* If NT script exists, add to section */}
                        {post.newTestament !== '' ? <p>{`New Testament: ` }
                        <a href={`${createScriptpureLink(post.newTestament)}`} target="_blank" rel="noreferrer">{`${post.newTestament}`}</a></p> : undefined}
                    </div>
                );
            })}
        </div>
    );
};

export default Content;
