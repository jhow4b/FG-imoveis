const video = document.querySelector(".thumbnail");

video.addEventListener("click", () => {
  video.innerHTML = `
        <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/l7TYxo0Ga-k?autoplay=1"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
        ></iframe>
    `;
});

function openWeb(url) {
  window.open(url, "_blank");
}
