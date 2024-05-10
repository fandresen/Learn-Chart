const { Chart } = require("chart.js");

const canvas = document.getElementById('firstCanvas');

new Chart(canvas, {
    type: 'line',
    options: {
      plugins: {
          subtitle: {
              display: true,
              text: 'Custom Chart Subtitle'
          },
          title: {
            display: true,
            text: 'Custom Chart Title'
        }
      }
  },
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        backgroundColor: '#F584',
      
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  Chart.defaults.backgroundColor = '#333';
  Chart.defaults.borderColor = '#36A2EB'; 
  Chart.defaults.color = '#333';    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 4,
        backgroundColor: '#F584',
      
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  Chart.defaults.backgroundColor = '#333';
  Chart.defaults.borderColor = '#36A2EB'; 
  Chart.defaults.color = '#333';



// const img = new Image();
// img.src = './sary.jpg';
// img.onload = () => {
//   const ctx = document.getElementById('canvas').getContext('2d');
//   const fillPattern = ctx.createPattern(img, 'repeat');

//   const chart = new Chart(canvas, {
//     data: {
//       labels: ['Item 1', 'Item 2', 'Item 3'],
//       datasets: [{
//         data: [10, 20, 30],
//         backgroundColor: fillPattern
//       }]
//     }
//   });
// };
