
var count       = 15
var interval    = 0
var requestID   = 0
var bpm         = 0  


const requestBPM = () => {
    requestID = (Math.random() * 100000) | 0
    db.ref('machines/1/state').once('value', snap => {
        db.ref('pedidos/1').set({
            'id'    : requestID,
            'label' : 'bpm',
            'cpf'   : snap.val().cpf
        })
    })
}

const listenBPM = () => {
    console.log("Listening for BPM")
    db.ref('Respostas/' + requestID).on('value', snap => {
        let val = snap.val() || {bpm:0}
        bpm = val[Object.keys(val)[0]].bpm
    })
}

const startCount = () => {
    $("#next").fadeIn(400)
    $("#counter").fadeIn(400)
    $("#start").fadeOut(400)
    $("#bpmdesc").fadeOut(400)
    requestBPM()
    listenBPM()
    interval = setInterval( () => { 
        count--; 
        $("#counter").html(`00:${count < 10 ? '0' + count : count}`)
        if( count == 0 ){
            window.clearInterval( interval ) 
            $("#counter").fadeOut(400)
            $("#nexthb").fadeIn(400)
            $("#bpmmessage").fadeIn(400)
            $("#bpm").html(parseInt(bpm) + " BPM")
        }
    }, 1000)
}