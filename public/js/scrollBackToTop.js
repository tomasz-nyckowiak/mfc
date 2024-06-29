const backToTopBtn = document.getElementById("btn-back-to-top");

//When the user scrolls down 20px from the top of the document, show the button
const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.classList.remove("hidden");
    } else backToTopBtn.classList.add("hidden");
};

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

backToTopBtn.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);