/********************************
 * DECLARANDO VARIÁVEIS GLOBAIS *
 ********************************/

function Main(){
    var alfabeto = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h','i','j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var txtCripto = document.getElementById("txtCripto")
    var txtDescrip = document.getElementById("txtDescrip")
    var chave = document.getElementById("chave")
    if(chave.value == ""){
        alert("Preencha o campo chave!")
    }
    if(txtCripto.value == "" && txtDescrip == ""){
        alert("Preencha algum dos campos")
    }
    
}