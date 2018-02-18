
function siguienteCampo(actual,siguiente,preventDefault){
    $(actual).keydown(function(event){
        if(event.which===13){
            if(preventDefault){
                event.preventDefault();
            }
            $(siguiente).focus();
            $(siguiente).focus();
        }
    });
}
function validarAcceso(){
    $("#mensajes").html("Mensajes del Sistema");
    if($("#login_usuario").val()===""){
        $("#mensajes").html("Usuario no debe estar vacio. ");
    }
    else if($("#password_usuario").val()===""){
        $("#mensajes").html("Clave no debe estar vacio. ");
    }
    else{
        validarAccesoAjax();
        limpiarCampos();
    }
}
function validarAccesoAjax(){
    var datosFormulario=$("#formAcceso").serialize();
    $.ajax({
        type:'POST',
        url:"jsp/validarAcceso.jsp",
        data:datosFormulario,
        dataType:'json',
        beforeSend:function(objeto){
            $("#mensajes").html("Enviando datos al servidor ...");
        },
        success: function(json){
            if(json.acceso==="true"){
                location.href="menu.html";
            }
            else{
                $("#mensajes").html("Credencial Invalida");
                limpiarCampos();
            }
        },
        error:function(e){
            $("#mensajes").html("No se pudo conectar con el servidor Error:"+e.status);
        },
        complete:function(objeto,exito,error){
            if(exito==="success"){
                
            }
        }
    });
}
function verificarSesion(programa) {
    var url = 'jsp/verificarSesion.jsp';
    if (programa) {
        url = '../../../jsp/verificarSesion.jsp';
    }
    var datosFormulario = $("#formAcceso").serialize();
    $.ajax({
        type: 'POST',
        url: url,
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            if (json.activo === "false") {
                if (programa) {
                    location.href = "../../../index.html";
                } else {
                    location.href = "index.html";
                }
            }
            $("#snombre_empresa").html("EL BODEGERO");
            $("#susuario_usuario").html(json.login_usuario);
            $("#nombre_usuario").val(json.nombre_usuario);
            $("#id_usuario").val(json.id_usuario);
            $("#numero_factura_venta").val(json.id_usuario);
            $("#mensajes").html(json.mensaje);
            
            
        },
        error: function (e) {
            $("#mensajes").html("ERROR: No se pudo recuperar la sesión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}

function verificarFactura(programa) {
    var url = 'jsp/agregar.jsp';
    if (programa) {
        url = '../../../jsp/verificarSesion.jsp';
    }
    var datosFormulario = $("#formPrograma").serialize();
    $.ajax({
        type: 'POST',
        url: url,
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            if (json.activo === "false") {
                if (programa) {
                    location.href = "../../../index.html";
                } else {
                    location.href = "index.html";
                }
            }
         
            $("#numero_factura_venta").val(json.numero_factura_venta);
            $("#mensajes").html(json.mensaje);
            
            
        },
        error: function (e) {
            $("#mensajes").html("ERROR: No se pudo recuperar la sesión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}

function cerrarSesion() {

    var datosFormulario = $("#formAcceso").serialize();
    $.ajax({
        type: 'POST',
        url: 'jsp/cerrarSesion.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html("Sesión Cerrada.");
        },
        error: function (e) {
            $("#mensajes").html("No se pudo cerrar la sesión.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}

function generarMenuPrincipal() {
    var datosFormulario = "";
    $.ajax({
        type: 'POST',
        url: 'jsp/generarMenuPrincipal.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#menuPrincipal").html(json.menu_principal);
            //$("#mensajes").html(json.mensaje);
        },
        error: function (e) {
            $("#mensajes").html("No se pudo generar el Menú Principal.");
        },
        complete: function (objeto, exito, error) {

        }
    });
}

function limpiarCampos(){
    $("#login_usuario").val("");
    $("#password_usuario").val("");
  
    $("#login_usuario").focus();
   
    }