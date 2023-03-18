const income = document.getElementById('myChartIncome');
const expenses = document.getElementById('myChartExpeses');

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
  ],
};
const dataExpenses = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
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

let chartIncome = new Chart(income, {
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
        text: 'My Income',
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
let chartExpenses = new Chart(expenses, {
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
        text: 'My Expenses',
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
