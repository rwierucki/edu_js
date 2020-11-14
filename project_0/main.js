const arr1 = ['one', 'two', 'three'];
arr1[0] = 'jeden';
arr1[1] = 'dwa';
arr1[2] = 'trzy';
console.log(arr1);

arr1.length = 0;
console.log(arr1);
arr1.includes('jeden') ? console.log(' jeden :)') : console.log('brak jeden');



let arr2 = ['hello'];
//  ternary operator //
arr2.includes('hello') ? console.log('true') : console.log('false');
arr2.includes('world') ? console.log('true') : console.log('false');

// HR // 1
console.log(' ////////////////////////////////////////////////////// ');
const myArray = [1 , 2, 3, 4, 5];

//zmieniaja obecną tablicę
// pop // push
myArray.pop(); // usuwanie ostatni element

myArray.push('add el to end '); // dodanie na koncu
console.log(myArray);

//shift // unshift
myArray.shift(); // usuwanie pierwszego elementu
console.log(myArray);
myArray.unshift('add first el to arr');
console.log(myArray);

/// example //
const app = document.querySelector('#app');
const div = document.createElement('div');

const tags = ['jazz', 'rock'];
tags.push('pop');

const newTags = ['rnb', 'rap'];
const allTabs =[].concat(tags, newTags)

console.log(allTabs);

div.innerHTML = allTabs.join(', ');
app.appendChild(div);

// slice // splice // forEach //
const myArray2 = ['zero', 'jeden', 'dwa', 'trzy', 'cztery', 'pięc'];
const s1 = myArray2.slice(4); // drugi parametr zwraca długosc tablicy - czyli 6
const s2 = myArray2.slice(4, 5); // jak podamy ostatni indeks to zwroci o 1 mniej element!!!!
console.log(s1,s2);

// splice //
const myArray3 = ['zero', 'jeden', 'dwa', 'trzy', 'cztery', 'pięc'];
myArray3.splice(5);
console.log(myArray3);

myArray3.splice(2, 1); // pierwszy argument indeks, drugi to ilosc elementow do usuniecia //
console.log(myArray3);


const myArray4 = ['zero', 'jeden', 'dwa', 'trzy', 'cztery', 'pięc'];
const s3 = myArray4.splice(3, 1, 'zastapiona wartosc');
console.log(myArray4);
const s4 = myArray4.splice(3, 0, 'dodana wartosc pod indeks 3 wartosc');
console.log(myArray4);
console.log('end');

const myArray5 = ['zero', 'jeden', 'dwa', 'trzy'];
myArray5.forEach((el, i) => {
    console.log(`${el} is at ${i} index`);
}
);

// example - list //
const list = document.querySelector('#list');
const menuArray = ['Start', 'News', 'About', 'End'];

menuArray.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    list.appendChild(li);
});

const liElements = document.querySelectorAll('li');

liElements.forEach(element => {


    element.addEventListener('click', (e) => {
        liElements.forEach (el => {
            el.classList.remove('list-item');
        });
        e.target.classList.add('list-item');
    } )
});

// filter //
// const myArray6 = [1 , 2, 3, 4, 5];
// import shoppingItems from './shoppingItems';
console.log(shoppingItems);
const foodItems = shoppingItems.filter(item => item.category === 'food');
console.log(foodItems);

// find // zwraca pierwszy warunek ktory spelnia warunek
const getCarrots1 = shoppingItems.find(item => item.name === 'Carrots');
const getCarrots2 = shoppingItems.find(item => item.name.toLowerCase() === 'carrots');
console.log(getCarrots1);
console.log(getCarrots2);

// map // zwraca nową tablicę z
const extraArray = myArray5.map((item,index) => {
    return `${index} --- ${item}`;
});
console.log(extraArray);


const shoppingList = shoppingItems.map(item => {
    return `--- ${item.name} | ${item.category} | $${item.price}`;
})
console.log(shoppingList);

// reduce //
const totalPrice = shoppingItems.reduce((acc, item) => {
    return acc + item.price;
}, 0);

console.log(totalPrice.toFixed(2));

// filter + reduce // obliczenie sumy zakupow dla danej categorii
const priceOfCosmetics = shoppingItems
    .filter(item => item.category.toLowerCase() === 'cosmetics')
    .reduce((acc, item) => acc + (item.price * item.quantity), 0);
console.log(priceOfCosmetics);













