function setComment(date, message, author = 'Anonymous') {
    if (!date && !message) return alert('данные переданы не верно');
    console.log(author + ", " + date + "\n" + message);
}

setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');
