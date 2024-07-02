function create_car(manufacturer, model, ...options){

    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    options.forEach(option => {
        let [Key, value]= option.split(":");
        car[Key.trim()] = value.trim();
    });

    return car;
}

let my_car = create_car("Toyota", "Corrolla", "color: Black", "Sunroof: True", "Year: 2024");

console.log(my_car);