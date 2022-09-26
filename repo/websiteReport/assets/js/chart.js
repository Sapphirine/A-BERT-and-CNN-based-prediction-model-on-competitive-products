google.charts.load("current", {packages:["corechart"]});
// load all pie charts needed in html
google.charts.setOnLoadCallback(apple1);
google.charts.setOnLoadCallback(apple2);
google.charts.setOnLoadCallback(apple3);
google.charts.setOnLoadCallback(apple4);
google.charts.setOnLoadCallback(apple5);
google.charts.setOnLoadCallback(Nintendo1);
google.charts.setOnLoadCallback(Nintendo2);
google.charts.setOnLoadCallback(Nintendo3);
google.charts.setOnLoadCallback(Nintendo4);
google.charts.setOnLoadCallback(Nintendo5);
google.charts.setOnLoadCallback(Samsung1);
google.charts.setOnLoadCallback(Samsung2);
google.charts.setOnLoadCallback(Samsung3);
google.charts.setOnLoadCallback(Samsung4);
google.charts.setOnLoadCallback(Samsung5);

function apple1() {
    var data = google.visualization.arrayToDataTable([
        ['type','number'],
        ['I',1400],
        ['E',163],
    ]);

    var options = {
        title: 'E/I',
        pieHole: 0.4,
        chartArea:{left:0,top:20,width:'150%',height:'200%'},
        // fontName: "FontAwesome",
        // backgroundColor: 'transparent',
        backgroundColor: 'transparent',
        // chartArea:{top:"100px"},
        // height:'200px',
        isStacked: true
    };

    // var options = {
    //     legend: { position: 'top', maxLines: 3 },
    //     bar: { groupWidth: '75%' },
    //     isStacked: true
    //   };

    var chart = new google.visualization.PieChart(document.getElementById('apple1'));
    // var cli = chart.getChartLayoutInterface();
    // console.log(cli.getChartAreaBoundingBox().top);
    chart.draw(data, options);
}

function apple2() {
    var data = google.visualization.arrayToDataTable([
        ['type','number'],
        ['S',1495],
        ['N',68],
    ]);

    var options = {
    title: 'S/N',
    pieHole: 0.3,
    backgroundColor: 'transparent',
    chartArea:{left:0,top:20,width:'150%',height:'200%'},
    };

    var chart = new google.visualization.PieChart(document.getElementById('apple2'));
    chart.draw(data, options);
}
function apple3() {
    var data = google.visualization.arrayToDataTable([
        ['type','number'],
        ['F',211],
        ['T',1352],
    ]);

    var options = {
    title: 'F/T',
    pieHole: 0.3,
    backgroundColor: 'transparent',
    chartArea:{left:0,top:20,width:'150%',height:'200%'},
    };

    var chart = new google.visualization.PieChart(document.getElementById('apple3'));
    chart.draw(data, options);
}
function apple4() {
    var data = google.visualization.arrayToDataTable([
        ['type','number'],
        ['J',177],
        ['P',1386],
    ]);

    var options = {
    title: 'J/P',
    pieHole: 0.3,
    backgroundColor: 'transparent',
    chartArea:{left:0,top:20,width:'150%',height:'200%'},
    };

    var chart = new google.visualization.PieChart(document.getElementById('apple4'));
    chart.draw(data, options);
}
function apple5() {
    var data = google.visualization.arrayToDataTable([
    ['Personality', 'quantity'],
    ['ISTJ',19],
    ['ISFJ',29],
    ['INFJ',0],
    ['INTJ', 11],
    ['ISTP',1218],
    ['ISFP', 97],
    ['INFP', 10],
    ['INTP', 16],
    ['ESTP', 11],
    ['ESFP', 19],
    ['ENFP', 15],
    ['ENTP', 0],
    ['ESTJ', 72],
    ['ESFJ', 30],
    ['ENFJ', 11],
    ['ENTJ', 5],
    ]);

    var options = {
    title: 'Apple MBTI',
    pieHole: 0.3,
    backgroundColor: 'transparent',
    chartArea:{left:0,top:20,width:'200%',height:'300%'},
    fontSize:10,
    };

    var chart = new google.visualization.PieChart(document.getElementById('apple5'));
    chart.draw(data, options);
}




