// Statistical formulas on an object

const StatisticsForms = {};

// .sort method

StatisticsForms.orderArray = function orderArray(array){

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

StatisticsForms.orderArrayTwoDimentional = function orderArrayTwoDimentional(array, i){

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

StatisticsForms.calculateAverageReduce = function calculateAverageReduce(array){
    let sum = array.reduce((a, b) => a + b);
    return sum / array.length;
}

// For

StatisticsForms.calculateAverageFor = function calculateAverageFor(array) {
    let sumArray = 0;
    for(let i = 0; i < array.length; i++){
        sumArray = sumArray + array[i];
    }

    const average = sumArray / array.length;
    console.log(average);
}

// If an array is pair or not

StatisticsForms.isPair = function isPair(array){
    if(array.length % 2 == 0){
        return 'Is pair'
    } else {
        return 'Is odd'
    }
}

// Arrow 

StatisticsForms.isPairArrow = array => array.length % 2 == 0 ? 'Is pair' : 'Is odd';

// Calculate the median of an array

StatisticsForms.calculateMedian = function calculateMedian(unorderedArray){
    const array = StatisticsForms.orderArray(unorderedArray);
    const pairArray = StatisticsForms.isPair(array);

    if(pairArray == 'Is pair'){
        const medianNumber1 = array[(array.length / 2) - 1];
        const medianNumber2 = array[array.length / 2];
        const medianNumbers = [medianNumber1, medianNumber2];
        const medianPair = StatisticsForms.calculateAverageReduce(medianNumbers);
        return medianPair;

    } else {
        const indexMedianOddArray =  Math.floor(array.length / 2);
        return array[indexMedianOddArray];
    }
}

// Calculate the mode of an array

StatisticsForms.calculateMode = function calculateMode(array){
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
    const orderArray = StatisticsForms.orderArrayTwoDimentional(listArray, 1);
    const maxNumberArray = orderArray[orderArray.length - 1]; 
    const maxNumberBefore = orderArray[orderArray.length - 2];

    if(maxNumberArray[1] === maxNumberBefore[1]){
        console.log('There isn\'t mode');
    } else {
        modeArray = maxNumberArray[0];
        console.log('the mode of this array is: ' + modeArray);
    }
}