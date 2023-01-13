import React, { useEffect, useRef } from 'react';
import moment from "moment";
import readingPlan from "../_data/readingPlan";

const scriptureUrlPrefix = 'https://www.biblegateway.com/passage/?search='
const scriptureUrlSuffix = '&version=ESV'

function createScriptpureLink(scripture) {
    return scriptureUrlPrefix + encodeURIComponent(scripture) + scriptureUrlSuffix
}


const Content2 = ({ styles }) => {
    const contentStyle = {
        paddingTop: styles.topBarHeight + 20,
        paddingRight: 20,
        paddingBottom: styles.footerMenuHeight + 20,
        paddingLeft: 20
    };

    const today = new Date().getDate();
    const todayRef = useRef(null);


    console.log(`today: ${today}`)

    useEffect(() => {
        todayRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);

    // const [checked, setChecked] = useState([]);

    // // Add/Remove checked item from list
    // const handleCheck = (event) => {
    //     var updatedList = [...checked];
    //     if (event.target.checked) {
    //     updatedList = [...checked, event.target.value];
    //     } else {
    //     updatedList.splice(checked.indexOf(event.target.value), 1);
    //     }
    //     setChecked(updatedList);
    // };

    // // Return classes based on whether item is checked
    // const isChecked = (item) => checked.includes(item) ? "checked-item" : "not-checked-item";

    return (
        <div style={contentStyle}>
            {readingPlan.map((todaysReading, i) => {
                return (
                    <div ref={i + 2 === today ? todayRef : null} key={i} style={{ marginBottom: 40 }}>
                        <h2 style={{ marginBottom: 0 }}>{moment(todaysReading.day).format('dddd, MMMM D, YYYY')}</h2>
                        {/* If OT script exists, add to section */}
                        {todaysReading.oldTestament !== '' ?
                            <p>
                                {/* <input value={todaysReading} type="checkbox" onChange={handleCheck} /> */}
                                {/* <input value={todaysReading}/> */}
                                {`Old Testament: `}<a href={`${createScriptpureLink(todaysReading.oldTestament)}`} target="_blank" rel="noreferrer">{`${todaysReading.oldTestament}`}</a>
                            </p> : undefined}
                        {/* If NT script exists, add to section */}
                        {todaysReading.newTestament !== '' ?
                            <p>
                                {/* <input value={todaysReading} type="checkbox" onChange={handleCheck} /> */}
                                {/* <input value={todaysReading} type="checkbox" onChange={handleCheck} /> */}
                                {`New Testament: `}<a href={`${createScriptpureLink(todaysReading.newTestament)}`} target="_blank" rel="noreferrer">{`${todaysReading.newTestament}`}</a>
                            </p> : undefined}
                    </div>
                )
            })}
        </div >
    )

};

export default Content2;
