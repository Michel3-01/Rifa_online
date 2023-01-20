let main = document.getElementById("container");


function mudarCor(){
    let div = document.getElementById("mudarcor");
    let pagina_reserva = document.getElementById('pagina_reserva')
    div.style.backgroundColor = "blue";
}

function numeros(){
   for(var i =0; i <= 100; i++){
        let novo_item = `<div onclick="evento01(${i})" id="${i}" class="num" class="estado">${i}<div> `
        main.innerHTML += novo_item
       
      
        
   }
}
function evento01(id){
    alert(id)
    let card = document.getElementById('pagina_reserva').style.display = 'block'
    item = `<div id="numeros_reservados">${id}<div> `
    let lista_compras = document.getElementById('lista_compras')
    lista_compras.innerHTML += item
}