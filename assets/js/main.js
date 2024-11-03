const abrir = document.querySelector("#abir");

abrir.addEventListener("click", () => {
    const loadingBox = document.getElementById("loading-box");
    const loadingBar = document.getElementById("loading-bar");
    const resultMessage = document.getElementById('result');
    const stateMessage = document.getElementById('state-message');
    const finalImage = document.getElementById('final-image');
    const birthdayMusic = document.getElementById("birthday-music");

    // Mostrar la caja de carga y reiniciar la barra de carga
    loadingBox.style.display = "inline-block";
    loadingBar.style.width = "0";
    
    // Cambiar el mensaje de estado
    stateMessage.innerHTML = "Cargando...";

    // Iniciar la animación de la barra de carga
    setTimeout(() => {
        loadingBar.style.width = "100%";
    }, 100); // Delay para asegurar que el ancho inicia desde 0

    // Mostrar mensaje, la imagen y reproducir la música después de 5 segundos
    setTimeout(() => {
        resultMessage.innerHTML = " Abrazo psicologico";
        stateMessage.innerHTML = "&nbsp;";
        loadingBox.style.display = "none"; // Ocultar la barra de carga
        finalImage.style.display = "block"; // Mostrar la imagen final

        // Reproducir la música de cumpleaños
        birthdayMusic.play();
    }, 5100);
});
