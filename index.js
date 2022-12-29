
// JavaScript file



async function getData() {
    //  API  URL
    const API_ENDPOINT = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    // Send a GET request to the API endpoint
    const response = await fetch(API_ENDPOINT);

    // Get the response data as a JSON object
    const data = await response.json();

    return data;
}

// Function to create the chart

async function createChart() {
    // Get the data from the API
    const data = await getData();

    // Get the labels (x-axis) and data (y-axis) for the chart
    const labels = data.map((coin) => coin.name);
    const chartData = data.map((coin) => coin.current_price);

    // Create the chart
    const ctx = document.getElementById("chart");
    const chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [

                {
                    label: "Cryptocurrency Price (MXN)",
                    data: chartData,
                    backgroundColor: [
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(102, 0, 0)',
                        'rgb(128,128,0)',
                        'rgb(255, 99, 132)',
                        'rgb(0,128,0)',
                        'rgb(128,0,128)',
                        'rgb(0,128,128)',
                        'rgb(0,0,128)',
                        'rgb(184,134,11)',
                        'rgb(154,205,50)',
                        'rgb(238,232,170)',
                        'rgb(218,165,32)',
                        'rgb(189,183,107)',
                        'rgb(85,107,47)',
                        'rgb102,205,170)',
                        'rgb(107,142,35)',
                        'rgb(127,255,0)',
                        'rgb(173,255,47)',
                        'rgb(0,100,0)',
                        'rgb(0,255,127)',
                        'rgb(102,205,170)',
                        'rgb(60,179,113)',
                        'rgb(32,178,170)',
                        'rgb(47,79,79)',
                        'rgb(0,128,128)',
                        'rgb(0,139,139)',
                        'rgb(0,255,255)',
                        'rgb(224,255,255)',
                        'rgb(64,224,208)',
                        'rgb(139,0,139)',
                        'rgb(148,0,211)',
                        'rgb(186,85,211)',
                        'rgb(216,191,216)',
                        'rgb(238,130,238)',
                        'rgb(255,0,255)',
                        'rgb(218,112,214)',
                        'rgb(199,21,133)',
                        'rgb(219,112,147)',
                        'rgb(255,105,180)',
                        'rgb(139,69,19)',
                        'rgb(210,105,30)',
                        'rgb(244,164,96)',
                        'rgb(210,180,140)',
                        'rgb(255,228,181)',
                        'rgb(255,218,185)',
                        'rgb(255,240,245)',
                        'rgb(250,240,230)',
                        'rgb(253,245,230)',
                        'rgb(255,239,213)',
                        'rgb(255,245,238)',
                        'rgb(245,255,250)',
                        'rgb(112,128,144)',
                        'rgb(119,136,153)',
                        'rgb(176,196,222)',
                        'rgb(230,230,250)',
                        'rgb(255,250,240)',
                        'rgb(240,248,255)',
                        'rgb(248,248,255)',
                        'rgb(240,255,240)',
                        'rgb(255,255,240)',
                        'rgb(240,255,255)',
                        'rgb(255,250,250)',
                        'rgb(255,0,0)',
                        'rgb(0,255,0)',
                        'rgb(0,0,255)',
                        'rgb(255,255,0)',
                        'rgb(255,127,80)',
                        'rgb(124,252,0)',
                        'rgb(127,255,0)',
                        'rgb(0,128,0)',
                        'rgb(34,139,34)',
                        'rgb(50,205,50)',
                        'rgb(144,238,144)',
                        'rgb(152,251,152)',
                        'rgb(143,188,143)',
                        'rgb(139,0,0)',
                        'rgb(165,42,42)',
                        'rgb(178,34,34)',
                        'rgb(220,20,60)',
                        'rgb(255,99,71)',
                        'rgb(205,92,92)',
                        'rgb(240,128,128)',
                        'rgb(233,150,122)',
                        'rgb(250,128,114)',
                        'rgb(255,69,0)',
                        'rgb(255,140,0)',
                        'rgb(255,215,0)',
                        'rgb(238,232,170)',
                        'rgb(240,230,140)',
                        'rgb(0,206,209)',
                        'rgb(72,209,204)',
                        'rgb(175,238,238)',
                        'rgb(127,255,212)',
                        'rgb(176,224,230)',
                        'rgb(95,158,160)',
                        'rgb(70,130,180)',
                        'rgb(100,149,237)',
                        'rgb(0,191,255)',
                        'rgb(30,144,255)',
                    ],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
}

// Call the createChart function when the page loads
createChart();
