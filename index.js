const formulario = document.getElementById('formulario');
const tareaNombre = document.getElementById('tarea');
const tareahora = document.getElementById('hora');
const tareadia = document.getElementById('dia');
const tareadescripcion = document.getElementById('descripcion');
const fragmento = document.createDocumentFragment();
const container = document.querySelector('.vd__content__diary')

let dayLunes = {};
let dayMartes = {};
let dayMiercoles = {};
let dayJueves = {};
let dayViernes = {};
let daySabado = {};
let dayDomingo = {};

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
    days(tareadia.value,tarea)
    formulario.reset();
};

const days = (dia,tarea) => {
    switch (dia) {
        case "Lunes":
            if(Object.keys(dayLunes).length === 4){
                return}
            dayLunes[tarea.id] = tarea;
            pintarTareas(dayLunes,"Lunes");
            break;
        case "Martes":
            if(Object.keys(dayMartes).length === 4){
                return}
            dayMartes[tarea.id] = tarea;
            pintarTareas(dayMartes,"Martes");
            break;
        case "Miercoles":
            if(Object.keys(dayMiercoles).length === 4){
                return}
            dayMiercoles[tarea.id] = tarea;
            pintarTareas(dayMiercoles, "Miercoles");
            break;
        case "Jueves":
            if(Object.keys(dayJueves).length === 4){
                return}
            dayJueves[tarea.id] = tarea;
            pintarTareas(dayJueves, "Jueves");
            break;
        case "Viernes":
            if(Object.keys(dayViernes).length === 4){
                return}
            dayViernes[tarea.id] = tarea;
            pintarTareas(dayViernes, "Viernes");
            break;
        case "Sabado":
            if(Object.keys(daySabado).length === 4){
                return}
            daySabado[tarea.id] = tarea;
            pintarTareas(daySabado, "Sabado");
            break;
        case "Domingo":
            if(Object.keys(dayDomingo).length === 4){
                return}
            dayDomingo[tarea.id] = tarea;
            pintarTareas(dayDomingo, "Domingo");
            break;    
    };
};
    
const pintarTareas = (diaTarea,diaContent) => {
    const tareaDia = document.querySelector(`.${diaContent}`)
    tareaDia.innerHTML = '';
    Object.values(diaTarea).forEach(tarea => {
        let div = document.createElement('div');
        div.classList.add('vd__content__diary__day--tarea');
        const tareaContent = `
        <span class="tareaNombre">${tarea.nombre}</span>
        <span>Hora:${tarea.hora}</span>
        <div><i class="fas fa-check-circle text-success" data-id="${tarea.id}" role="button"></i><i class="fas fa-minus-circle text-danger" data-id="${tarea.id}" role="button"></i></div>
        <div class="details">
            <span>${tarea.nombre}</span>
            <p>${tarea.descripcion}</p>
        </div>
        `
        div.innerHTML = tareaContent;
        if(tarea.estado){
            div.querySelector('.text-success').classList.replace('fa-check-circle','fa-undo-alt');
            div.querySelector('.tareaNombre').style.textDecoration = 'line-through'
        }
        fragmento.appendChild(div);
        tareaDia.appendChild(fragmento);
    });
}

container.addEventListener('click' , (e) => {
    borrartarea(e);
});

const borrartarea = (e) => {
    if(e.target.classList.contains('fa-minus-circle')){
        tareasetborrar(e.target.parentElement.parentElement.parentElement.parentElement,e.target.dataset.id);
    };
    if(e.target.classList.contains('fa-check-circle')){
        changeestado(e.target.parentElement.parentElement.parentElement.parentElement,e.target.dataset.id,true);
    };
    if(e.target.classList.contains('fa-undo-alt')){
        changeestado(e.target.parentElement.parentElement.parentElement.parentElement,e.target.dataset.id,false);
    }
    e.stopPropagation;
}

const changeestado = (Object,id,estado) => {
    switch (Object.querySelector('.vd__content__diary__day--day').textContent) {
        case "Lunes":
            dayLunes[id].estado = estado;
            pintarTareas(dayLunes,"Lunes");
            break;
        case "Martes":
            dayMartes[id].estado = estado;
            pintarTareas(dayMartes,"Martes");
            break;
        case "Miercoles":
            dayMiercoles[id].estado = estado;
            pintarTareas(dayMiercoles,"Miercoles");
        break;   
        case "Jueves":
            dayJueves[id].estado = estado;
            pintarTareas(dayJueves,"Jueves");
            break;
        case "Viernes":
            dayViernes[id].estado = estado;
            pintarTareas(dayViernes,"Viernes");
            break;
        case "Sabado":
            daySabado[id].estado = estado;
            pintarTareas(daySabado,"Sabado");
        break;   
        case "Domingo":
            dayDomingo[id].estado = estado;
            pintarTareas(dayDomingo,"Domingo");
        break;  
    };
};

const tareasetborrar = (Object,id) => {
    switch (Object.querySelector('.vd__content__diary__day--day').textContent) {
        case "Lunes":
            delete dayLunes[id];
            pintarTareas(dayLunes,"Lunes");
            break;
        case "Martes":
            delete dayMartes[id];
            pintarTareas(dayMartes,"Martes");
            break;
        case "Miercoles":
            delete dayMiercoles[id];
            pintarTareas(dayMiercoles,"Miercoles");
        break;   
        case "Jueves":
            delete dayJueves[id];
            pintarTareas(dayJueves,"Jueves");
            break;
        case "Viernes":
            delete dayViernes[id];
            pintarTareas(dayViernes,"Viernes");
            break;
        case "Sabado":
            delete daySabado[id];
            pintarTareas(daySabado,"Sabado");
        break;   
        case "Domingo":
            delete dayDomingo[id];
            pintarTareas(dayDomingo,"Domingo");
        break;     
    };
};








