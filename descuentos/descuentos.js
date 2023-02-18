const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('.calculate');
const priceResult = document.querySelector('#result');
const emojiResult = document.querySelector('#emoji');


btn.addEventListener('click', calculatePriceWithDiscount);

function calculatePriceWithDiscount(){
    // Form: (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon){
        priceResult.innerText = 'Please, fill the form';
        emojiResult.innerText = '🧐';
        return;
    }

    let discount;


    if(coupon === 'MyGift'){
        discount = 30;
        const newPrice = (price * (100 - discount) / 100);

        priceResult.innerText = 'The new price is: $' + newPrice;
        emojiResult.innerText = '🥳';
    } 
    else if(coupon === 'IDontWantToPay'){
        discount = 20;
        const newPrice = (price * (100 - discount) / 100);

        priceResult.innerText = 'The new price is: $' + newPrice;
        emojiResult.innerText = '😉';
    }
    else if(coupon === 'GoodLuck'){
        discount = 70;
        const newPrice = (price * (100 - discount) / 100);

        priceResult.innerText = 'The new price is: $' + newPrice;
        emojiResult.innerText = '🤑';
    }
    else if(coupon === 'TooExpensive'){
        discount = 50;
        const newPrice = (price * (100 - discount) / 100);

        priceResult.innerText = 'The new price is: $' + newPrice;
        emojiResult.innerText = '😱';
    }
    else if(coupon === 'MeryChristmas'){
        discount = 40;
        const newPrice = (price * (100 - discount) / 100);

        priceResult.innerText = 'The new price is: $' + newPrice;
        emojiResult.innerText = '🎅';
    } else {
        priceResult.innerText = 'The coupon is invalid';
        emojiResult.innerText = '🤡🤡🤡🤡🤡';
    }
}