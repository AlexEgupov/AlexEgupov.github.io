export const smoothScroll = () => {

    const html = document.querySelector('html');
    const header = document.getElementById('header');
    const smoothScrollBtn = document.querySelector('.smooth-scroll');

    smoothScrollBtn.style.display = 'none';
    smoothScrollBtn.style.cursor = 'pointer';

    window.addEventListener('scroll', () => {
        if (html.scrollTop > 860) {
            smoothScrollBtn.style.display = 'block';
        } else {
            smoothScrollBtn.style.display = 'none';
        }
    });

    smoothScrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        header.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};