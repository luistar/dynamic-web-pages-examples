async function updateStatistics() {
            
    // Do async request with the fetch API.
    // This is equivalent to using XMLHttpRequest with a callback
    let response = await fetch("/data/data.json");
    let statistics = await response.json();

    console.log(statistics)

    const avgf = statistics.reduce((acc,x) => acc + x.f, 0) / statistics.length
    const avgx = statistics.reduce((acc,x) => acc + x.x, 0) / statistics.length
    const avgv = statistics.reduce((acc,x) => acc + x.v, 0) / statistics.length
    const avgq = statistics.reduce((acc,x) => acc + x.q, 0) / statistics.length

    document.getElementById('statistic-1').innerHTML = (avgf-avgx)/3.14
    document.getElementById('statistic-2').innerHTML = (avgf+avgq/avgv)
    document.getElementById('statistic-3').innerHTML = (avgf+avgx+avgq)
    
}

//add callback on click on load articles button
document.getElementById('update-statistics-button').onclick = function(e){
    updateStatistics();
}