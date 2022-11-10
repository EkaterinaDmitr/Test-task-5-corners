import {initPhoneMask} from './modules/phone-mask.js';
import {calcCartPrice} from './modules/calcCartPrice.js';
import './modules/selectOption.js';
import {initForm} from './modules/initForm.js';

window.addEventListener('load', () => {
        initPhoneMask();
        calcCartPrice();
        initForm();
});




window.addEventListener('click', function (event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterItem = event.target.closest('.products__item-about');
        counter = counterItem.querySelector('[data-counter]');

    }
    
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;        
    }

    if (event.target.dataset.action === 'minus') {           
        if (parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText;
            }
    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.products__item-about')) {
        calcCartPrice();
    }  

});



// const formLabel = document.querySelector(".form__label")

// document.querySelectorAll('input').forEach(el => {
//     el.addEventListener('blur', () => {
//         if (el.value.length === 0) {
//             showErr(el, 'Ошибка ввода');
//             // formLabel.remove();
//         }
//     });
// });

// function showErr(field, errText) {
//     field.classList.add('field-err');
//     if (field.nextElementSibling && field.nextElementSibling.textContent === errText) {
//         return;
//     }

//     const err = document.createElement('span');
//     field.after(err);
//     err.classList.add('err-message');
//     err.textContent = errText;

//     hideErr(field, err);
// }

// function hideErr(field, err) {
//     field.addEventListener('input', () => {
//         field.classList.remove('field-err');
//         err.remove();
//     });
// }







