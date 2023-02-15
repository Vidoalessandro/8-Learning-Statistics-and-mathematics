console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado ** 2;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function calcularCuadrado(lados){
    return {
        perimetro: lados * 4,
        area: lados ** 2
    };
}

console.groupEnd('Cuadrado');

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});

function calcularTriangulo(lado1, lado2, ladoBase, altura){
    return {
        perimetro: lado1 + lado2 + ladoBase,
        area: (ladoBase * altura) / 2
    };
}

function calcularAlturaTrianguloIsosceles(lados, base){
    if(lados == base){
        console.warn('Este no es un triángulo isósceles');
    } else {
        return Math.sqrt((lados ** 2) - ((base ** 2)) / 4);
    }
}

console.groupEnd('Triangulo');

console.group('Circle');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.141592654;

const circunsferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunsferencia,
    areaCirculo 
});

function calcularCirculo(radio){

    const PI = Math.PI;
    const diametro = radio * 2;
    const radioAlcuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * PI,
        area: radioAlcuadrado * PI
    };
}

console.groupEnd('Circle');