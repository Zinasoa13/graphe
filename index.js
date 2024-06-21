// Extraction des données depuis le HTML
const labels = [];
const data = [];

document.querySelectorAll('.lines li').forEach(item => {
    const percentage = item.querySelector('.line').getAttribute('percentage');
    const label = item.querySelector('span').innerText;

    data.push(parseInt(percentage));
    labels.push(label);
});

// Configuration du graphique
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Pourcentage',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
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
