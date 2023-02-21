const salary = [300, 400, 500, 600, 800];
const pairArrayNumbers = [50, 20, 40, 300, 70, 5];

// .sort method

function orderArray(array){

    function orderListSort(a, b){

        // long solution

      /*if(a < b){
            return -1;
        }
        else if(a == b){
            return 0;
        }
        else if(a > b){
            return 1;
        }*/

        // Short solution

        return a - b;
    }

    const order = array.sort(orderListSort);
    return order;
}

// Order a two-dimensional array

function orderArrayTwoDimentional(array, i){

    function orderListSort(a, b){

        // long solution

      /*if(a < b){
            return -1;
        }
        else if(a == b){
            return 0;
        }
        else if(a > b){
            return 1;
        }*/

        // Short solution

        return a[i] - b[i];
    }

    const order = array.sort(orderListSort);
    return order;
}

// Calculate the average of an array

// .reduce method and arrow function

function calculateAverageReduce(array){
    let sum = array.reduce((a, b) => a + b);
    return sum / array.length;
}

// For

function calculateAverageFor(array) {
    let sumArray = 0;
    for(let i = 0; i < array.length; i++){
        sumArray = sumArray + array[i];
    }

    const average = sumArray / array.length;
    console.log(average);
}

// If an array is pair or not

function isPair(array){
    if(array.length % 2 == 0){
        return 'Is pair'
    } else {
        return 'Is odd'
    }
}

// Arrow 

const esPairArrow = (array) => array.length % 2 == 0 ? 'Is pair' : 'Is odd';

// Calculate the median of an array

function calculateMedian(unorderedArray){
    const array = orderArray(unorderedArray);
    const pairArray = isPair(array);

    if(pairArray == 'Is pair'){
        const medianNumber1 = array[(array.length / 2) - 1];
        const medianNumber2 = array[array.length / 2];
        const medianNumbers = [medianNumber1, medianNumber2];
        const medianPair = calculateAverageReduce(medianNumbers);
        console.log(medianPair);

    } else {
        const indexMedianOddArray =  Math.floor(array.length / 2);
        console.log(array[indexMedianOddArray]);
    }
}

// Calculate the mode of an array

function calculateMode(array){
    const listCount = {};

    for(let i = 0; i < array.length; i++){
        const element = array[i];

        if(listCount[element]){
           listCount[element] += 1; 
        } else {
            listCount[element] = 1;
        }
    }

    const listArray = Object.entries(listCount);
    const orderArray = orderArrayTwoDimentional(listArray, 1);
    const maxNumberArray = orderArray[orderArray.length - 1]; 
    const maxNumberBefore = orderArray[orderArray.length - 2];

    if(maxNumberArray[1] === maxNumberBefore[1]){
        console.log('There isn\'t mode');
    } else {
        modeArray = maxNumberArray[0];
        console.log('the mode of this array is: ' + modeArray);
    }
}