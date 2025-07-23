// PROYECTO.JS

// DOM
// button: crear proyecto
const btnNewProject = document.querySelector('#btn-new-project')
// dialog/form: proyecto
const dialogProject = document.querySelector('#dialog-project')
const formProject = document.querySelector('#form-project')
const inpTitleProject = document.querySelector('#inp-title-project')
const btnSubmitProject = document.querySelector('#btn-submit-project')
// dialog/form: tarea
const dialogTarea = document.querySelector('#dialog-tarea')
const formTarea = document.querySelector('#form-tarea')
const inpTitleTarea = document.querySelector('#inp-title-tarea')
const btnSubmitTarea = document.querySelector('#btn-submit-tarea')
// div: mis-proyectos
const misProyectos = document.querySelector('#div-mis-proyectos')
      
// crear nuevo proyecto
btnNewProject.addEventListener('click', (event)=>{
    event.preventDefault()
    dialogProject.showModal()
})
// subir nuevo proyecto
btnSubmitProject.addEventListener('click',(event)=>{
    event.preventDefault()
    const divProject = document.createElement('div')
    divProject.classList.add('div-project')

    const divInpTitleProject = document.createElement('div')
    divInpTitleProject.classList.add('div-inp-project')
    divInpTitleProject.textContent = 'Proyecto: '+ inpTitleProject.value.replace(/[<>{}()'"&%\-=:#?|]/gi,"");
    // crear tarea
    const divBtnProject = document.createElement('div')
    const btnCrearTarea = document.createElement('button')
    btnCrearTarea.textContent = 'crear Tarea'
    btnCrearTarea.addEventListener('click', ()=>{
        dialogTarea.showModal()
    })
    
    divBtnProject.append(btnCrearTarea)
    divProject.append(divInpTitleProject, divBtnProject)
    misProyectos.append(divProject)
    
    dialogProject.close()

    // subir tarea 
btnSubmitTarea.addEventListener('click', (event)=>{
    event.preventDefault()
    const divTarea = document.createElement('div')
    const divInpTitleTarea = document.createElement('div')
    divInpTitleTarea.classList.add('div-inp-tarea')
    divInpTitleTarea.textContent = 'Titulo: '+ inpTitleTarea.value.replace(/[<>{}()'"&%\-=:#?|]/gi,"");
    
    divTarea.append(divInpTitleTarea)
    divProject.append(divInpTitleTarea)
    
    dialogTarea.close()
})
})
// // subir tarea 
// btnSubmitTarea.addEventListener('click', (event)=>{
//     event.preventDefault()
//     // const divTarea = document.createElement('div')
//     // divTarea.classList.add('div-tarea')

//     const divInpTitleTarea = document.createElement('div')
//     divInpTitleTarea.classList.add('div-inp-title')
//     divInpTitleTarea.textContent = 'Titulo: '+ inpTitleTarea.value.replace(/[&<>'"{}]/gi,"")
// divProject.append(divInpTitleTarea)
// // alert('hola')
// })




// // JS: Proyecto-Libreria
// const formulario = document.querySelector('#formulario');
// const dialog = document.querySelector('dialog');
// const idTitulo = document.querySelector('#id-titulo');
// const idAutor = document.querySelector('#id-autor');
// const idPaginas = document.querySelector('#id-paginas');
// const idLeido = document.querySelector('#id-leido');
// const formBtn = document.querySelector('#form-btn');
// const container = document.querySelector('#container');
// const miLibreria = [];

// function Libro(titulo, autor, paginas, leido) {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.paginas = paginas;
//     this.leido = leido ? 'Leído' : 'No leído';
//     this.info = function() {
//         return 'Título: ' + this.titulo + ' / ' +' Autor: ' + this.autor + ' / ' +' Páginas: ' + this.paginas + ' / ' +' Estado: ' + this.leido;
//     };
// }

// function añadirLibroLibreia() {
//     const titulo = idTitulo.value.replace(/[&<>'"]/gi,"");
//     const autor = idAutor.value.replace(/[&<>'"]/gi,"");
//     const paginas = idPaginas.value.replace(/[&<>'"]/gi,"");
//     const leido = idLeido.checked;
//     const nuevoLibro = new Libro(titulo, autor, paginas, leido);
//     miLibreria.push(nuevoLibro);
//     mostrarLibroPatalla(nuevoLibro);
// }

// // FORMULARIO
// function desplegarFormulario() {
//     formBtn.addEventListener('click', () => {
//         dialog.showModal();
//     });
// }
// desplegarFormulario();
// 'Subir'
// formulario.addEventListener('submit', (event) => {
//     event.preventDefault();
//     añadirLibroLibreia();
//     dialog.close();
// });
// 'Cerrar'
// const cerrarBtn = document.querySelector('#cerrar-btn')
// cerrarBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     dialog.close();
// });

// // CREAR NUEVO LIBRO
// function mostrarLibroPatalla(libro) {
//     const content = document.createElement('div');
//     content.classList.add('class-content');
//     content.textContent = libro.info();
//     container.appendChild(content);

//     const borrarLibroBtn = document.createElement('button')
//     borrarLibroBtn.classList.add('borrar-btn')
//     borrarLibroBtn.textContent = 'Borrar'
//     content.appendChild(borrarLibroBtn);
//     'borrar'
//  borrarLibroBtn.addEventListener('click', () => {
//         container.removeChild(content);
//     });
// }