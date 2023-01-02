const readingPlanJSON = require('./reading-plan.json')

const readingPlan = () => {

    let data = []

    for (var key in readingPlanJSON) {
        if (readingPlanJSON.hasOwnProperty(key)) {
            const day = key;
            const oldTestament = readingPlanJSON[key].oldTestament
            const newTestament = readingPlanJSON[key].newTestament

            const item = {day: day, oldTestament: oldTestament, newTestament: newTestament}

            data.push(item)
        }
    }

    return data;

}

const data = readingPlan()

module.exports = data