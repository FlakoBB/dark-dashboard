//? Rate Chart
const dataRate = {
    labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
    datasets: [
        {
            label: 'Rate',
            data: [10, 30, 20, 99, 30, 10, 20, 30, 20, 99, 30, 10],
            backgroundColor: '#8738F9',

        },
        {
            label: 'Target',
            data: [20, 40, 30, 109, 40, 20, 30, 40, 30, 109, 40, 20],
            backgroundColor: '#363636'
        }
    ]
}

const configRate = {
    type: 'bar',
    data: dataRate
}

const barsCanvas = document.getElementById('rate-chart')

const barsChart = new Chart(barsCanvas, configRate)

barsChart.canvas.parentNode.style.width = "100%"
barsChart.canvas.parentNode.style.height = "200px"

//? Recovered Chart
const dataRecovered = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
        {
            label: '',
            data: [10, 30, 15, 60, 40, 80, 70, 99],
            backgroundColor: '#8738F9',
            borderColor: '#C651CD',
            tension: .3
        }
    ]
}

const configRecovered = {
    type: 'line',
    data: dataRecovered
}

const lineCanvas = document.getElementById('recovered-chart')

const lineChart = new Chart(lineCanvas, configRecovered)

lineChart.canvas.parentNode.style.width = "100%"
lineChart.canvas.parentNode.style.height = "200px"

//? Survival Chart
const dataSurvival = {
    labels: [''],
    datasets: [
        {
            label: '',
            data: ['99'],
            backgroundColor: '#8738F9'
        }
    ]
}

const configSurvival = {
    type: 'bar',
    data: dataSurvival,
    options: {
        barThickness: 50
    }
}

const survivalCanvas = document.getElementById('survival-chart')

const survivalChart = new Chart(survivalCanvas, configSurvival)

survivalChart.canvas.parentNode.style.width = "100%"
survivalChart.canvas.parentNode.style.height = "200px"