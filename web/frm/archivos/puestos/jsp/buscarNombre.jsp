
<%@page import="javawebts.controladores.PuestosControlador"%>
<%@page import="java.util.ArrayList"%>

<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
    String nombre_puesto=request.getParameter("bnombre_puesto");
    int pagina=Integer.parseInt(request.getParameter("bpagina"));
    
    String mensaje="Busqueda exitosa";
    String contenido=PuestosControlador.buscarNombre(nombre_puesto,pagina);
    JSONObject obj=new JSONObject();
    obj.put("mensaje",mensaje);
    obj.put("contenido",contenido);
    out.print(obj);
    out.flush();
%>
