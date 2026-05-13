
// Problem Statement

// You are given:

// An array of product objects.
// An array of categories.

// Write a JavaScript program to return only those products whose category exists in the given category list.



const products = [
    {
        name: "Laptop",
        cat: "electronics"
    },

    {
        name: "Mouse",
        cat: "electronics"
    },

    {
        name: "Apple",
        cat: "food"
    },

    {
        name: "Banana",
        cat: "food"
    },

    {
        name: "Shirt",
        cat: "cloths"
    },

    {
        name: "T-Shirt",
        cat: "cloths"
    },
];

const cat = ["cloths", "food"]


const filterCat = products.filter(val => cat.includes(val.cat));

console.log(filterCat)


