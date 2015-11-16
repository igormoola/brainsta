$.index.open();
function sesion_click(e)
{
	$.vista_sesion.visible = true;
	$.vista_login.visible = false;
	$.login_boton.opacity = 0.3;
	$.sesion_boton.opacity = 1;
}

function login_click(e)
{
	$.vista_sesion.visible = false;
	$.vista_login.visible = true;
	$.login_boton.opacity = 1;
	$.sesion_boton.opacity = 0.3;
}

function entrar(e)
{
	var nombre = $.nombre.value.trim();
	
	if(nombre != '')
	{
		var win = Alloy.createController('ventana2', {'nombre': nombre}).getView();
		win.open();
	}
}
