export const sendForm = (someElem) => {
    const forms = document.querySelectorAll('.form-horizontal');
    const headerForm = document.querySelector('.header-form');
    const servicesForm = document.querySelector('.services-form');
    const statusBlock = document.createElement('div');
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    let nameInputs = document.querySelectorAll('.nameInput');
    let phoneInputs = document.querySelectorAll('.phoneInput');

    const phoneCheck = (input) => {
        input.forEach((e) => {
            e.addEventListener('input', () => {
                let word = e.value.replace(/[^0-9\+]/gi, '');
                word = word.replace(/\++/g, '+');

                e.value = word;
            });
        });
    };

    const textCheck = (input) => {
        input.forEach((e) => {
            e.addEventListener('blur', (e) => {
                let word = e.target.value.replace(/[^а-яёa-z\s+]/gi, '');
                word = word.replace(/^\s+|\s+$/g, '');
                word = word.replace(/\s+/g, ' ');

                e.target.value = word;
                if (word != '') {
                    e.target.value = e.target.value.replace(/( |^)[а-яёa-z]/ig, (w) => { return w.toUpperCase(); });
                }
            });
        });


    };

    phoneCheck(phoneInputs);
    textCheck(nameInputs);

    const sendData = (user) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json",
            }
        }).then(res => res.json());
    };

    const formCheck = (form, name, phone) => {
        let user = {
            name: name.value,
            phone: phone.value,
            count: someElem !== null ? someElem.value : 0
        };

        statusBlock.style.cssText = `width: 50px; height: 50px; margin: auto;
        background-color: #5d5d5d;
        animation:  infinite ease-in-out;`;
        let animation = statusBlock.animate([

            { transform: 'perspective(120px) rotateX(0deg) rotateY(0deg)' },
            { transform: 'perspective(120px) rotateX(-180.1deg) rotateY(0deg)' },
            { transform: 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)' }

        ], {
            duration: 1000,
            iterations: Infinity
        });
        form.append(statusBlock);

        if (name.value === '' || phone.value === '') {
            alert('Нельзя отправить пустую форму!');
            return;
        } else {
            sendData(user).then(data => {
                animation.cancel();
                statusBlock.style.cssText = `color: #5d5d5d`;
                statusBlock.textContent = successText;

                setTimeout(() => {
                    statusBlock.textContent = '';
                }, 3000);
            })
            form.reset();
        }
    };

    const submit = (form, nameInput, phoneInput) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            formCheck(form, nameInput, phoneInput);
        });
    };

    submit(forms[0], nameInputs[0], phoneInputs[0]);
    submit(forms[1], nameInputs[1], phoneInputs[1]);
    submit(headerForm, nameInputs[2], phoneInputs[2]);
    submit(servicesForm, nameInputs[3], phoneInputs[3]);

};