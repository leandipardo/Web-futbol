const $izq = document.querySelector(".izq-carousel img"),
  $center = document.querySelector(".center-carousel img"),
  $der = document.querySelector(".der-carousel img");
export default function carousel() {
  document.addEventListener("click", (e) => {
    if (e.target === $izq) Slider(-1);
    if (e.target === $center) Slider(true);
    if (e.target === $der) Slider(1);
  });
}
function Slider(elClicked) {}
