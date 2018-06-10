var offset      = 0
var mouse       = {}
var lastMouse   = {}
var painSpots   = []

const commitPainSpots = () => {
    // Envia pro servidor
    removePainSpots()
}

const drawPainLevel = (x, y, level) => {
    const levelImgs = ['neutral', 'sad', 'extreme']
    const img = `<img class='painlevelimg' src='assets/${levelImgs[level]}.png' style='top: ${y}px; left: ${x}px'/>`
    $('body').append( img )
}

/** Mapa de dor */
const painMapClick = e => {
    let pos = {
        left: offset.left + mouse.x,
        top : offset.top + mouse.y,
    }
    $("#levels").css({ "top": `${pos.top}px`, "left": `${pos.left}px` })
    $("#levels").fadeIn(400);
    lastMouse = pos;
}

const painLevelClick = e => {
    var target = e.target    
    var level = target.localName == 'img' ? $(target).parent().attr('level') : $(target).attr('level')
    painSpots.push({
        level: level,
        pos  : lastMouse 
    })
    $("#levels").fadeOut(200)
    drawPainLevel(lastMouse.left - 15, lastMouse.top - 15, level)
}

const registerMouse = e => {
    mouse = { 
        x : e.pageX - offset.left,
        y : e.pageY - offset.top 
    }
}


const removePainSpots = () => {
    $(".painlevelimg").fadeOut(400)
    setTimeout( $(".painlevelimg").remove(), 400 )
    painSpots = []
}