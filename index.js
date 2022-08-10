const formulario = document.getElementById('formulario');
const tareaNombre = document.getElementById('tarea');
const tareahora = document.getElementById('hora');
const tareadia = document.getElementById('dia');
const tareadescripcion = document.getElementById('descripcion');
const fragmento = document.createDocumentFragment();
const container = document.querySelector('.vd__content__diary')

let Lunes = {};
let Martes = {};
let Miercoles = {};
let Jueves = {};
let Viernes = {};
let Sabado = {};
let Domingo = {};

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    settarea();
});

const settarea = () => {
    // if(input.value.trim() === ''){
    //     return/*Al poner el return hacemos que al ingresar al if se deje de producir toda la funcion*/
    // }
    const tarea = {
        id: Date.now(),
        nombre: tareaNombre.value,
        dia: tareadia.value,
        hora: tareahora.value,
        descripcion: tareadescripcion.value,
        estado:false
    };
    switch (dia.value) {
        case "Lunes":
            if(Object.keys(Lunes).length === 4){
                return}
            Lunes[tarea.id] = tarea;
            pintarTareas(Lunes);
            break;
        case "Martes":
            if(Object.keys(Martes).length === 4){
                return}
            Martes[tarea.id] = tarea;
            pintarTareas(Martes);
            break;
        case "Miercoles":
            if(Object.keys(Miercoles).length === 4){
                return}
            Miercoles[tarea.id] = tarea;
            pintarTareas(Miercoles);
            break;
        case "Jueves":
            if(Object.keys(Jueves).length === 4){
                return}
            Jueves[tarea.id] = tarea;
            pintarTareas(Jueves);
            break;
        case "Viernes":
            if(Object.keys(Viernes).length === 4){
                return}
            Viernes[tarea.id] = tarea;
            pintarTareas(Viernes);
            break;
        case "Sabado":
            if(Object.keys(Sabado).length === 4){
                return}
            Sabado[tarea.id] = tarea;
            pintarTareas(Sabado);
            break;
        case "Domingo":
            if(Object.keys(Domingo).length === 4){
                return}
            Domingo[tarea.id] = tarea;
            pintarTareas(Domingo);
            break;    
    }
    formulario.reset();
};

const pintarTareas = (diaTarea) => {
    const tareaDia = document.querySelector(`.${dia.value}`)
    tareaDia.innerHTML = '';
    Object.values(diaTarea).forEach(tarea => {
        let div = document.createElement('div');
        div.classList.add('vd__content__diary__day--tarea');
        const tareaContent = `
        <span>${tarea.nombre}</span>
        <span>Hora:${tarea.hora}</span>
        <div><i class="fas fa-check-circle text-success" data-id="${tarea.id}" role="button"></i><i class="fas fa-minus-circle text-danger" data-id="${tarea.id}" role="button"></i></div>
        <div class="details">
            <span>${tarea.nombre}</span>
            <p>${tarea.descripcion}</p>
        </div>
        `
        div.innerHTML = tareaContent;
        fragmento.appendChild(div);
        tareaDia.appendChild(fragmento);
    });
}

container.addEventListener('click' , (e) => {
    borrartarea(e);
});

const tareasetborrar = (Object,id) => {
    console.log(Object,id);
    delete Lunes[id];
    // let diaborrar = Object.querySelector('.vd__content__diary__day--day').textContent;
    // holas(diaborrar,id);
}

// const holas = (diahola,id) => {
//     switch (diahola) {
//         case "Lunes":
//             delete Lunes[id];
//             pintarTareas(Lunes);
//             break;
//     }
// }

const borrartarea = (e) => {
    if(e.target.classList.contains('fa-minus-circle')){
        tareasetborrar(e.target.parentElement.parentElement.parentElement.parentElement,e.target.dataset.id);
    }
}



