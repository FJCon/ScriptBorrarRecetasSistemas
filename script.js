let tabla = document.querySelector("body > table > tbody").children
let busqueda = prompt('Ingrese equipo a eliminar');
busqueda = busqueda.toUpperCase();
for (let i = 3; i < tabla.length; i++){
    if(tabla[i].children[2].children[0].children[0].innerText == busqueda){
        let link = 'http://192.168.0.2/Obras/';
        link += tabla[i].children[2].children[0].children[0].getAttribute('href');
        let win = window.open(link,"_blank")
        
        win.addEventListener('load',()=>{
            let boton = win.document.querySelector('body form').children[1].children[0].children[10].children[2].children[0];
            setTimeout(()=>{

                boton.click();

            },3000);


            setTimeout(()=>{

                win.close();

            },5000)
        })
    }
}
    
