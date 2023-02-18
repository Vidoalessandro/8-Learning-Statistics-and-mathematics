const salary = [300, 400, 500, 600, 800];

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