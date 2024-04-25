const izq = {
    card: document.querySelector(".izq-carousel"),
    btn: document.querySelector(".izq-carousel img"),
    hour: document.querySelector(".izq-carousel p"),
    title: document.querySelector(".izq-carousel h3"),
  },
  center = {
    card: document.querySelector(".center-carousel"),
    btn: document.querySelector(".center-carousel img"),
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
    },
    {
      hour: "22:50",
      img: "url('/assets/imagen messi.jpeg')",
      title: "Barcelona vs Juventus",
    },
    {
      hour: "7:45",
      img: "url('/assets/imagen este otro.jpg')",
      title: "Bayern munich vs aldosivi",
    },
  ];
let i = 0,
  j = 1,
  k = 2;

export default function carousel() {
  document.addEventListener("click", (e) => {
    if (e.target === izq.btn) {
      i > 0 ? i-- : (i = contenido.length - 1);
      j > 0 ? j-- : (j = contenido.length - 1);
      k > 0 ? k-- : (k = contenido.length - 1);
      izq.card.style.filter = "blur(15px)brightness(.3)";
      center.card.style.filter = "blur(15px)brightness(.3)";
      der.card.style.filter = "blur(15px)brightness(.3)";
      setTimeout(() => {
        izq.hour.textContent = contenido[k].hour;
        izq.card.style.backgroundImage = contenido[k].img;
        izq.title.textContent = contenido[k].title;

        center.hour.textContent = contenido[j].hour;
        center.card.style.backgroundImage = contenido[j].img;
        center.title.textContent = contenido[j].title;

        der.hour.textContent = contenido[i].hour;
        der.card.style.backgroundImage = contenido[i].img;
        der.title.textContent = contenido[i].title;

        izq.card.style.filter = "blur(0px)brightness(1)";
        center.card.style.filter = "blur(0px)brightness(1)";
        der.card.style.filter = "blur(0px)brightness(1)";
      }, 100);
    }
    // if (e.target === center.btn);
    if (e.target === der.btn) {
      i == 2 ? (i = 0) : i++;
      j == 2 ? (j = 0) : j++;
      k == 2 ? (k = 0) : k++;
      izq.card.style.filter = "blur(15px)brightness(.3)";
      center.card.style.filter = "blur(15px)brightness(.3)";
      der.card.style.filter = "blur(15px)brightness(.3)";

      setTimeout(() => {
        izq.hour.textContent = contenido[k].hour;
        izq.card.style.backgroundImage = contenido[k].img;
        izq.title.textContent = contenido[k].title;

        center.hour.textContent = contenido[j].hour;
        center.card.style.backgroundImage = contenido[j].img;
        center.title.textContent = contenido[j].title;

        der.hour.textContent = contenido[i].hour;
        der.card.style.backgroundImage = contenido[i].img;
        der.title.textContent = contenido[i].title;

        izq.card.style.filter = "blur(0px)brightness(1)";
        center.card.style.filter = "blur(0px)brightness(1)";
        der.card.style.filter = "blur(0px)brightness(1)";
      }, 200);
    }
  });
}
