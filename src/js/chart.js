google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["ID", "X", "Y", "Like"],
    ["EDM", 10, 100, 500],
    ["Hiphop", 25, 150, 450],
    ["Pop", 30, 50, 300],
    ["Classic", 40, 220, 32],
    ["Opera", 55, 200, 9],
    ["Country", 72, 170, 50],
    ["Rock", 80, 278, 230],
    ["Lofi", 85, 50, 20],
    ["Anime ", 97, 45, 10],
  ]);

  var options = {
    colorAxis: { colors: ["gray", "white"] },
    backgroundColor: "black",
    animation: { startup: true },
    bubble: {
      textStyle: {
        fontSize: 18,
        fontName: "Quicksand",
        color: "white",
        bold: true,
        italic: true,
      },
    },
    hAxis: {
      gridlines: {
        color: "black",
      },
      textStyle: {
        color: "black",
      },
    },
    vAxis: {
      gridlines: {
        color: "black",
      },
      textStyle: {
        color: "black",
      },
    },
  };

  var chart = new google.visualization.BubbleChart(
    document.getElementById("chart")
  );
  chart.draw(data, options);
}
