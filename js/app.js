document.addEventListener("DOMContentLoaded", () => {
    const yes = document.querySelector("#yes");
    const no = document.querySelector("#no");
    const gif = document.querySelector("#gif");
    const text = document.querySelector("#text");
    const vid = document.querySelector("video");
    let count = 2;

    // Links directos que funcionan (Tenor/Giphy direct)
    const gifs = [
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTIwdHR3a2p5enZmbDNrbzRkam05eWVvZnE5YjdjY21wc3hjZnV2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8QbwUh40Hl96yMgvOx/giphy.gif", // Zorro
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWN3c3p0b2lzOXJpajl6dmR3b2plbDc3bWc1bTA4ZmUyZzU5bTIweCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pY8jLmZw0ElqvVeRH4/giphy.gif", // Confundido
        "https://media1.tenor.com/m/t9PLz06a24wAAAAd/sad-cat.gif", // Triste
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmp0eWMyaXJrY253ZnRsZXQ5cHlhdHQ4NWU2cnY1MWhjbHRucXhnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/901mxGLGQN2PyCQpoc/giphy.gif", // Enojado
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3M5aHRxZndkeHZkNjF1YTJmY3J6Nm5uc21xanZvdDlndWpzNjAxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/reTfIeMhEbzH2/giphy.gif"      // Amor
    ];

    // Pre-carga de imágenes para que no haya parpadeos blancos
    gifs.forEach(link => {
        const img = new Image();
        img.src = link;
    });

    // Evento para el botón NO
    no.addEventListener("click", () => {
        if (count == 2) {
            gif.src = gifs[0];
            text.innerHTML = "Me amas";
            yes.style.width = "60%";
            yes.style.height = "65%";
            no.style.width = "30%";
            count++;
        } else if (count == 3) {
            gif.src = gifs[1];
            text.innerHTML = "No me amas?";
            yes.style.width = "70%";
            yes.style.height = "70%";
            no.style.width = "20%";
            count++;
        } else if (count == 4) {
            gif.src = gifs[2];
            text.innerHTML = "Voy a llorar 😭";
            yes.style.width = "80%";
            yes.style.height = "80%";
            no.style.fontSize = "4vh";
            no.style.width = "10%";
            count++;
        } else if (count == 5) {
            gif.src = gifs[3];
            text.innerHTML = "Amame 😡";
            yes.style.width = "96%";
            yes.style.height = "90%";
            no.style.display = "none";
        }
    });

    // Evento para el botón SÍ
    yes.addEventListener("click", () => {
        if (vid) vid.style.display = "block";
        gif.src = gifs[4];
        text.innerHTML = "Te amo jiji";
        
        // Transformamos el botón en un link de WhatsApp directamente
        yes.innerHTML = "Mandame mensajito mi amorr";
        yes.onclick = () => {
            window.location.href = "https://wa.me/5492236870777";
        };
        
        yes.style.width = "96%";
        yes.style.height = "90%";
        no.style.display = "none";

        if (vid) {
            setTimeout(() => {
                vid.style.display = "none";
            }, 9000);
        }
    });
});