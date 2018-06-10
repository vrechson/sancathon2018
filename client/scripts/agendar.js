const showFicha = () => {
    $("#confirm").fadeOut(500)
    setTimeout( () => { $("#info").fadeIn(500) } , 500 )
    setHospital(0)
}

const showHospitais = () => {
    $("#confirm").fadeOut(500)
    setTimeout( () => { $("#choose").fadeIn(500) } , 500 )
}

const randomHour = () => {
    let hour = Math.round(Math.random() * 23)
    let minute = Math.round(Math.random() * 59)
    return (hour < 10 ? '0' : '' ) + hour + ":" + (minute < 10 ? '0' : '' ) + minute
} 

const setHospital = index => {
    const addr = [
        'Santa+Casa',
        'Casa+de+Saúde+Hospital+e+Maternidade',
        'Hospital+Universitário',
        'Centro+Médico'
    ]
    const full_addr = [
        `R. Paulino Botelho de Abreu Sampaio, 573 - Jardim Pureza, São Carlos - SP, 13561-060`,
        `R. 7 de Setembro, 3033 - Centro, São Carlos - SP, 13560-000`,
        `R. Luís Vaz de Camões, 111 - Vila Celina, São Carlos - SP, 13566-448`,
        `Rua Dona Maria Jacinta, 241 - Jardim Paraiso, São Carlos - SP, 13561-120`
    ]
    let url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyB80zqpYacbrOzt85xV_UI2I2Fcq6dwZ4w
               &origin=ICMC
               &destination=${addr[index]}
               &mode=transit`
    $("#map").attr("src", url)
    $("#protocolo").html( parseInt(Math.random() * 10000000) )
    $("#horario").html( randomHour() )
    $("#endereco").html(full_addr[index])
    $("#choose").fadeOut(500)
    setTimeout( () => { $("#info").fadeIn(500) } , 500 )
}

$(() => {
    $("#confirmbtn").click(showFicha)   
    $("#choosebtn").click(showHospitais)   
})