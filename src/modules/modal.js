export const modal = () => {
    const services = document.getElementById('services');
    const overlay = document.querySelector('.overlay');
    const servicesModal = document.querySelector('.services-modal');
    const header = document.getElementById('header');
    const headerModal = document.querySelector('.header-modal');

    const displayBlock = (btnClass, modal, block) => {
        block.addEventListener('click', (e) => {
            if (e.target.matches(btnClass)) {
                overlay.style.display = 'block';
                modal.style.display = 'block';
            }
        });
    };

    const displayNone = (btnClass, modal) => {
        document.querySelector(btnClass).addEventListener('click', () => {
            overlay.style.display = 'none';
            modal.style.display = 'none';
        });
    };

    displayBlock('.btn-header', headerModal, header);
    displayNone('.header-modal__close', headerModal);

    displayBlock('.btn-sm', servicesModal, services);
    displayNone('.services-modal__close', servicesModal);
};
