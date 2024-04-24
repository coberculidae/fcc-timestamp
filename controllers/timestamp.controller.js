const formatDate = require('../services/formatTime')

const timeStamp = async (req, res) => {
if (req.params.date.includes('-')) {
        const date = new Date(req.params.date)
        console.log(date)
        const utc = formatDate(date)
        res.json({
            unix: Date.parse(date),
            utc: utc
        })
    } else {
        const unixNumber = Number(req.params.date)
        const date = new Date(unixNumber);
        console.log(date)
        const utc = formatDate(date);
        const unix = req.params.date;
        res.json({
            unix: unix,
            utc: utc
        })
    }
}

module.exports = timeStamp