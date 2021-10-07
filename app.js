 
const BTNver = document.getElementById("BTNver");
BTNver.addEventListener("click",Mostrar);
var nombre;

function Mostrar()
{
    
    let request = new XMLHttpRequest();
    let a = document.getElementById("Latitud").value, b= document.getElementById("Longitud").value;
    if(a === '' || b === '')
    {
        alert("Algún campo esta vacio");
    }
    else 
    {

        fetch('https://us1.locationiq.com/v1/reverse.php?key=pk.a6ac074a1dfa7e82d7d0e1d2e867bf49&lat='+a+'&lon='+b+'&format=json')
        .then(response => response.json())
        .then(data => {

            console.log(data);
            console.log(data.display_name);
            let location = document.getElementById("location");
            location.innerHTML= `
                <h2>El display name es:</h2>
                <p>${data.display_name}</p>
                <p>${data.address.city}</p>
            `;
            nombre = data.address.city;
        }); 

        request.open("get","http://api.weatherstack.com/current?access_key=813c083f5b17557417921ac2aad98216&query="+a+","+b);
        //request.open("get","http://api.weatherstack.com/current?access_key=813c083f5b17557417921ac2aad98216&query="+nombre.value);

        request.onload = function()
        {
            //console.log(this.response);
            let data = JSON.parse(this.response);
            console.log(data);
        
            let clima = document.getElementById("clima");

            clima.innerHTML = `
                <h2>Lugar: ${data.location.name}</h2>
                <p>Pais: ${data.location.country}</p>
                <p> La temperatura es de: ${data.current.temperature}</p>
                <p> Descripción del clima: ${data.current.weather_descriptions[0]}</p>
            `;
        };
        request.send();

    }
    
}