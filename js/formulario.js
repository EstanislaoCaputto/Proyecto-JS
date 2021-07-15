//Se registra el usuario 
let formValues = {};
function getFormData(formId){
    var form1Inputs = document.forms[formId].getElementsByClassName("nomb");
    for(let i=0; i<form1Inputs.length; i++){
          formValues[form1Inputs[i].name]=form1Inputs[i].value;
    }
    console.log(formValues);
}

//Envio la info a la API
const APIURL = 'https://jsonplaceholder.typicode.com/posts';
const infoPost = formValues;
$("#btn1").click(() => { 
    $.ajax({
        method: "POST",
        url:  APIURL,
        data: infoPost,
        success: function(respuesta){
            $("#cuerpo").append(`<div class="card"><div class="card-body">${respuesta.consulta}</div></div>`);
            // console.log(respuesta);
        }
    });
});

