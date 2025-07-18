window.addEventListener("DOMContentLoaded", function () {
  const sound = document.getElementById("successSound");

  setTimeout(() => {
    const playPromise = sound.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Sound played successfully
        })
        .catch((error) => {
          console.warn("Autoplay blocked by browser:", error);
        });
    }
  }, 500); // short delay ensures audio loads properly
});
