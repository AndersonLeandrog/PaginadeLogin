window.addEventListener('load', () => {
    //teste do git here
    $('#termo').click(() => {
        const div = $('<div>').attr('style',`
            position: absolute;
            width: 620px;
            height: 420px;
            border-radius: 10px;
            background: #fff; 

            color: #3d3d3d;

            -webkit-box-shadow: 0px 0px 6px -1px #000000; 
            box-shadow: 0px 0px 6px -1px #000000;

            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        `)

        $(div).append(`Eu entendo e aceitos os termos impostos pela plataforma...`)

        $(div).append(
            $('<button>Ok</button>').click(() => {
                div.hide()
            })
        )
        
        $('body').append(div)
    })
})