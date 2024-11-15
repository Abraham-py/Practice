const sizes = document.querySelectorAll(".size");
sizes.forEach((size) => {
  size.addEventListener("click", () => {
    sizes.forEach((s) => s.classList.remove("active"));
    size.classList.add("active");
  });
});

const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.getElementById("mainImage");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const newSrc = thumbnail.getAttribute("src");
    mainImage.setAttribute("src", newSrc);
    thumbnails.forEach((img) => img.classList.remove("active"));
    thumbnail.classList.add("active");
  });
});
