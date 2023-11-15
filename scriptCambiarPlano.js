let tabla = document.querySelector('body').children[1].children[0].children;
let busqueda = prompt('Ingrese equipo a modificar');
busqueda = busqueda.toUpperCase()
let plano = prompt('Ingrese nuevo numero de plano')
console.log(busqueda)
console.log(plano)

for (let i = 3; i < tabla.length; i++){
    if(tabla[i].children[2].children[0].children[0].innerText == busqueda){
        let link = 'http://192.168.0.2/Obras/';
        link += tabla[3].children[1].children[0].children[0].getAttribute('href');
        let win = window.open(link,"_blank")

        win.addEventListener('load',()=>{
            let nroPlano = document.querySelector("#idplano");
            nroPlano.value = plano;
            setTimeout(()=>{

                boton.click();

            },2500);
            setTimeout(()=>{

                win.close();

            },2500)
       })
    }
}