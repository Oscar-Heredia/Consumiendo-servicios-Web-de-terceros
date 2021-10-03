
function Mostrar()
{
    let request = new XMLHttpRequest();
    let a = document.getElementById("Latitud").value, b= document.getElementById("Longitud").value;
    request.open("get","http://api.weatherstack.com/current?access_key=813c083f5b17557417921ac2aad98216&query="+a+","+b);

    request.onload = function()
    {
    //console.log(this.response);
    let data = JSON.parse(this.response);
    console.log(data);
    
    let clima = document.getElementById("clima");

    clima.innerHTML = `
            <h2>Lugar: ${data.location.name}  </h2>
            <p>Pais: ${data.location.country}</p>
            <p> La temperatura es de: ${data.current.temperature}</p>
            <p> Descripción del clima: ${data.current.weather_descriptions[0]}</p>
            <p> </p></p>
    `;
    };

    request.send();

    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    }); 

}
