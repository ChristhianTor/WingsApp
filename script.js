// 1. Cargar datos del JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        mostrarEstiramientos(data);
    })
    .catch(error => console.error("Error cargando JSON:", error));


// 2. Función para mostrar estiramientos en la lista principal
function mostrarEstiramientos(estiramientos) {
    const contenedor = document.getElementById("estiramientos-list");

    estiramientos.forEach((estiramiento, index) => {
        const btn = document.createElement("button");
        btn.textContent = estiramiento.nombre;
        btn.classList.add("btn-estiramiento");

        // Al hacer clic, mostramos el detalle
        btn.addEventListener("click", () => {
            mostrarDetalle(estiramiento);
        });

        contenedor.appendChild(btn);
    });
}


// 3. Función para mostrar detalle del estiramiento
function mostrarDetalle(estiramiento) {
    const detalle = document.getElementById("detalle-estiramiento");
    
    // Limpiamos contenido previo
    detalle.innerHTML = `
        <h2>${estiramiento.nombre}</h2>
        <p>${estiramiento.descripcion}</p>
        <h3>Participantes:</h3>
        <ul>
            ${estiramiento.participantes.map(p => `<li>${p.nombre} (Avanzado ${p.avanzado})</li>`).join('')}
        </ul>
    `;
}
