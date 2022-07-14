export const slider = () => {
    const benefitsArrows = document.querySelector('.benefits-arrows');
    const benefitsItems = document.querySelectorAll('.benefits__item');
    const servicesArrows = document.querySelector('.services-arrows');
    const serviceItems = document.querySelectorAll('.service-block');

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const lowWidth = (items, classActive) => {
        window.addEventListener('resize', () => {
            if (document.body.clientWidth < 576) {
                items.forEach(item => {
                    item.classList.remove(classActive);
                });
                items[0].classList.add(classActive);
            } else if (document.body.clientWidth > 576) {
                if (items.length === 6) {
                    items.forEach(item => {
                        item.classList.remove(classActive);
                    });
                    items[0].classList.add(classActive);
                    items[1].classList.add(classActive);
                    items[2].classList.add(classActive);
                } else if (items.length === 4) {
                    items.forEach(item => {
                        item.classList.remove(classActive);
                    });
                    items[0].classList.add(classActive);
                    items[1].classList.add(classActive);
                }
            }
        });
    };

    const listener = (arrowsBlock, classLeft, classRight, items, classActive) => {
        let currentSlide = 0;
        arrowsBlock.addEventListener('click', (e) => {
            e.preventDefault();

            if (e.target.matches(classRight) || e.target.matches(classLeft)) {
                if (document.body.clientWidth > 576) {
                    items.forEach(item => {
                        item.classList.toggle(classActive);
                    });
                } else if (document.body.clientWidth < 576) {
                    prevSlide(items, currentSlide, classActive);

                    if (e.target.matches(classRight)) {
                        currentSlide++;
                    } else if (e.target.matches(classLeft)) {
                        currentSlide--;
                    }

                    if (currentSlide >= items.length) {
                        currentSlide = 0;
                    }

                    if (currentSlide < 0) {
                        currentSlide = items.length - 1;
                    }

                    nextSlide(items, currentSlide, classActive);
                }
            }

        });
    };

    lowWidth(benefitsItems, 'benefits__item--active');
    lowWidth(serviceItems, 'service-block--active');

    listener(benefitsArrows, '.arrow-left', '.arrow-right', benefitsItems, 'benefits__item--active');
    listener(servicesArrows, '.arrow-left', '.arrow-right', serviceItems, 'service-block--active');
};