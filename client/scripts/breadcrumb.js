
/** Pula para um estado arbitrário */
var jumpState = (step) => {
    if($(steps[step]).hasClass('active')){
        $(`#${actions[state.currAction]}`).fadeOut( easeTime )
        setTimeout(() => $(`#${actions[step]}`).fadeIn( easeTime ) , easeTime )
        $(steps[state.currAction]).removeClass('actual')
        $(steps[step]).addClass('actual')
        $(".painlevelimg").fadeOut(200)
        state.currAction = step
    }
}

var changeState = (diff) => {
    state.currAction += diff
    
    // Mudança de estado
    $(`#${actions[state.currAction - diff]}`).fadeOut( easeTime )
    setTimeout(()=>{
        $(`#${actions[state.currAction]}`).fadeIn( easeTime )
    },  easeTime )
    for(let i = 0; i <= state.currAction; i++)
        $(steps[i]).addClass('active')
    $(steps[state.currAction - diff]).removeClass('actual')
    $(steps[state.currAction]).addClass('actual')

}