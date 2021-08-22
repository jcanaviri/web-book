function iniciar() {
  let btn = document.getElementById('obtener');
  btn.addEventListener('click', obtener, false);
}

function obtener() {
  let geoconfig = {
    enableHighAccuracy: true,
    maximumAge: 6000,
  };
  navigator.geolocation.getCurrentPosition(mostrar, errors, geoconfig);
  let control = navigator.geolocation.watchPosition(mostrar, errors, geoconfig);
}

function errors(err) {
  alert(`Error: ${err.code} ${err.message}`);
}

function mostrar(posicion) {
  let ubicacion = document.getElementById('ubicacion');
  let datos = `
  Latitud: ${posicion.coords.latitude}<br>
  Longitud: ${posicion.coords.longitude}<br>
  Exactitud: ${posicion.coords.accuracy}<br>`;
  ubicacion.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3771.580279403258!2d-65.2509184!3d-19.038207999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sbo!4v1629600912656!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
}

window.addEventListener('load', iniciar, false);
