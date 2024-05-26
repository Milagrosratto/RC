document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const boxes = Array.from(container.children);

    function rotateBoxes() {
        // Mueve la última caja al principio
        container.insertBefore(boxes[boxes.length - 1], boxes[0]);
        // Actualiza el array de cajas
        boxes.unshift(boxes.pop());
    }

    // Ajusta el intervalo de tiempo según tus necesidades
    setInterval(rotateBoxes, 3000); // 3000ms = 3 segundos
});
