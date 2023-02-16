const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('.calculate');
const priceResult = document.querySelector('#result');
const emojiResult = document.querySelector('#emoji');


btn.addEventListener('click', calculatePriceWithDiscount);

function calculatePriceWithDiscount(){
    // Form: (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount){
        priceResult.innerText = 'Please, fill the form';
        emojiResult.innerText = '🧐';
        return;
    }

    if(discount > 100){
        priceResult.innerText = 'HAHAHA, really?';
        emojiResult.innerText = '🤡🤡🤡🤡🤡';
        return;        
    }

    const newPrice = (price * (100 - discount) / 100);

    priceResult.innerText = 'The new price is: $' + newPrice;
    emojiResult.innerText = '😉';
}