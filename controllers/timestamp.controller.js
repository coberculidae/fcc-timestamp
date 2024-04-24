const formatDate = require('../services/formatTime')

const timeStamp = async (req, res) => {
    if (req.params.date.includes('-')) {
        const date = new Date(req.params.date)
        const utc = formatDate(date)
        res.json({
            unix: Date.parse(date),
            utc: utc
        })
    } else {
        const date = new Date(req.params.date / 1000)
        const utc = formatDate(date)
        res.json({
            unix: req.params.date,
            utc: utc
        })
    }

}

module.exports = timeStamp