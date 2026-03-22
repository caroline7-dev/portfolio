function openLightbox(img) {
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("overlay").style.display = "none";
}
