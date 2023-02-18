const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('.calculate');
const priceResult = document.querySelector('#result');
const emojiResult = document.querySelector('#emoji');


btn.addEventListener('click', calculatePriceWithDiscount);

const couponList = [];
couponList.push({
    name: 'MyGift',
    discount: 30
});
couponList.push({
    name: 'IDontWantToPay',
    discount: 20
});
couponList.push({
    name: 'GoodLuck',
    discount: 70
});
couponList.push({
    name: 'TooExpensive',
    discount: 50
});
couponList.push({
    name: 'MeryChristmas',
    discount: 40
});

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

    function search(couponElement){
        return couponElement.name == coupon;
    }

    // .find method

    const couponInArray = couponList.find(search);

    if(couponInArray){
        discount = couponInArray.discount;
    } else {
        priceResult.innerText = 'The coupon is invalid';
        emojiResult.innerText = '🤡🤡🤡🤡🤡';
        return
    }

    const newPrice = (price * (100 - discount) / 100);

    priceResult.innerText = 'The new price is: $' + newPrice;
    emojiResult.innerText = '🥳';

    // .filter method

    /*const couponInArray =  couponList.filter(search);

    if(couponInArray.length > 0){
        discount = couponInArray[0].discount;
    } else {
        priceResult.innerText = 'The coupon is invalid';
        emojiResult.innerText = '🤡🤡🤡🤡🤡';
        return
    }*/

    /*const couponsObj = {
    'MyGift': 30,
    'IDontWantToPay': 20,
    'GoodLuck': 70,
    'TooExpensive': 50,
    'MeryChristmas': 40
    };*/

    /*if(couponsObj [coupon]){
        discount = couponsObj [coupon]
    } else {
        priceResult.innerText = 'The coupon is invalid';
        emojiResult.innerText = '🤡🤡🤡🤡🤡';
        return
    }*/

    /*if(coupon === 'MyGift'){
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
    }*/
}