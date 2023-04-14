// var data = [
//     { x: 0, y: 30 },
//     { x: 50, y: 20 },
//     { x: 100, y: 40 },
//     { x: 150, y: 80 },
//     { x: 200, y: 95 }
// ]

// var line = d3.svg.line()
//     .x((d) => d.x)
//     .y((d) => 100 - d.y)
//     .interpolate("basis")

// d3.select('#chart')
//     .append("path")
//     .attr('stroke-width', 2)
//     .attr('d', line(data))



var data = [
    { x: 0, y: 30 },
    { x: 50, y: 20 },
    { x: 100, y: 40 },
    { x: 150, y: 80 },
    { x: 200, y: 95 }
]

var line = d3.svg.line()
    .x((d) => d.x)
    .y((d) => 100 - d.y)
    .interpolate("basis")

d3.select('#chart')
    .append("path")
    .attr('stroke-width', 2)
    .attr('d', line(data))









// (async () => {
//     const DataModel = await muze.DataModel.onReady();
//     const env = await muze();
//     const data = await loadData("cars.json");
//     const schema = await loadData("cars-schema.json");
//     const formattedData = await DataModel.loadData(data, schema);
//     const dm = new DataModel(formattedData);

//     env
//         .canvas()
//         .data(dm)
//         .rows(["Acceleration"]) // The fields to appear in y-axis
//         .columns(["Year"]) // The fields to appear in x-axis
//         .mount('#chart');
// })();






// Highcharts.chart('container', {
//     chart: {
//         type: "line",
//     },
//     title: {
//         text: "Thống kê chi tiêu",
//     },
//     yAxis: {
//         title: {
//             text: "Tổng chi tiêu (VNĐ)",
//         },
//     },
//     xAxis: {
//         categories: [
//             "01/07",
//             "02/07",
//             "03/07",
//             "04/07",
//             "05/07",
//             "06/07",
//             "07/07",
//             "08/07",
//         ],
//         title: {
//             text: "Ngày",
//         },
//     },
//     tooltip: {
//         valueSuffix: " đ",
//     },
//     legend: {
//         align: "center",
//     },
//     credits: {
//         enabled: false,
//     },
//     series: [
//         {
//             name: "Tổng chi tiêu",
//             data: [43934, 52503, 119931, 57177, 69658, 97031, 137133, 154175],
//         },
//     ],
// });