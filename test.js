test("One dollar should be 157.87 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const Yen = fromDollarToYen(5.4);

    // Si 1 dólar es 157.87 yenes, entonces 5.4 dólares deben ser (5.4 * 157.87)
    const expected = 5.4 * 157.87;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(5.4)).toBe(852.498); // 1 dólar son 157.87 yenes, entonces 5.4 dólares deberían ser = (5.4 * 157.87)
})

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One yen should be 0.0050 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(8.5);

    // Si 1 yen son 0.0050 pounds, entonces 8.5 yenes deben ser (8.5 * 0.0050)
    const expected = 8.5 * 0.0050;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(8.5)).toBe(0.0425); // 1 yen son 0.0050 pounds, entonces 8.5 yenes deberían ser = (8.5 * 0.0050)
})

// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});