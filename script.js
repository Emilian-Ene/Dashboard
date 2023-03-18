const income = document.getElementById('myChart-income');
const expenses = document.getElementById('myChart-expeses');

const dataIncome = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Income',
      data: [125, 192, 39, 251, 429, 134],
      borderWidth: 1,
      borderColor: 'green',
      pointStyle: 'circle',
      pointRadius: 2,
      pointHoverRadius: 6,
    },
    // {
    //   label: 'Expenses',
    //   data: [12, 34, 678, 12, 45, 9],
    //   borderWidth: 1,
    //   // borderColor: 'red',
    //   // pointStyle: 'circle',
    //   // pointRadius: 8,
    //   // pointHoverRadius: 10,
    // },
  ],
};
const dataExpenses = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    // {
    //   label: 'Income',
    //   data: [125, 192, 39, 251, 429, 134],
    //   borderWidth: 1,
    //   // borderColor: 'red',
    //   // pointStyle: 'circle',
    //   // pointRadius: 8,
    //   // pointHoverRadius: 10,
    // },
    {
      label: 'Expenses',
      data: [12, 34, 678, 12, 45, 9],
      borderWidth: 1,
      borderColor: 'red',
      pointStyle: 'circle',
      pointRadius: 2,
      pointHoverRadius: 6,
    },
  ],
};
// console.log(data.datasets[1]);

let chart = new Chart(income, {
  type: 'line',
  data: dataIncome,
  options: {
    animation: {
      duration: 1000,
      easing: 'linear',
    },

    fill: false,
    responsive: true,
    tension: 0.4,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        border: {
          // color: 'red',
        },
      },
      x: {
        beginAtZero: true,
        border: {
          // color: 'red',
        },
      },
    },
  },
});
let chart2 = new Chart(expenses, {
  type: 'line',
  data: dataExpenses,
  options: {
    animation: {
      duration: 1000,
      easing: 'linear',
    },

    fill: false,
    responsive: true,
    tension: 0.4,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        border: {
          // color: 'red',
        },
      },
      x: {
        beginAtZero: true,
        border: {
          // color: 'red',
        },
      },
    },
  },
});
// const myChart = document.getElementById('myChart').getContext('2d');

// const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

// const data = {
//   labels,
//   datasets: [
//     {
//       data: [100, 256, 178, 424, 350, 600],
//       label: 'income',
//       // fill: true,
//       backgroundColor: 'rgb(255, 235, 59)',
//       borderColor: 'red',
//       pointStyle: 'circle',
//       pointRadius: 8,
//       pointHoverRadius: 10,
//     },

//     {
//       data: [10, 26, 78, 44, 350, 60],
//       label: 'income',
//       fill: false,
//       backgroundColor: 'rgb(255, 235, 59)',
//       borderColor: 'red',
//       pointStyle: 'circle',
//       pointRadius: 8,
//       pointHoverRadius: 10,
//     },
//   ],
// };

// const config = {
//   type: 'line',
//   data: data,
// };
// const chart = new Chart(myChart, config);
