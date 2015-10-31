function Timer(objectText) {

    this.txt = objectText;
    this.clockShowTime();
};

Timer.prototype.clockShowTime = function() {
    var _this = this;
    var clockShowTime = setInterval(function() {
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        minutes = formatTime(minutes);
        seconds = formatTime(seconds);

        _this.txt.text = '' + hours + ':' + minutes + ':' + seconds;
    }, 500);

    function formatTime(i) {
        if (i < 10) {
            i = "0" + i
        };
        return i;
    };

};