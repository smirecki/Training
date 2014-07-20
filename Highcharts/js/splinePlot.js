$(function () {
    $('#container').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Tide',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: empty',
            x: -20
        },
        xAxis: {
            categories: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
                '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']
        },
        yAxis: {
            title: {
                text: 'height (°scale)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'London',
            data: [1.040, 1.093, 1.316, 1.658, 2.030, 2.330, 2.476, 2.418, 2.159, 1.749, 1.273, 0.834, 0.523, 0.404, 0.496, 0.771, 1.160, 1.571, 1.910, 2.102, 2.113, 1.950, 1.668, 1.347]
        }]
    });
});