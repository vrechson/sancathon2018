
var countBreath         = 5
var intervalBreath      = 0
var requestIDBreath     = 0
var breath              = 0  


const requestBreath = () => {
    requestIDBreath = (Math.random() * 100000) | 0
    db.ref('machines/1/state').once('value', snap => {
        db.ref('pedidos/1').set({
            'id'    : requestIDBreath,
            'label' : 'altura',
            'cpf'   : snap.val().cpf
        })
    })
}

const listenBreath = () => {
    console.log("Listening for Breath")
    db.ref('Respostas/' + requestID).on('value', snap => {
        let val = snap.val() || {irpm:0}
        breath = val[Object.keys(val)[0]].irpm
    })
}

const startCountBreath = () => {
    $("#counterbreath").fadeIn(400)
    $("#startbreath").fadeOut(400)
    $("#breathdesc").fadeOut(400)
    requestBreath()
    listenBreath()
    intervalBreath = setInterval( () => { 
        countBreath--; 
        $("#counterbreath").html(`00:${countBreath < 10 ? '0' + countBreath : countBreath}`)
        if( countBreath == 0 ){
            window.clearInterval( interval ) 
            $("#counterbreath").fadeOut(400)
            $("#nextbreath").fadeIn(400).css({display: 'block'})
            $("#breathmessage").fadeIn(400)
            $("#breathdata").html((breath || 15) + " RPM")
        }
    }, 1000)
}