// contador
let idCounter = 0;
// recogemos y guardamos el valor del input (tipo texto)
const input = document.querySelector('input[type="text"]');
// al presionar el mas se llama la funcion addTask y se agrega una tarea
userInput.addEventListener("submit",(event)=>{
    event.preventDefault();//para que no se borre el mensaje y se recargue la pagina 
    console.log("hola desde el formulario");
    addTask();
});
// escucha el evento y ejecuta la accion
list.addEventListener("click",(event)=>{
    //console.log(event.srcElement.nodeName);
    if (event.srcElement.nodeName == "INPUT") { // si se marca la casilla se llama a la funcion actualizarStats
        actualizarStats();
    }else if (event.srcElement.nodeName =="IMG"){
    deleteTarea(event.srcElement.parentNode.id); // en caso de presionar sobre la imagen se llama la funccion deleteTarea y borra la tarea

    }
})
// funcion para agregar nuevas tareas insertando el div correspondiente
function addTask(){
    idCounter++;
    let newValue = input.value;
    if (input.value !=""){

    list.innerHTML +=` <div class="task-container" id='${idCounter}'>
    <label>
        <input type="checkbox">
        ${newValue}
    </label>
    <img src="img/Cubo de basura.jpg" class="close-btn">
</div>`
input.value ="";
actualizarStats();
    }
}
// funcion para actualizar stats y visualizar el cambio de las tareas pendientes y las completadas
function actualizarStats(){
    let elementList = list.querySelectorAll("div");
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');// mostrara todos los elementos input[checkbox]
    let tareasPendiente = elementList.length - checkbox.length;
    stats.innerHTML = `Tareas Pendientes: ${tareasPendiente} Tareas completas: ${checkbox.length}`
}
// esta funcion se utiliza para eliminar la tarea al presionar sobre el cubo de basura , esta conectada directamente con el addEventListener
function deleteTarea(id){
    let tareaBorrada = document.getElementById(id);
    list.removeChild(tareaBorrada);
    actualizarStats();
}
