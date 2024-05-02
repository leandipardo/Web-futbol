const izq = {
    card: document.querySelector(".izq-carousel"),
    btn: document.querySelector(".izq-carousel img"),
    hour: document.querySelector(".izq-carousel p"),
    title: document.querySelector(".izq-carousel h3"),
  },
  center = {
    card: document.querySelector(".center-carousel"),
    btn: document.querySelector(".center-carousel a"),
    hour: document.querySelector(".center-carousel p"),
    title: document.querySelector(".center-carousel h3"),
  },
  der = {
    card: document.querySelector(".der-carousel"),
    btn: document.querySelector(".der-carousel img"),
    hour: document.querySelector(".der-carousel p"),
    title: document.querySelector(".der-carousel h3"),
  },
  contenido = [
    {
      hour: "19:00",
      img: "url('/assets/imagen cr7.jpg')",
      title: "Manchester United vs aresenal",
      link: "https://lc.cx/9Y3TP-",
    },
    {
      hour: "22:50",
      img: "url('/assets/imagen messi.jpeg')",
      title: "Barcelona vs Juventus",
      link: "https://lc.cx/OMe173",
    },
    {
      hour: "7:45",
      img: "url('/assets/imagen este otro.jpg')",
      title: "Bayern munich vs Real Madrid",
      link: "https://lc.cx/mxJGbT",
    },
    {
      hour: "10:00",
      img: "url('/assets/zlatan.jpg')",
      title: "Juventus vs Rayo vallecano",
      link: "https://lc.cx/mdv4S3",
    },
    {
      hour: "13:00",
      img: "url('/assets/Superclasico.jpg')",
      title: "Boca vs River",
      link: "https://lc.cx/mdv4S3",
    },
    {
      hour: "05:00",
      img: "url('/assets/Jugador river.jpg')",
      title: "River vs santos",
      link: "https://rb.gy/kay2m2",
    },
  ];
let i = 0,
  j = 1,
  k = 2;
// prettier-ignore
export default function carousel() {
  movimiento();
  document.addEventListener("click", (e) => {
    if (e.target === izq.btn)movimiento("izquierda");
    else if (e.target === der.btn)movimiento("derecha");
  });
}
//Evalua si es izquierda o derecha lo mueve y aplica efectos visuales
function movimiento(Direccion) {
  if (Direccion === "izquierda") {
    i >= contenido.length - 1 ? (i = 0) : i++;
    j >= contenido.length - 1 ? (j = 0) : j++;
    k >= contenido.length - 1 ? (k = 0) : k++;
  } else if (Direccion === "derecha") {
    i > 0 ? i-- : (i = contenido.length - 1);
    j > 0 ? j-- : (j = contenido.length - 1);
    k > 0 ? k-- : (k = contenido.length - 1);
  }
  izq.hour.textContent = contenido[k].hour;
  izq.card.style.backgroundImage = contenido[k].img;
  izq.title.textContent = contenido[k].title;

  center.hour.textContent = contenido[j].hour;
  center.card.style.backgroundImage = contenido[j].img;
  center.btn.href = contenido[j].link;
  center.title.textContent = contenido[j].title;

  der.hour.textContent = contenido[i].hour;
  der.card.style.backgroundImage = contenido[i].img;
  der.title.textContent = contenido[i].title;

  izq.card.classList.toggle(`animacion-${Direccion}`);
  center.card.classList.toggle(`animacion-${Direccion}`);
  der.card.classList.toggle(`animacion-${Direccion}`);
  setTimeout(() => {
    izq.card.classList.toggle(`animacion-${Direccion}`);
    center.card.classList.toggle(`animacion-${Direccion}`);
    der.card.classList.toggle(`animacion-${Direccion}`);
  }, 500);
}
