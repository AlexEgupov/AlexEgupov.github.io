export const modal = () => {
    const services = document.getElementById('services');
    const overlay = document.querySelector('.overlay');
    const servicesModal = document.querySelector('.services-modal');

    services.addEventListener('click', (e) => {
        if (e.target.matches('.btn-sm')) {
            overlay.style.display = 'block';
            servicesModal.style.display = 'block';
        }
    });
    servicesModal.addEventListener('click', (e) => {
        if (e.target.matches('.services-modal__close')) {
            overlay.style.display = 'none';
            servicesModal.style.display = 'none';
        }
    });
};
