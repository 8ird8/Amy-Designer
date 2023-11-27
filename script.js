const initSlider = () => {
    const slide = document.querySelector(".slide");
    const imageList = slide.querySelector(".slide .img-list");
    const slideButtons = document.querySelectorAll(".slide .slide_btn");

    let scrollAmount = 550;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            imageList.scrollBy({ left: scrollAmount * direction , behavior: "smooth" });
        });
    });
};

document.addEventListener("DOMContentLoaded", initSlider);

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];



const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isdragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    
}

const dragStop = () => {
    isdragStart = false;
    carousel.classList.remove("dragging");

    if(!isdragging) return;
    isDragging = false;
    
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
