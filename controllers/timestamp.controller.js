
const timeStamp = async (req, res) => {
    if (!req.params.date) {
        const date = new Date()
        res.json({
            unix: Date.parse(date),
            utc: date.toUTCString()
        })
    } else {
        if (isNaN(req.params.date)) {
            const date = new Date(req.params.date)
            if (isNaN(date.getTime())) {
                res.json({ error: 'Invalid Date' })
            } else {
                res.json({
                    unix: date.getTime(),
                    utc: date.toUTCString()
                })
            }
        } else {
            const date = new Date(unix);
            if (isNaN(date.getTime())) {
                res.json({ error: 'Invalid Date' })
            } else {
                res.json({
                    unix: date.getTime(),
                    utc: date.toUTCString()
                })
            }
        }
    }   
}

module.exports = timeStamp