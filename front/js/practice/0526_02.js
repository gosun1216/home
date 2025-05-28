const asideTag = document.querySelector("aside");

asideTag.addEventListener('click',(evt) => {
    evt.currentTarget.classList.toggle("active");
} );