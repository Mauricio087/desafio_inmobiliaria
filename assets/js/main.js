let html = "";

const recorrerArray = (arreglo, cantidad) => {
  html = "";
  const limite = cantidad > 0 ? 3 : arreglo.length;
  for (let i = 0; i < limite; i++) {
    generarHTML(arreglo[i]);
  }
};

const generarHTML = (propiedad) => {
  html += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src=${propiedad.src} class="card-img-top" alt="Imagen de ${propiedad.nombre}" />
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
          <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo}</p>
          ${
            propiedad.smoke
            ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
            : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
          }
          ${
            propiedad.pets
            ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
            : `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
          }
        </div>
      </div>
    </div>
  `;
};

// Función para renderizar las propiedades en un contenedor
const renderizarPropiedades = (arreglo, contenedor, cantidad) => {
  recorrerArray(arreglo, cantidad);
  document.querySelector(contenedor).innerHTML = html;
};

// Lógica de ejecución al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#venta")) {
    // Detecta si estamos en el index.html (3 propiedades) o en propiedadesVn.html (todas las propiedades)
    const esIndex = document.querySelector("body").classList.contains("index");
    const cantidad = esIndex ? 3 : 0;
    renderizarPropiedades(propiedadesVn, "#venta .row", cantidad);
  }

  if (document.querySelector("#alquiler")) {
    // Detecta si estamos en el index.html (3 propiedades) o en propiedadesAlq.html (todas las propiedades)
    const esIndex = document.querySelector("body").classList.contains("index");
    const cantidad = esIndex ? 3 : 0;
    renderizarPropiedades(propiedadesAlq, "#alquiler .row", cantidad);
  }
});
