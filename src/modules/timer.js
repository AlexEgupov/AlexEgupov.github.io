export const timer = (deadline) => {
    const countDays = document.querySelectorAll('.days');
    const countHours = document.querySelectorAll('.hours');
    const countMinutes = document.querySelectorAll('.minutes');
    const countSeconds = document.querySelectorAll('.seconds');

    const wordDays = document.querySelectorAll('.daysWord');
    const wordHours = document.querySelectorAll('.hoursWord');
    const wordMinutes = document.querySelectorAll('.minutesWord');
    const wordSeconds = document.querySelectorAll('.secondsWord');

    let interval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, days, hours, minutes, seconds };
    };

    function zeroPlus(item) {
        let num = item < 10 ? '0' + item : item;
        return num;
    }

    const numWord = (value, words) => {
        value = Math.abs(value) % 100;
        const lastNum = value % 10;

        if (value > 10 & value < 20) { return words[2] };
        if (lastNum > 1 && lastNum < 5) { return words[1] };
        if (lastNum === 1) { return words[0] };

        return words[2];
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();

        if (getTime.timeRemaining > 0) {
            countDays.forEach(day => day.textContent = zeroPlus(getTime.days));
            countHours.forEach(day => day.textContent = zeroPlus(getTime.hours));
            countMinutes.forEach(day => day.textContent = zeroPlus(getTime.minutes));
            countSeconds.forEach(day => day.textContent = zeroPlus(getTime.seconds));
        } else {
            countDays.forEach(day => day.textContent = "00");
            countHours.forEach(day => day.textContent = "00");
            countMinutes.forEach(day => day.textContent = "00");
            countSeconds.forEach(day => day.textContent = "00");
            clearInterval(interval);
        }

        wordDays.forEach(word => word.textContent = numWord(getTime.days, ['День:', 'Дня:', 'Дней:']));
        wordHours.forEach(word => word.textContent = numWord(getTime.hours, ['Час:', 'Часа:', 'Часов:']));
        wordMinutes.forEach(word => word.textContent = numWord(getTime.minutes, ['Минута:', 'Минуты:', 'Минут:']));
        wordSeconds.forEach(word => word.textContent = numWord(getTime.seconds, ['Секунда:', 'Секунды:', 'Секунд:']));
    };
    interval = setInterval(updateClock, 1000);
};