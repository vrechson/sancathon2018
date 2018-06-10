
var countHeight         = 5
var intervalHeight      = 0
var requestIDHeight     = 0
var height              = 0  


const requestHeight = () => {
    requestIDHeight = (Math.random() * 100000) | 0
    db.ref('machines/1/state').once('value', snap => {
        db.ref('pedidos/1').set({
            'id'    : requestIDHeight,
            'label' : 'altura',
            'cpf'   : snap.val().cpf
        })
    })
}

const listenHeight = () => {
    console.log("Listening for Height")
    db.ref('Respostas/' + requestID).on('value', snap => {
        let val = snap.val() || {altura:0}
        height = val[Object.keys(val)[0]].altura
    })
}

const startCountHeight = () => {
    $("#counterheight").fadeIn(400)
    $("#startheight").fadeOut(400)
    $("#heightdesc").fadeOut(400)
    requestHeight()
    listenHeight()
    intervalHeight = setInterval( () => { 
        countHeight--; 
        $("#counterheight").html(`00:${countHeight < 10 ? '0' + countHeight : countHeight}`)
        if( countHeight == 0 ){
            window.clearInterval( interval ) 
            $("#counterheight").fadeOut(400)
            $("#nextheight").fadeIn(400).css({display: 'block'})
            $("#heightmessage").fadeIn(400)
            $("#heightdata").html((height || 1.5) + " m")
        }
    }, 1000)
}