

<%@page import="javawebts.modelos.Ciudades"%>
<%@page import="javawebts.utiles.Utiles"%>
<%@page import="javawebts.controladores.ClientesControlador"%>
<%@page import="javawebts.modelos.Clientes"%>
<%@page import="org.json.simple.JSONObject"%>

<%
    int id_cliente = Integer.parseInt(request.getParameter("id_cliente"));
    String nombre_cliente = request.getParameter("nombre_cliente");
    String apellido_cliente = request.getParameter("apellido_cliente");
    int id_ciudad = Integer.parseInt(request.getParameter("id_ciudad"));
    String direccion_cliente = request.getParameter("direccion_cliente");
    int ruc_cliente = Integer.parseInt(request.getParameter("ruc_cliente"));
    int dv_cliente = Integer.parseInt(request.getParameter("dv_cliente"));
    int cedula_cliente = Integer.parseInt(request.getParameter("cedula_cliente"));
    
    String telefono_cliente = request.getParameter("telefono_cliente");
    
   // int telefono_cliente = Integer.parseInt(request.getParameter("telefono_cliente"));
    
    //String telefono_cliente = request.getParameter("telefono_cliente");
    
    
   
    String tipo = "error";
    String mensaje = "Datos no agregados.";
    
    Clientes cliente = new Clientes();
    cliente.setId_cliente(id_cliente);
    cliente.setNombre_cliente(nombre_cliente);
    cliente.setApellido_cliente(apellido_cliente);
    cliente.setDireccion_cliente(direccion_cliente);
    cliente.setRuc_cliente(ruc_cliente);
    cliente.setDv_cliente(dv_cliente);
    cliente.setCedula_cliente(cedula_cliente);
    cliente.setTelefono_cliente(telefono_cliente);
   
    
    Ciudades ciudad = new Ciudades();
    ciudad.setId_ciudad(id_ciudad);
    cliente.setCiudad(ciudad);
    
    if (ClientesControlador.agregar(cliente)) {
        tipo = "success";
        mensaje = "Datos agregados";
    }
    
    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    out.print(obj);
    out.flush();
%>