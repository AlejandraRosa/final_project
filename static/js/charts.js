function getChartData() {
  $.ajax({
      url: "../../data/csvjson.json",
      success: function (result) {
          var data = [];
          data.push(result.lifetime_gross);
          data.push(result.title);
          var labels = result.year;
          renderChart(data, labels);
          console.log(data.lifetime_gross);
      },
      error: function (err) {
          $("#loadingMessage").html("Error");
      }
  });
}
function renderChart(data, labels) {
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
            {
                label: 'This week',
                data: data[0],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
            {
                label: 'Last week',
                data: data[1],
                borderColor: 'rgba(192, 192, 192, 1)',
                backgroundColor: 'rgba(192, 192, 192, 0.2)',
            }
        ]
    }
  });
};