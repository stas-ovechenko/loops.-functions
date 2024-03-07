// function sum(a , b) {
//     a = prompt('Enter 1 number');
//     b = prompt('Enter 2 number');

//     return Number(a) + Number(b);
// };

// alert(sum());

// function signOperation(sign) {
//     do {
//         sign = prompt('Enter operation +');
//         if ((sign !== '+')) {
//             alert('Error');
//         };
//     } while ((sign !== '+'));
// };

// signOperation();

// function numberOperation(oneNumber , twoNumber) {
//     do {
//         oneNumber = prompt('Enter the first number');
//         twoNumber = prompt('Enter the second number');
//         if ((isNaN(oneNumber) || isNaN(twoNumber))) {
//             alert('Error');
//         };
//     } while ((isNaN(oneNumber) || isNaN(twoNumber)));
//     function sumOperation(oneNumber , twoNumber) {
//         return Number(oneNumber) + Number(twoNumber);
//     };
//     let result =  sumOperation(oneNumber , twoNumber);
//     alert(result);
// };
// numberOperation();

let sign , oneNumber , twoNumber , result , newOperations , historyOperations , operation;

let history = [];

function signOperation(sign) {
    do {
        sign = prompt('Enter operation +  -  *  /  sin  cos  ^');
        if ((sign !== '+') && (sign !== '-') && (sign !== '*') && (sign !== '/') && (sign !== 'sin') && (sign !== 'cos') && (sign !== '^')) {
            alert('Error');
        };
    } while ((sign !== '+') && (sign !== '-') && (sign !== '*') && (sign !== '/') && (sign !== 'sin') && (sign !== 'cos') && (sign !== '^'));
    return sign;
};

function addition(oneNumber , twoNumber) {
    result = Number(oneNumber) + Number(twoNumber);
    alert('Operation ' + '+' + ' finished with result ' + result);
    printHistory(history);
};

function subtraction(oneNumber , twoNumber) {
    result =  Number(oneNumber) - Number(twoNumber);
    alert('Operation ' + '-' + ' finished with result ' + result);
    printHistory(history);
};

function multiplication(oneNumber , twoNumber) {
    result = Number(oneNumber) * Number(twoNumber);
    alert('Operation ' + '*' + ' finished with result ' + result);
    printHistory(history);
};

function division(oneNumber , twoNumber) {
    result =  Number(oneNumber) / Number(twoNumber);
    alert('Operation ' + '/' + ' finished with result ' + result);
    printHistory(history);
};

let oneSin , twoSin;

function sinOperation(oneNumber , twoNumber) {
    oneSin = Math.sin(oneNumber);
    twoSin = Math.sin(twoNumber);
    alert('Operation ' + 'sin' + ' finished with result ' + oneSin + ' ' + twoSin);
    printHistory(history);
};

let oneCos , twoCos;

function cosOperation(oneNumber , twoNumber) {
    oneCos = Math.cos(oneNumber);
    twoCos = Math.cos(twoNumber);
    alert('Operation ' + 'cos' + ' finished with result ' + oneCos + ' ' + twoCos);
    printHistory(history);
};

function powOperation(oneNumber , twoNumber) {
    result =  Number(oneNumber) ** Number(twoNumber);
    alert('Operation ' + '^' + ' finished with result ' + result);
    printHistory(history);
};

function printHistory(history) {
    if (operation === '+') {
        history[history.length] = 'Operation ' + '+' + ' finished with result ' + result;
    } else if (operation === '-') {
        history[history.length] = 'Operation ' + '-' + ' finished with result ' + result;
    } else if (operation === '*') {
        history[history.length] = 'Operation ' + '*' + ' finished with result ' + result;
    } else if (operation === '/') {
        history[history.length] = 'Operation ' + '/' + ' finished with result ' + result;
    } else if (operation === 'sin') {
        history[history.length] = 'Operation ' + 'sin' + ' finished with result ' + oneSin + ' ' + twoSin;
    } else if (operation === 'cos') {
        history[history.length] = 'Operation ' + 'cos' + ' finished with result ' + oneCos + ' ' + twoCos;
    } else if (operation === '^') {
        history[history.length] = 'Operation ' + '^' + ' finished with result ' + result;
    } else {
        console.log();
    };
};

function numberOperation(oneNumber , twoNumber) {
    do {
        oneNumber = prompt('Enter the first number');
        twoNumber = prompt('Enter the second number');
        if ((isNaN(oneNumber) || isNaN(twoNumber))) {
            alert('Error');
        };
    } while ((isNaN(oneNumber) || isNaN(twoNumber)));
    if (operation === '+') {
        addition(oneNumber , twoNumber);
    } else if (operation === '-') {
        subtraction(oneNumber , twoNumber);
    } else if (operation === '*') {
        multiplication(oneNumber , twoNumber);
    } else if (operation === '/') {
        division(oneNumber , twoNumber);
    } else if (operation === 'sin') {
        sinOperation(oneNumber , twoNumber);
    } else if (operation === 'cos') {
        cosOperation(oneNumber , twoNumber);
    } else if (operation === '^') {
        powOperation(oneNumber , twoNumber);
    } else {
        console.log();
    };
};

// калькулятор

do {
    do {
    operation = signOperation(sign);
    numberOperation(oneNumber , twoNumber);
    newOperations = confirm('Continue further?');
    if (newOperations === false && (historyOperations = true)) {
        historyOperations = confirm('Watch a story?');
    };
    if (historyOperations === true) {
        alert(history.join('\n'));
    };
    } while (newOperations === true); 
} while (newOperations === true && (operation = false));