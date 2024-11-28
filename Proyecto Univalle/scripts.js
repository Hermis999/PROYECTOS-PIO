
function adjustSize(tubeId, size) {
    const maxSize = 50;
    const initialSize = 0;
    const newPosition = Math.max(initialSize, Math.min((size * 8)+5, (maxSize * 8))+5);
    const tube = document.getElementById(tubeId);
    let ficha = tube.querySelector('.ficha');

    if (!ficha) {
        // Crear el contenedor para la flecha
        ficha = document.createElement('div');
        ficha.className = 'ficha';
        ficha.style.position = 'absolute';
        ficha.style.left = '50%';
        ficha.style.transform = 'translateX(-50%)';
        ficha.style.bottom = '0px';
        
        // Crear la punta de flecha (triángulo)
        const punta = document.createElement('div');
        punta.style.width = '0';
        punta.style.height = '0';
        punta.style.borderLeft = '15px solid transparent';
        punta.style.borderRight = '15px solid transparent';
        punta.style.borderBottom = '20px solid red';

        // Crear el cuerpo de la flecha (rectángulo)
        const cuerpo = document.createElement('div');
        cuerpo.style.width = '15px'; // hacer el rectángulo más delgado
        cuerpo.style.height = '15px';
        cuerpo.style.backgroundColor = 'red';
        cuerpo.style.position = 'absolute';
        cuerpo.style.left = '50%';
        cuerpo.style.transform = 'translateX(-50%)';

        // Crear el cuerpo de la flecha (rectángulo2)
        const cuerpo2 = document.createElement('div');
        cuerpo2.style.width = '25px'; // hacer el rectángulo más delgado
        cuerpo2.style.height = '8px';
        cuerpo2.style.backgroundColor = 'red';
        cuerpo2.style.position = 'absolute';
        cuerpo2.style.left = '50%';
        cuerpo2.style.transform = 'translateX(-50%)';
        cuerpo2.style.top = '30px';
        // Añadir la punta y el cuerpo a la ficha
        ficha.appendChild(punta);
        ficha.appendChild(cuerpo);
        ficha.appendChild(cuerpo2);
        tube.appendChild(ficha);
    }

    ficha.style.bottom = newPosition + 'px';
}
