console.log('data');

$(document).ready(function() {

	//Splash screen:
	$(function() {
		setTimeout(function() {
			$('#splash').fadeOut(1500);
		}, 1000);
	});

	//Generar listado de restaurantes cercanos:
	$.each(data.restaurants, function(index, value) {
   	
		$('#search-results').append(
			"<div class='col-xs-6 col-s-6 col-md-4 col-lg-4 text-center'>" +
    		"<div class='profile'>" +
    		"<img id='id_" + data.restaurants[index].id + "' class='img-responsive profile-pic' src='" + data.restaurants[index].photo + "' alt='restaurant photo' type='button' data-toggle='modal' data-target='#myModal_id_" + data.restaurants[index].id + "'>" +
			"<div class='profile-overlay'>" +
			"<h4>" + data.restaurants[index].name  + "</h4>" +
			"</div>" +
    		"</div>" +
  			"</div>");
		
		//Efecto hover en las imágenes:
		$('.profile').mouseover(function () {
    		$('.profile-overlay').show();
			}).mouseout(function () {
    		$('.profile-overlay').hide();
			});
					
		//Modal:
		$('#modal-box').append(
			"<div id='myModal_id_" + data.restaurants[index].id + "' class='modal fade' role='dialog'>" +
  			"<div class='modal-dialog'>" +
			"<!-- Modal content-->" +
    		"<div class='modal-content'>" +
      	"<div class='modal-header'>" +
        	"<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
        	"<h4 class='modal-title'>" + data.restaurants[index].name + "</h4>" +
      	"</div>" +
      	"<div class='modal-body'>" +
      	"<img class='img-responsive profile-pic' src='" + data.restaurants[index].photo + "' alt='restaurant photo'>" +
      	"<p>Ubicación: " + data.restaurants[index].location + "</p>" +
        	"<p>Tipo de comida: " + data.restaurants[index].type + "</p>" +
        	"<p>Rango de precios: " + data.restaurants[index]['price range'] + "</p>" +
      	"</div>" +
      	"<div class='modal-footer'>" +
        	"<button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button>" +
      	"</div>" +
    		"</div>" +
  			"</div>" +
			"</div>");
	});
});

// Get the elements with class="column"
//var elements = document.getElementsByClassName("column");

// Declare a loop variable
//var i;

// List View
//function listView() {
/*  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}*/