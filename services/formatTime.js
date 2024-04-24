const formatTime = (time) => {
    const week = ['','Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = String(week[time.getUTCDay()]);
    const date = String(time.getUTCDate()).padStart(2, '0');
    const month = String(months[time.getUTCMonth()])
    const year = String(time.getUTCFullYear()).padStart(4, '0');
    const hours = String(time.getUTCHours()).padStart(2, '0');
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const timestamp = `${day}, ${date} ${month} ${year} ${hours}:${minutes}:${seconds} GMT`
    return timestamp
}

module.exports = formatTime