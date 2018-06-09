// Estado atual da aplicação
var state = {
    currAction : 0
}

const actions   = ['greet', 'auth']
const easeTime  = 400
var steps       = [] 
var cpf         = ""

/** Alinha o estado da execução */
const changeState = (diff) => {
    state.currAction += diff

    // Limiar

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

/** Pula para um estado arbitrário */
const jumpState = (step) => {

    if($(steps[step]).hasClass('active')){
        $(`#${actions[state.currAction]}`).fadeOut( easeTime )
        setTimeout(() => $(`#${actions[step]}`).fadeIn( easeTime ) , easeTime )
        $(steps[state.currAction]).removeClass('actual')
        $(steps[step]).addClass('actual')
        state.currAction = step
    }

}

const addDigit = (digit) => {
    cpf += digit
    $("#cpfviewer").html(cpf)
    if(cpf.length == 11)
        window.location.replace('coleta_dados.html')
}

$(() => {
    steps = $("li.step")
    $("#next").click( e => changeState(1) )
    $(".key_button").click(e => addDigit($(e.target).html()))
})