const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

// AGREGA TODOS AQUÍ (Asegúrate de que la ruta sea la correcta)
const gifs = [
  "../resources/zorro.gif",
  "../resources/confused.gif",
  "../resources/sad-cat.gif",
  "../resources/catmalo.gif",
  "../resources/love.gif"
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
    gif.src = "../resources/zorro.gif";
    text.innerHTML = "Me amas";
    // ... resto de tu estilo
    count++;
  } else if (count == 3) {
    gif.src = "../resources/confused.gif";
    text.innerHTML = "No me amas?";
    count++;
  } else if (count == 4) {
    gif.src = "../resources/sad-cat.gif";// gif credit: https://tenor.com/view/cat-kitty-gif-25340141
    text.innerHTML = "Voy a llora 😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "../resources/catmalo.gif";// gif credit: https://tenor.com/view/cat-gif-10173437195524493032
    text.innerHTML = "Amame 😡";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// changes for when YES button is clicked
yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "../resources/love.gif";// gif credit: https://tenor.com/view/peach-cat-kiss-animated-love-mwah-gif-25743978
  text.innerHTML = "Te amo jiji";
  yes.innerHTML = '<a href="https://wa.me/5492236870777">Mandame mensajito mi amorr</a>';// inside the " " put your social media profile link
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
