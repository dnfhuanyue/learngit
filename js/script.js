(function () {
    var index = 1;
    function lunbo() {
        index++;
        if (index > 3) {
            index = 1;
        }
        var lunbotu = document.getElementById("lunbotu");
        lunbotu.src = './images/lunbo' + index + '.jpg';
    };

    setInterval(lunbo, 5000);
}());