function Nintendo1() {
    var data = google.visualization.arrayToDataTable([
        ['type','number'],
        ['I',2334],
        ['E',11399],
    ]);

    var options = {
        title: 'E/I',
        pieHole: 0.4,
        chartArea:{left:0,top:20,width:'150%',height:'200%'},
        backgroundColor: 'transparent',
        // isStacked: true
    };

    // var options = {
    //     legend: { position: 'top', maxLines: 3 },
    //     bar: { groupWidth: '75%' },
    //     isStacked: true
    //   };

    var chart = new google.visualization.PieChart(document.getElementById('Nintendo1'));
    // var cli = chart.getChartLayoutInterface();
    // console.log(cli.getChartAreaBoundingBox().top);
    chart.draw(data, options);
}
function Nintendo2() {
    var data = google.visualization.arrayToDataTable([
        ['type','number'],
        ['S',13656],
        ['N',77],
    ]);

    var options = {
        title: 'S/N',
        pieHole: 0.4,
        chartArea:{left:0,top:20,width:'150%',height:'200%'},
        backgroundColor: 'transparent',
        // isStacked: true
    };

    // var options = {
    //     legend: { position: 'top', maxLines: 3 },
    //     bar: { groupWidth: '75%' },
    //     isStacked: true
    //   };

    var chart = new google.visualization.PieChart(document.getElementById('Nintendo2'));
    // var cli = chart.getChartLayoutInterface();
    // console.log(cli.getChartAreaBoundingBox().top);
    chart.draw(data, options);
}
function Nintendo3() {
    var data = google.visualization.arrayToDataTable([
        ['type','number'],
        ['F',11532],
        ['T',2201],
    ]);

    var options = {
        title: 'F/T',
        pieHole: 0.4,
        chartArea:{left:0,top:20,width:'150%',height:'200%'},
        backgroundColor: 'transparent',
        // isStacked: true
    };

    // var options = {
    //     legend: { position: 'top', maxLines: 3 },
    //     bar: { groupWidth: '75%' },
    //     isStacked: true
    //   };

    var chart = new google.visualization.PieChart(document.getElementById('Nintendo3'));
    // var cli = chart.getChartLayoutInterface();
    // console.log(cli.getChartAreaBoundingBox().top);
    chart.draw(data, options);
}
function Nintendo4() {
    var data = google.visualization.arrayToDataTable([
        ['type','number'],
        ['J',7355],
        ['P',6378],
    ]);

    var options = {
        title: 'J/P',
        pieHole: 0.4,
        chartArea:{left:0,top:20,width:'150%',height:'200%'},
        backgroundColor: 'transparent',
        // isStacked: true
    };

    // var options = {
    //     legend: { position: 'top', maxLines: 3 },
    //     bar: { groupWidth: '75%' },
    //     isStacked: true
    //   };

    var chart = new google.visualization.PieChart(document.getElementById('Nintendo4'));
    // var cli = chart.getChartLayoutInterface();
    // console.log(cli.getChartAreaBoundingBox().top);
    chart.draw(data, options);
}
function Nintendo5() {
    var data = google.visualization.arrayToDataTable([
    ['Personality', 'quantity'],
    ['ISTJ',239],
    ['ISFJ',37],
    ['INFJ',3],
    ['INTJ', 8],
    ['ISTP',1902],
    ['ISFP', 138],
    ['INFP', 2],
    ['INTP', 5],
    ['ESTP', 2],
    ['ESFP', 4270],
    ['ENFP', 34],
    ['ENTP', 25],
    ['ESTJ', 20],
    ['ESFJ', 7048],
    ['ENFJ', 0],
    ['ENTJ', 0],
    ]);

    var options = {
    title: 'Nintendo MBTI',
    pieHole: 0.3,
    backgroundColor: 'transparent',
    chartArea:{left:0,top:20,width:'200%',height:'300%'},
    };

    var chart = new google.visualization.PieChart(document.getElementById('Nintendo5'));
    chart.draw(data, options);
}



