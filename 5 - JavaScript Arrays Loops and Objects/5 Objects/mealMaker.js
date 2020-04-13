const menu = {
    _course: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers () {
        return this._course.appetizers;
    },
    set appetizers (appetizerIn) {
        return this._course.appetizers = appetizerIn;
    },
    get mains () {
        return this._course.mains;
    },
    set mains (mainIn) {
        return this._course.appetizers = mainIn;
    },
    get desserts () {
        return this._course.desserts;
    },
    set desserts (dessertIn) {
        return this._course.desserts = dessertIn;
    },
    get course () {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },

    addDishToCourse (courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._course[courseName].push(dish);
    },

    getRamdomDishFromCourse (courseName) {
        const dishes = this._course[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal () {
        const appetizer = this.getRamdomDishFromCourse('appetizers');
        const main = this.getRamdomDishFromCourse('mains');
        const dessert = this.getRamdomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
    }
};

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Prawn Coctail', 4.25);
menu.addDishToCourse('appetizers', 'Garlic Bread', 3.50);

menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('mains', 'Fish & Chips', 12.95);

menu.addDishToCourse('desserts', 'Cheese Cake', 4.50);
menu.addDishToCourse('desserts', 'Creme Brule', 4.25);
menu.addDishToCourse('desserts', 'Cheese Board', 3.25);

let meal = menu.generateRandomMeal();
console.log(meal);