console.log("Hi, connected");

const quotes = [{
        category: 'leadership',
        source: 'apple',
        quote: 'hello there apple'
    },
    {
        category: 'encouraging',
        source: 'orange',
        quote: 'hello there orange'
    },
    {
        category: 'gratitude',
        source: 'banana',
        quote: 'hello thr banana'
    }
];

const buttons = document.getElementsByClassName('category');
const quoteElement = document.getElementById('quote');

for (const button of buttons) {
    button.addEventListener('click', (event) => {
        const selection = event.target;

        //Returns array [] with all the items tht match a given value
        const result = quotes.filter(
            (v) => v.category === selection.dataset.category
        );

        //Returns an object [] of the first item it find that matches
        const resultfind = quotes.find(
            (v) => v.category === selection.dataset.category
        );

        //returns a boolean true/false on if an item matching the criteria exits
        const resultSome = quotes.some(
            (v) => v.category === selection.dataset.category
        );

        quoteElement.innerHTML = result[0].quote;
    });
}