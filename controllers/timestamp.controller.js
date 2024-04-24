
const timeStamp = async (req, res) => {
    if (!req.params.date) {
        const date = new Date()
        const utc = formatDate(date)
        res.json({
            unix: Date.parse(date),
            utc: utc
        })
    } else {
        if (req.params.date.includes('-')) {
            const date = new Date(req.params.date)
            if (isNaN(date.getTime())) {
                res.json({ error: 'Invalid Date' })
            } else {
                const utc = formatDate(date)
                res.json({
                    unix: date.getTime(),
                    utc: date.toUTCString()
                })
            }
        } else {
            const unix = Number(req.params.date)
            const date = new Date(unix);
            if (isNaN(date.getTime())) {
                res.json({ error: 'Invalid Date' })
            } else {
                const utc = formatDate(date);
                res.json({
                    unix: date.getTime(),
                    utc: date.toUTCString()
                })
            }
        }
    }   
}

module.exports = timeStamp