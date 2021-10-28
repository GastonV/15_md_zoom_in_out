const selecedtImage: HTMLImageElement =
  document.querySelector(".js__image--scale");
const hsliderBar: HTMLInputElement = document.querySelector(".js__horizontal");
const vsliderBar: HTMLInputElement = document.querySelector(".js__vertical");

let scale = 10;
//vsliderBar.style.maxWidth = `${vsliderBar.height}`;
selecedtImage.width = 400;
selecedtImage.height = 600;
//${vsliderbar.height}
//vsliderBar.style[`width: ${vsliderBar.height}`]
hsliderBar.addEventListener("input", (e) => {
  console.log(hsliderBar.value);
  selecedtImage.width = parseInt(hsliderBar.value) * 5;
});
vsliderBar.addEventListener("input", (e) => {
  console.log(vsliderBar.value);
  selecedtImage.height = parseInt(vsliderBar.value) * 5;
});

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0 && e.shiftKey) {
    hsliderBar.value = (selecedtImage.width / 10).toString();
    selecedtImage.width += scale;
  } else if (e.shiftKey) {
    selecedtImage.width -= scale;
    hsliderBar.value = (selecedtImage.width / 10).toString();
  }
  if (e.deltaY > 0 && e.altKey) {
    selecedtImage.height += scale;
    vsliderBar.value = (selecedtImage.height / 10).toString();
  } else if (e.altKey) {
    selecedtImage.height -= scale;
    vsliderBar.value = (selecedtImage.height / 10).toString();
  }
});
