document.getElementById("bnt-env").addEventListener("click" , ajax);

function ajax(event){
    event.preventDefault();
    var formElement = document.getElementById("myform");
    console.log("200")//probar si esta bien 
    const xhr = new XMLHttpRequest();
    const url = 'test.php';

    xhr.addEventListener("load", resultado);
    xhr.open("POST",url);
    xhr.send(new FormData(formElement));
}

function resultado(){
    if(this.readyState == 4){
        if(this.status == 200){
            console.log("hola")
            console.log(this.responseText)//mostar lo q esta guardando el usuario
        }
        else{
            console.log("error cargando la pagina\n")
        }
    }
}