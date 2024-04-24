const formatTime = (time) => {
    const week = ['','Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = week[time.getUTCDay()];
    const date = time.getUTCDate();
    const month = months[time.getUTCMonth()]
    const year = time.getUTCFullYear();
    const hours = String(time.getUTCHours()).padStart(2, '0');
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const timestamp = `${day}, ${date} ${month} ${year} ${hours}:${minutes}:${seconds} GMT`
    return timestamp
}

module.exports = formatTime