function Samsung1() {
    var data = google.visualization.arrayToDataTable([
        ['type','number'],
        ['I',1790],
        ['E',661],
    ]);

    var options = {
        title: 'E/I',
        pieHole: 0.4,
        chartArea:{left:0,top:20,width:'150%',height:'200%'},
        backgroundColor: 'transparent',
        // isStacked: true
    };

    // var options = {
    //     legend: { position: 'top', maxLines: 3 },
    //     bar: { groupWidth: '75%' },
    //     isStacked: true
    //   };

    var chart = new google.visualization.PieChart(document.getElementById('Samsung1'));
    // var cli = chart.getChartLayoutInterface();
    // console.log(cli.getChartAreaBoundingBox().top);
    chart.draw(data, options);
}

function Samsung2() {
    var data = google.visualization.arrayToDataTable([
        ['type','number'],
        ['S',2073],
        ['N',378],
    ]);

    var options = {
        title: 'S/N',
        pieHole: 0.4,
        chartArea:{left:0,top:20,width:'150%',height:'200%'},
        backgroundColor: 'transparent',
        // isStacked: true
    };

    // var options = {
    //     legend: { position: 'top', maxLines: 3 },
    //     bar: { groupWidth: '75%' },
    //     isStacked: true
    //   };

    var chart = new google.visualization.PieChart(document.getElementById('Samsung2'));
    // var cli = chart.getChartLayoutInterface();
    // console.log(cli.getChartAreaBoundingBox().top);
    chart.draw(data, options);
}

function Samsung3() {
    var data = google.visualization.arrayToDataTable([
        ['type','number'],
        ['F',2096],
        ['T',355],
    ]);

    var options = {
        title: 'F/T',
        pieHole: 0.4,
        chartArea:{left:0,top:20,width:'150%',height:'200%'},
        backgroundColor: 'transparent',
        // isStacked: true
    };

    // var options = {
    //     legend: { position: 'top', maxLines: 3 },
    //     bar: { groupWidth: '75%' },
    //     isStacked: true
    //   };

    var chart = new google.visualization.PieChart(document.getElementById('Samsung3'));
    // var cli = chart.getChartLayoutInterface();
    // console.log(cli.getChartAreaBoundingBox().top);
    chart.draw(data, options);
}

function Samsung4() {
    var data = google.visualization.arrayToDataTable([
        ['type','number'],
        ['J',379],
        ['P',2702],
    ]);

    var options = {
        title: 'J/P',
        pieHole: 0.4,
        chartArea:{left:0,top:20,width:'150%',height:'200%'},
        backgroundColor: 'transparent',
        // isStacked: true
    };

    // var options = {
    //     legend: { position: 'top', maxLines: 3 },
    //     bar: { groupWidth: '75%' },
    //     isStacked: true
    //   };

    var chart = new google.visualization.PieChart(document.getElementById('Samsung4'));
    // var cli = chart.getChartLayoutInterface();
    // console.log(cli.getChartAreaBoundingBox().top);
    chart.draw(data, options);
}

function Samsung5() {
    var data = google.visualization.arrayToDataTable([
    ['Personality', 'quantity'],
    ['ISTJ',92],
    ['ISFJ',25],
    ['INFJ',9],
    ['INTJ', 11],
    ['ISTP',1516],
    ['ISFP', 110],
    ['INFP', 6],
    ['INTP', 21],
    ['ESTP', 26],
    ['ESFP', 73],
    ['ENFP', 69],
    ['ENTP', 251],
    ['ESTJ', 173],
    ['ESFJ', 58],
    ['ENFJ', 5],
    ['ENTJ', 6],
    ]);

    var options = {
    title: 'Samsung5 MBTI',
    pieHole: 0.3,
    backgroundColor: 'transparent',
    chartArea:{left:0,top:20,width:'200%',height:'300%'},
    };

    var chart = new google.visualization.PieChart(document.getElementById('Samsung5'));
    chart.draw(data, options);
}