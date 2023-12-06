// Paso 15: Crear referencias a los elementos a manipular
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

// Paso 16: Crear la función dragElement
function dragElement(terrariumElement) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    // Paso 17: Agregar la función pointerDrag con eventos de puntero
    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;

        // Paso 18: Agregar eventos de puntero en document
        document.addEventListener('pointermove', elementDrag);
        document.addEventListener('pointerup', stopElementDrag);
    }

    // Paso 19: Agregar la función elementDrag
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    // Paso 20: Agregar la función stopElementDrag
    function stopElementDrag() {
        // Detener eventos de puntero en document
        document.removeEventListener('pointermove', elementDrag);
        document.removeEventListener('pointerup', stopElementDrag);
    }

    // Agregar el evento onpointerdown
    terrariumElement.addEventListener('pointerdown', pointerDrag);
}
