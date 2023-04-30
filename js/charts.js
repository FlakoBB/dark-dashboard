//? Rate chart
const dataRate = {
    labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
    datasets: [
        {
            label: 'Rate',
            data: [10, 30, 20, 99, 30, 10, 20, 30, 20, 99, 30, 10],
            backgroundColor: '#8738F9',

        }
    ]
}

const configRate = {
    type: 'bar',
    data: dataRate
}

const barsCanvas = document.getElementById('rate-chart')

const barsChart = new Chart(barsCanvas, configRate)