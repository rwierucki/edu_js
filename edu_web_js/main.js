
// eval('alert("Witaj");');
console.log( isFinite(-Infinity) );
console.log( !isNaN(2 * undefined) );
console.log( parseFloat("20.5zł") );
console.log( parseInt("20zł") );

// alert("Witaj!");

// wbudowane obiekty //
// wbudowane obiekty //
// wbudowane obiekty //

var n = "Ania Kowalska-Nowak";

var n1 = new String("Ania");

var n2 = String(32);

// console.log( typeof n2 );

// console.log( n.length );

// console.log( n.length );
// console.log( n[1] );
// console.log( n.charAt(1) );
// console.log( n.indexOf("Anna") );
// console.log( n.replace("nia", "nna") );
// console.log( n.slice(0, 2) );
// console.log( n.substr(0, 2) );
// console.log( n.split(" ") );
console.log( n.toLowerCase() );
console.log( n.toUpperCase() );

/// obiekt array //
/// obiekt array //
/// obiekt array //

var arr01 = [10, 2];  // tablica [10,2]
var arr02 = [10]; // tablica - 10 x undefined !!!

var arr1 = new Array(10, 2); // tablica [10,2]
var arr2 = new Array(10); // tablica - 10 x undefined !!!

/// funkcje ///
/// funkcje ///
/// funkcje ///

function sayHello(firstName, lastName) {
    return firstName + " " + lastName;
}

// var f = new Function("firstName", "lastName", "return firstName + ' ' + lastName;");

function f(firstName, lastName) {

    arguments.callee.counter = arguments.callee.counter ? arguments.callee.counter : 1; // ile razy funkcja została wywołana // własny licznik wywołąnia funkcji //

    return firstName + " " + lastName + ", funkcja wywołana po raz " + arguments.callee.counter++;

}

console.log( f.length ); // liczba parametrów funkcji --> 2, bo firstName i lastName


/// try catch ///
/// try catch ///
/// try catch ///

function getData(type) {

    if(!type) {
        throw new Error("Nieprawidłowy typ.");
    }

    return {
        firstName: "Jan",
        lastName: "Kowalski"
    };

}

function searchDb() {

    console.log("Otwieram połączenie.");

    console.log("Pobieram dane.");

    var data = getData();

    if(data === null) {
        throw new Error("Brak danych");
    }

    console.log("Zamykam połączenie.");

}

try {
    searchDb();
} catch(e) {
    console.log("Wystąpił błąd: " + e.message);
} finally {
    console.log("Zamykam połączenie - zawsze wykonynane - nawet jak bład się nie pojawi");
}