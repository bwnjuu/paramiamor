const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

// AGREGA TODOS AQUÍ (Asegúrate de que la ruta sea la correcta)
const gifs = [
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTIwdHR3a2p5enZmbDNrbzRkam05eWVvZnE5YjdjY21wc3hjZnV2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8QbwUh40Hl96yMgvOx/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWN3c3p0b2lzOXJpajl6dmR3b2plbDc3bWc1bTA4ZmUyZzU5bTIweCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pY8jLmZw0ElqvVeRH4/giphy.gif",
  "https://media1.tenor.com/m/t9PLz06a24wAAAAd/sad-cat.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmp0eWMyaXJrY253ZnRsZXQ5cHlhdHQ4NWU2cnY1MWhjbHRucXhnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/901mxGLGQN2PyCQpoc/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3M5aHRxZndkeHZkNjF1YTJmY3J6Nm5uc21xanZvdDlndWpzNjAxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/reTfIeMhEbzH2/giphy.gif"
];

// Pre-carga mejorada
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

no.addEventListener("click", () => {
  // Nota: Cambié "../resources/" por "resources/" 
  // Prueba quitando los ".." si tu JS está en la carpeta principal
  if (count == 2) {
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTIwdHR3a2p5enZmbDNrbzRkam05eWVvZnE5YjdjY21wc3hjZnV2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8QbwUh40Hl96yMgvOx/giphy.gif";
    text.innerHTML = "Me amas";
    // ... resto de tu estilo
    count++;
  } else if (count == 3) {
    gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWN3c3p0b2lzOXJpajl6dmR3b2plbDc3bWc1bTA4ZmUyZzU5bTIweCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pY8jLmZw0ElqvVeRH4/giphy.gif";
    text.innerHTML = "No me amas?";
    count++;
  } else if (count == 4) {
    gif.src = "https://media1.tenor.com/m/t9PLz06a24wAAAAd/sad-cat.gif";// gif credit: https://tenor.com/view/cat-kitty-gif-25340141
    text.innerHTML = "Voy a llora 😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmp0eWMyaXJrY253ZnRsZXQ5cHlhdHQ4NWU2cnY1MWhjbHRucXhnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/901mxGLGQN2PyCQpoc/giphy.gif";// gif credit: https://tenor.com/view/cat-gif-10173437195524493032
    text.innerHTML = "Amame 😡";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// changes for when YES button is clicked
yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3M5aHRxZndkeHZkNjF1YTJmY3J6Nm5uc21xanZvdDlndWpzNjAxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/reTfIeMhEbzH2/giphy.gif";// gif credit: https://tenor.com/view/peach-cat-kiss-animated-love-mwah-gif-25743978
  text.innerHTML = "Te amo jiji";
  yes.innerHTML = '<a href="https://wa.me/5492236870777">Mandame mensajito mi amorr</a>';// inside the " " put your social media profile link
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
