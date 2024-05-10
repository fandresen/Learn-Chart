
const canvas = document.getElementById('firstCanvas').getContext('2d');




//BAR
new Chart(canvas, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 10, 3, 5, 2, 13],
      backgroundColor:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      borderWidth: 1
    }]
  },
  options: {
    animation:false,
    }
});



//LINE

/* new Chart(canvas, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      backgroundColor:['rgba(200,30,100,0.20)'],
      data: [12, 10, 3, 5, 2, 13],
      borderWidth: 1,
      fill:true,
      lineTension:0.3,
      pointRadius:0

     
    }]
  },
  options: {}
}); */



//PIE
/* new Chart(canvas, {
  type: 'pie',
  data: {
    labels: ['Red', 'Green', 'Blue', 'Yellow', 'Purple'],
  datasets: [{
    label: 'My Pie Chart',
    data: [30, 25, 40, 15, 10],
    backgroundColor: [
      'rgb(255, 99, 132)', // Red
      'rgb(75, 192, 192)', // Green
      'rgb(28, 138, 214)', // Blue
      'rgb(255, 214, 0)', // Yellow
      'rgb(153, 102, 200)'  // Purple
    ],
  }]
  },
  options: { responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pie Chart less DADA ahh',
      }
    }}
}); */




//Doughnut
/* new Chart(canvas, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Green', 'Blue', 'Yellow', 'Purple'],
  datasets: [{
    label: 'My Pie Chart',
    data: [30, 25, 40, 15, 10],
    backgroundColor: [
      'rgb(255, 99, 132)', // Red
      'rgb(75, 192, 192)', // Green
      'rgb(28, 138, 214)', // Blue
      'rgb(255, 214, 0)', // Yellow
      'rgb(153, 102, 200)'  // Purple
    ],
  }]
  },
  options: { responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pie Chart Example'
      }
    }}
}); */



//RADAR
/* new Chart(canvas, {
  type: 'radar',
  data: {
    labels: ['Red', 'Green', 'Blue', 'Yellow', 'Purple'],
  datasets: [{
    label: 'My Pie Chart',
    data: [30, 25, 40, 15, 10],
    backgroundColor: [
      'rgb(255, 99, 132)', // Red
      'rgb(75, 192, 192)', // Green
      'rgb(28, 138, 214)', // Blue
      'rgb(255, 214, 0)', // Yellow
      'rgb(153, 102, 200)'  // Purple
    ],
  }]
  },
  options: { responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pie Chart Example'
      }
    }}
}); */


// new Chart(canvas, {
//   type: 'polarArea',
//   data: {
//     labels: ['Red', 'Green', 'Blue', 'Yellow', 'Purple'],
//   datasets: [{
//     label: 'My Pie Chart',
//     data: [30, 25, 40, 15, 10],
//     backgroundColor: [
//       'rgb(255, 99, 132)', // Red
//       'rgb(75, 192, 192)', // Green
//       'rgb(28, 138, 214)', // Blue
//       'rgb(255, 214, 0)', // Yellow
//       'rgb(153, 102, 200)'  // Purple
//     ],
//   }]
//   },
//   options: { responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Pie Chart Example'
//       }
//     }}
// });




 