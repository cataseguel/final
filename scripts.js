document.addEventListener('DOMContentLoaded', () => {
    fetch('datos.json')
        .then(response => response.json())
        .then(data => {
           
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

// Para los gráficos
let doughnutChartInstance = null;
let barChartInstance = null;
let lineChartInstance = null;
let radarChartInstance = null;
let pieChartInstance = null;


function loadData(platform) {
    const data = dummyData[platform];

    
    document.getElementById('introText').style.display = 'none';

   
    document.getElementById('titleCount').style.display = 'block';
    document.getElementById('productionsCount').style.display = 'block';
    document.getElementById('platformAverage').style.display = 'block';
    document.getElementById('platformPerMonth').style.display = 'block';
    document.querySelector('.chartsContainer').style.display = 'flex';

 
    updateTitleCount(platform, data.titleCount);
    updateProductionsCount(platform, data.productionsCount);

 
    if (doughnutChartInstance) {
        doughnutChartInstance.destroy();
    }
    if (barChartInstance) {
        barChartInstance.destroy();
    }
   

    renderDoughnutChart(data.labels, data.datasets);
    renderBarChart(data.stars, data.stardata);


    updatePlatformAverage(platform, data.average);
    updatePlatformPerMonth(platform, data.perMonth);
}


function showIntro() {

    document.getElementById('introText').style.display = 'block';

    document.getElementById('titleCount').style.display = 'none';
    document.getElementById('productionsCount').style.display = 'none';
    document.getElementById('platformAverage').style.display = 'none';
    document.getElementById('platformPerMonth').style.display = 'none';
    document.querySelector('.chartsContainer').style.display = 'none';
}




function updateProductionsCount(platform, productionsCount) {
    const productionsCountElement = document.getElementById('productionsCount');
    if (productionsCountElement) {
        productionsCountElement.innerHTML = `<p> <h1> Tiene <FONT COLOR="#D51890"> <I> ${productionsCount} <FONT COLOR="black"></I>millones de subscripciones a nivel mundial </h1></p>`;
    }
}

function updateTitleCount(platform, titleCount) {
    const titleCountElement = document.getElementById('titleCount');
    if (titleCountElement) {
        titleCountElement.innerHTML = `<p> <h1>Tiene más de <FONT COLOR="#D51890"> <I> ${titleCount} <FONT COLOR="black"></I> títulos disponibles </h1></p>`;
    }
}


function updatePlatformAverage(platform, average) {
    const platformAverageElement = document.getElementById('platformAverage');
    if (platformAverageElement) {
        platformAverageElement.innerHTML = `<p> <h3> Producciónes destacadas de ${platform}: <br> <h1> <FONT COLOR="#D51890">${average}<FONT COLOR="black"></h1> </h3> </p>`;
    }
}


function updatePlatformPerMonth(platform, perMonth) {
    const platformPerMonthElement = document.getElementById('platformPerMonth');
    if (platformPerMonthElement) {
        platformPerMonthElement.innerHTML = `<p> <h3> Precio por subscripción:<br><h1> <FONT COLOR="#D51890"> ${perMonth}</h3></p>`;
    }
}


function renderDoughnutChart(labels, datasets) {
    const ctx = document.getElementById('doughnutChart').getContext('2d');
    doughnutChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function renderBarChart(stars, stardata) {
    const ctx = document.getElementById('barChart').getContext('2d');
    barChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: stars,
            datasets: [{
                data: stardata,
                backgroundColor: ['#F26B8A', '#F25278', '#FD5DA8', '#FC9483', '#F699CD']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}


