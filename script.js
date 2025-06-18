const video = document.querySelector(".thumbnail")

video.addEventListener("click", () => {
    video.innerHTML = `
    <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/pRfgmUVvFbU?si=LdmbgbWYpCde85bb"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
    `;
});

function openWeb(url) {
    window.open(url, "_blank")
}