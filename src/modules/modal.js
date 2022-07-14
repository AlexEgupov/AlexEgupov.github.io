export const modal = () => {
    const services = document.getElementById('services');
    const overlay = document.querySelector('.overlay');
    const servicesModal = document.querySelector('.services-modal');
    const header = document.getElementById('header');
    const headerModal = document.querySelector('.header-modal');
    const imgModal = document.querySelector('.img-modal');
    const documents = document.getElementById('documents');

    const displayBlock = (btnClass, modal, block) => {
        block.addEventListener('click', (e) => {
            e.preventDefault();

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

    document.querySelectorAll('.document-overlay').forEach(el => {
        el.style.display = 'none';
    });

    displayBlock('.btn-header', headerModal, header);
    displayNone('.header-modal__close', headerModal);

    displayBlock('.btn-sm', servicesModal, services);
    displayNone('.services-modal__close', servicesModal);

    displayBlock('.img-responsive', imgModal, documents);
    displayNone('.img-modal__close', imgModal);
};
