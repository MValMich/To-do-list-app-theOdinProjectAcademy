
// DOM
// button: crear proyecto
const btnNewProject = document.querySelector('#btn-new-project');

// dialog/form: proyecto
const dialogProject = document.querySelector('#dialog-project');
const formProject = document.querySelector('#form-project');
const inpTitleProject = document.querySelector('#inp-title-project');
const btnSubmitProject = document.querySelector('#btn-submit-project');

// dialog/form: tarea
const dialogTarea = document.querySelector('#dialog-tarea');
const formTarea = document.querySelector('#form-tarea');
const inpTitleTarea = document.querySelector('#inp-title-tarea');
const btnSubmitTarea = document.querySelector('#btn-submit-tarea');
// div: mis-proyectos
const misProyectos = document.querySelector('#div-mis-proyectos');

// Variable para guardar la referencia al proyecto activo
let proyectoActual = null;

// CREAR NUEVO PROYECTO
// abrir dialogo proyecto
btnNewProject.addEventListener('click', (event) => {
    event.preventDefault();
    dialogProject.showModal();
});

// subir nuevo proyecto
btnSubmitProject.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Prevenir la creación de proyectos sin título
    if (inpTitleProject.value.trim() === '') {
        alert('Por favor, ingresa un título para el proyecto.');
        return; // Detiene la ejecución si el título está vacío
    }

    const divProject = document.createElement('div');
    divProject.classList.add('div-project');

    const divInpTitleProject = document.createElement('div');
    divInpTitleProject.classList.add('div-inp-project');
    divInpTitleProject.textContent = 'Proyecto: ' + inpTitleProject.value.replace(/[<>{}()'"&%\-=:#?|]/gi, "");

    // Borrar proyecto
    const BtnborrarProyecto = document.createElement('button');
    BtnborrarProyecto.textContent = 'Borrar Proyecto';
    BtnborrarProyecto.addEventListener('click', () => { divProject.remove() });
    divInpTitleProject.append(BtnborrarProyecto);

    // Crear el contenedor de tareas (con scroll)
const contenedorTareas = document.createElement('div');
contenedorTareas.classList.add('contenedor-tareas');


    // CREAR TAREA
    // dialogo tarea
    const divBtnProject = document.createElement('div');
    const btnCrearTarea = document.createElement('button');
    btnCrearTarea.textContent = 'Crear Tarea';
    btnCrearTarea.addEventListener('click', () => {
        // Antes de abrir el diálogo, guardamos este proyecto como el "actual"
        proyectoActual = divProject; 
        dialogTarea.showModal();
    });
    
    divBtnProject.append(btnCrearTarea);
    divProject.append(divInpTitleProject, divBtnProject);
    misProyectos.append(divProject);

    dialogProject.close();

    // <-- CORRECCIÓN: Limpia el formulario del proyecto para el siguiente uso.
    formProject.reset();
});

// CREAR TAREA
// subir tarea (El listener se define UNA SOLA VEZ, fuera del creador de proyectos)
btnSubmitTarea.addEventListener('click', (event) => {
    event.preventDefault();

    // Si no hay un proyecto activo, no hacemos nada (seguridad)
    if (!proyectoActual) return; 

    // Prevenir la creación de tareas sin título
    if (inpTitleTarea.value.trim() === '') {
        alert('Por favor, ingresa un título para la tarea.');
        return; // Detiene la ejecución si el título está vacío
    }

    const divTarea = document.createElement('div');
    const divInpTitleTarea = document.createElement('div');
    divInpTitleTarea.classList.add('div-inp-tarea');
    divInpTitleTarea.textContent = 'Titulo: ' + inpTitleTarea.value.replace(/[<>{}()'"&%\-=:#?|]/gi, "");

    // Borrar tarea 
    const btnBorrarTarea = document.createElement('button');
    btnBorrarTarea.textContent = 'Borrar Tarea';
    btnBorrarTarea.addEventListener('click', () => { divTarea.remove() });

    divInpTitleTarea.append(btnBorrarTarea);
    divTarea.append(divInpTitleTarea);
    
    // Añadimos la tarea al proyecto que guardamos en la variable 'proyectoActual'
    proyectoActual.append(divTarea);

    dialogTarea.close();
    
    // Limpiamos el formulario y la variable para la próxima vez
    formTarea.reset(); 
    proyectoActual = null; 
});
