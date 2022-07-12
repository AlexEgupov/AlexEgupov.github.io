export const sendForm = () => {
    const forms = document.querySelectorAll('.form-horizontal');
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
        })


    };

    phoneCheck(phoneInputs);
    textCheck(nameInputs);

    const sendData = (user) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(user)
        }).then(res => res.json());
    }

    const formCheck = (form, name, phone) => {
        let user = {
            name: name.value,
            phone: phone.value
        };

        if (name.value === '' || phone.value === '') {
            alert('Нельзя отправить пустую форму!');
            return;
        } else {
            sendData(user);
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

};