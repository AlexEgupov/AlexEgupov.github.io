export const slider = () => {
    const arrows = document.querySelector('.benefits-arrows');
    const benefitsItems = document.querySelectorAll('.benefits__item');

    let currentSlide = 0;

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    if (document.body.clientWidth < 576) {
        benefitsItems.forEach(item => {
            item.classList.remove('benefits__item--active');
        });
        benefitsItems[0].classList.add('benefits__item--active');
    }

    arrows.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.matches('.arrow-right') || e.target.matches('.arrow-left')) {
            if (document.body.clientWidth > 576) {
                benefitsItems.forEach(item => {
                    item.classList.toggle('benefits__item--active');
                });
            } else if (document.body.clientWidth < 576) {
                prevSlide(benefitsItems, currentSlide, 'benefits__item--active');

                if (e.target.matches('.arrow-right')) {
                    currentSlide++;
                } else if (e.target.matches('.arrow-left')) {
                    currentSlide--;
                }

                if (currentSlide >= benefitsItems.length) {
                    currentSlide = 0;
                }

                if (currentSlide < 0) {
                    currentSlide = benefitsItems.length - 1;
                }

                nextSlide(benefitsItems, currentSlide, 'benefits__item--active');
            }
        }

    });
};