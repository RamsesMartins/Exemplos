function Main(){
    var alfabeto = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h','i','j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
    // GETS
    var txtCripto = document.getElementById("txtCripto")
    var txtDescrip = document.getElementById("txtDescrip")
    var chave = parseInt(document.getElementById("chave").value)
    var txtCripto
    var resultado = new Array()

    if(chave == ""){
        alert("Preencha o campo chave!")
    }
    else if(txtCripto.value == "" && txtDescrip == ""){
        alert("Preencha algum dos campos")
    }else if(txtCripto.value == ""){
        txt = txtDescrip.value
        var arr = []
        arr = txt.split('')
        for(var i=0; i < arr.length; i++){
            
            for(var abc=0; abc < 30; abc++){
                var index
                if(alfabeto[abc] == arr[i]){
                    if(alfabeto[abc] == ' '){
                        index= abc
                    }else{
                        index = abc+chave
                    }                    
                    resultado.push(alfabeto[parseInt(index)])
                    console.log(resultado) 
                }
            }
                       
        }
        txtCripto.innerHTML = resultado.join('')
        
    }else if(txtDescrip.value == ""){
        txt = txtCripto.value
        var arr = []
        arr = txt.split('')
        for(var i=0; i < arr.length; i++){
            
            for(var abc=0; abc < 30; abc++){
                var index
                if(alfabeto[abc] == arr[i]){
                    if(alfabeto[abc] == ' '){
                        index= abc
                    }else{
                        index = abc-chave
                    }                    
                    resultado.push(alfabeto[parseInt(index)])
                    console.log(resultado) 
                }
            }
                       
        }
        txtDescrip.innerHTML = resultado.join('')
    }
    
}