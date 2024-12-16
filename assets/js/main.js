function renderizarPropiedades(propiedades, contenedor, limite = propiedades.length) {
const container = document.querySelector(contenedor);
let html = "";
  for (let i = 0; i < Math.min(propiedades.length, limite); i++) {
    const prop = propiedades[i];
    html += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${prop.src}" class="card-img-top" alt="Imagen de la propiedad" />
          <div class="card-body">
            <h5 class="card-title">${prop.nombre}</h5>
            <p class="card-text">${prop.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
            <p class="${prop.smoke ? "text-success" : "text-danger"}">
            <i class="${prop.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i>
            ${prop.smoke ? "Permitido fumar" : "No se permite fumar"}
            </p>
            <p class="${prop.pets ? "text-success" : "text-danger"}">
            <i class="${prop.pets ? "fas fa-paw" : "fas fa-ban"}"></i>
            ${prop.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
            </p>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#venta")) {
    renderizarPropiedades(indexVn, "#venta");
  }

  if (document.querySelector("#alquiler")) {
    renderizarPropiedades(indexAlq, "#alquiler");
  }
});