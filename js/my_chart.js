export class MyChart {
    chart;
    constructor() {        
        let data = {
            labels: [1,2,3,4,5,6],
            datasets: [{
                label: 'Widget data',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [10,35,30,20,25,15],
            }]
        };
        this.config = {
            type: 'line',
            data: data,
            options: {
                responsive: false,
                scales: {
                    y: {
                        suggestedMin: 0,
                        suggestedMax: 50
                    }
                }
            }
        };
    }
    draw(element_id) {
        this.chart = new Chart(
            document.getElementById(element_id),
            this.config
        )
    }
    update(value) {
        let labels = this.chart.data.labels;
        console.log("Updating chart labels");
        labels.push(labels.length+1);
        console.log("Updating chart data");
        this.chart.data.datasets[0].data.push(value);
        this.chart.update()
    }
}