import { animate } from "./animate";

export const calc = () => {

    try {
        const calcType = document.getElementById('calc-type');
        const calcTypeMaterial = document.getElementById('calc-type-material');
        const calcInput = document.getElementById('calc-input');
        const calcTotal = document.getElementById('calc-total');

        let totalValue = 0;

        calcType.setAttribute("required", true);
        calcTypeMaterial.setAttribute("required", true);

        const countCalc = () => {
            totalValue = calcInput.value * +calcType.options[calcType.selectedIndex].value * +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;

            calcTotal.value = totalValue;

            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    calcTotal.value = Math.round(totalValue * progress);
                }
            });
        };

        const selectListeners = (select) => {
            select.addEventListener('change', () => {
                if (!isNaN(+select.options[select.selectedIndex].value) && calcInput.value > 0) {
                    countCalc();
                }
            });
        };

        calcInput.addEventListener('input', () => {
            calcInput.value = calcInput.value.replace(/\D/g, '');

            if (!isNaN(+calcType.options[calcType.selectedIndex].value) || !isNaN(+calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value)) {
                countCalc();
            }

        });

        selectListeners(calcType);
        selectListeners(calcTypeMaterial);
    } catch (error) {
        console.log(error.message);
    }
};