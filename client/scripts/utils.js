$(() => {
    $('#emergencia').click(function(){
        $('#modal-case').show()
    })

    $('#modal-shadow').click(function(){
        $('#modal-case').hide()
    })
    
    $('.fa-times').click(function(){
        $('#modal-case').hide()
    })
    
    $('#begin').click(function(){
        window.location.replace('index.html')
    })
})