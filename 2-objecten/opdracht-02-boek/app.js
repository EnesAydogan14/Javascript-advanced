
const book = {
    title: "Power",
    author: "John Doe",
    publisher: "XYZ Publishing",
    year: 2020,
    sold: 5000000,
    price: "€19.99"
};


const outputDiv = document.querySelector('.output');


for (const key in book) {
    const p = document.createElement('p');
    p.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${book[key]}`;
    outputDiv.appendChild(p);
}