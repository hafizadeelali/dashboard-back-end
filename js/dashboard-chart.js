
var lc = document.getElementById("LineChert1").getContext("2d");

var data = {
  labels:["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets:[
    {
      label: "First model",
      fillColor: "rgba(236, 246, 255, 0.7)",
      strokeColor: "#2B7AC6",
      pointColor: "rgb(96,156,214)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgb(96,156,214)",
      data: [10, 23, 78, 23, 87, 39, 93, 23, 45, 33, 76, 30]
    },
    {
      label: "Second model",
      fillColor: "rgba(236, 246, 255, 0.7)",
      strokeColor: "rgba(0,128,0,1)",
      pointColor: "rgba(0,128,0,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(0,128,0,1)",
      data: [34, 67, 45, 95, 28, 72, 55, 34, 65, 39, 45, 34]
    }
  ]
};

var LineChart1 = new Chart(lc).Line(data);

