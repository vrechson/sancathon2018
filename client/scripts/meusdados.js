var ctxBPM = $("#bpmchart")
var ctxRPM = $("#rpmchart")
var ctxIMC = $("#imcchart")

var chartBPM = new Chart(ctxBPM, {
    type: "line",
    data: {
        labels: ["02/05", "03/05","04/05","05/05","06/05","07/05","08/05","09/05","10/05","11/05","12/05","13/05","14/05","15/05"],
        datasets: [{
            label: 'BPM',
            data: [65, 76, 80, 94, 67, 84, 89, 70, 76, 80, 94, 102, 87, 78, 81],
            backgroundColor: [
                'rgba(104, 190, 209, 0.2)',
            ],
            borderColor: [
                'rgba(104, 190, 209,1)',
            ],
            borderWidth: 1
        }]
    }
})

var chartRPM = new Chart(ctxRPM, {
    type: "line",
    data: {
        labels: ["02/05", "03/05","04/05","05/05","06/05","07/05","08/05","09/05","10/05","11/05","12/05","13/05","14/05","15/05"],
        datasets: [{
            label: 'RPM',
            data: [15, 16, 16, 17, 16, 16, 16, 14, 15, 16, 17, 18, 16, 16, 16],
            backgroundColor: [
                'rgba(104, 190, 209, 0.2)',
            ],
            borderColor: [
                'rgba(104, 190, 209,1)',
            ],
            borderWidth: 1
        }]
    }
})

var chartIMC = new Chart(ctxIMC, {
    type: "line",
    data: {
        labels: ["02/05", "03/05","04/05","05/05","06/05","07/05","08/05","09/05","10/05","11/05","12/05","13/05","14/05","15/05"],
        datasets: [{
            label: 'IMC',
            data: [20, 20.5, 21, 20.6, 20.2, 19.7, 19.4, 18.7, 18.9, 19.3, 20, 20.5, 20.3, 20, 19.7],
            backgroundColor: [
                'rgba(104, 190, 209, 0.2)',
            ],
            borderColor: [
                'rgba(104, 190, 209,1)',
            ],
            borderWidth: 1
        }]
    }
})

const abrirPop = () => {
    $("#consulta-pop").fadeIn(600)
    $(".dimmer").fadeIn(600)
}


const fecharPop = () => {
    $("#consulta-pop").fadeOut(600)
    $(".dimmer").fadeOut(600)
}

$(() => {
    $(".consulta").click(abrirPop)
    $(".dimmer").click(fecharPop)
})