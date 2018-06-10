const condicoes = [ 
                    "vômito",
                    "desidratação",
                    "confusão",
                    "perda de consciência",
                    "agitação",
                    "febre",
                    "uso de drogas",
                    "intoxicação",
                    "convulsões",
                    "passado de asma",
                    "tosse",
                    "atividade física",
                    "já teve infarto",
                    "já teve embolia",
                    "já teve angina",
                    "é diabético",
                    "sudorese",
                    "náusea",
                    "dispnéia",
                    "idoso",
                    "piora com respiração",
                    "rigidez na nuca",
                    "queimadura",
                    "alergia",
                    "bronquite",
                    "rinite",
                    "irritação de pele",
                    "problema de audição",
                    "leucemia",
                    "câncer",
                    "acne",
                    "dermatite",
                    "hanseniase",
                    "coceira",
                    "manchas na pele",
                    "micose"
]

var selected = []


$(() => {
    condicoes.forEach( (condicao,i) => {
        $("#container").append(
            `<div class='condicao' id='c-${i}'>${condicao.toLocaleUpperCase()}</div>`
        )
    })

    $(".condicao").click(e => $(e.target).toggleClass('active') )
})