var getMaxElement = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var maxElement = arr[0];
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}

window.renderStatistics = function (ctx, NAMES, times) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(110,20,420,270);
        ctx.fillStyle = 'white';
        ctx.fillRect(100,10,420,270);
        ctx.strokeStyle = 'yellow';
        ctx.beginPath();
        ctx.font = '16px PT Mono';
        ctx.fillStyle = 'black';
        ctx.fillText('Ура, вы победили!', 215, 40);
        ctx.fillText('Список результатов: ', 215, 60);

        var maxTime = getMaxElement(times);

        var gistagramHeight = 150;
        var widthCol = 40;
        var distanceCol = 50;

        for (var j = 0; j < times.length; j++) {
            var heightCol = (times[j] * gistagramHeight) / maxTime;
            ctx.fillRect(200 + widthCol + distanceCol, 100 + distanceCol + (distanceCol + 20) * i, widthCol, heightCol);
        }

}

