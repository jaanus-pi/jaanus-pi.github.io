let cars = [
    {
        "Brand": "Audi",
        "Year": "2006",
        "Price": "3000",
        "Color": "Black",
        "isBought": true
    },
    {
        "Brand": "BMW",
        "Year": "2016",
        "Price": "25000",
        "Color": "White",
        "isBought": false
    },
    {
        "Brand": "KIA",
        "Year": "2023",
        "Price": "20000",
        "Color": "Red",
        "isBought": true
    },
    {
        "Brand": "Toyota",
        "Year": "2020",
        "Price": "18000",
        "Color": "Blue",
        "isBought": false
    },
    {
        "Brand": "Tesla",
        "Year": "2021",
        "Price": "40000",
        "Color": "White",
        "isBought": false
    }
];

console.log("All cars:")
for (let i = 0; i < cars.length; i++) {
    console.log("Brand: " + cars[i].Brand + ", Year: " + cars[i].Year + ", Price: " + cars[i].Price + "€" + ", Color: " + cars[i].Color);
}

console.log("Availible cars:")
for (let i = 0; i < cars.length; i++) {
    if (cars[i].isBought == false) {
        console.log("Brand: " + cars[i].Brand + ", Year: " + cars[i].Year + ", Price: " + cars[i].Price + "€" + ", Color: " + cars[i].Color);
    }
}