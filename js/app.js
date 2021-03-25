var nameHotel= "Balneario las Arenas";
var locationHotel= "Valencia";
var imgHotel = "https://static.booking.weekendesk.fr/image_cache/A967000/967733/967733_640_360_FSImage_1_edit_vista.jpg";


document.getElementById("hotel-name").innerHTML = "Hotel " + nameHotel;
document.getElementById("hotel-location").innerHTML= "Ubicado en " + locationHotel;
document.getElementById("hotel-img").src = "https://static.booking.weekendesk.fr/image_cache/A967000/967733/967733_640_360_FSImage_1_edit_vista.jpg";

var stars = prompt ("Puntuación del 1 al 5");
document.getElementById("rating").innerHTML = stars +  " estrellas ";
var anonymous = confirm ("¿Quiere que su reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;

function elegirhotel() { 
    var hoteles = { 
        "Balneario las Arenas": {
        name: "Balneario Las Arenas",
        location:"Valencia",
        imghotel: "https://static.booking.weekendesk.fr/image_cache/A967000/967733/967733_640_360_FSImage_1_edit_vista.jpg",
      },
        "Barceló Valencia": {
        name: "Barceló Valencia",
        location: "Valencia",
        imghotel: "https://lh5.googleusercontent.com/p/AF1QipNcz73nPnQBwaJEa8zNJh9r2YleFKBPlN7Tr2dA=w325-h211-k-no",
      },
        "Abaco":{
        name: "Abaco",
        location: "Altea",
        imghotel: "https://lh3.googleusercontent.com/p/AF1QipMYOqrSXeEsSq6VwmBz6UPA9BYXYYk7w24O-kht=w296-h202-n-k-rw-no-v1", 
      },
    };
    
    
    var selectedHotel = prompt("Indica el nombre del hotel: Balneario las Arenas, Barceló Valencia, Abaco");
    
    document.getElementById("hotel-name").innerHTML = " Hotel " + hoteles[selectedHotel].name;
    document.getElementById("hotel-location").innerHTML = "Ubicado en " +  hoteles[selectedHotel].location;
    document.getElementById("hotel-img").src = hoteles[selectedHotel].imghotel;
    
    var stars = {
        una: "<span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
        dos:"<span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
        tres:"<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span>",
        cuatro:"<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span>",
        cinco:"<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span>",
    };
    var rating = prompt ("¿Qué puntuación quiere darle al hotel: una, dos, tres, cuatro o cinco estrellas?");
    document.getElementById("rating").innerHTML = stars[rating];
    var anonymous = confirm ("¿Quiere que su reseña sea anónima?");
    document.getElementById("anonymous").checked = anonymous;
    

}


