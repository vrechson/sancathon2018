// Estado atual da aplicação
var state = {
    currAction : 0
}

const easeTime  = 400
var steps       = [] 
const actions   = ['pain', 'heartbeat', 'height', 'breath', 'motor']
 
/** Alinha o estado da execução */
changeState = (diff) => {
    state.currAction += diff
    // Limiar (redirecionamento)
    if(state.currAction == 5)
        window.location.replace('atendimento.html')
    // Mudança de estado
    $(`#${actions[state.currAction - diff]}`).fadeOut( easeTime )
    setTimeout(()=>{
        $(`#${actions[state.currAction]}`).fadeIn( easeTime )
    },  easeTime )
    for(let i = 0; i <= state.currAction; i++)
        $(steps[i]).addClass('active')
    $(steps[state.currAction - diff]).removeClass('actual')
    $(steps[state.currAction]).addClass('actual')

    commitPainSpots()
}



$(() => {
    steps = $("li.step")
    $("#next, #nexthb, #nextheight, #nextbreath, #nextmotor").click( e => changeState(1) )
    $(".key_button").click(e => addDigit($(e.target).html()))
    $(document).mousemove(registerMouse)
    $("#map").click(painMapClick)
    $(".painlevel").click(painLevelClick)
    $("#starthb").click(startCount)
    $("#startheight").click(startCountHeight)
    $("#startbreath").click(startCountBreath)
    $("#cancel").click(removePainSpots)
    offset = $("#map").offset()

})