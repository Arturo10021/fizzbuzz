import generarFizzbuzz from "./fizzbuzz";

describe("Fizzbuzz", () => {
    it("generar el mismo numero si no se sigue ninguna regla", () => {
        expect(generarFizzbuzz(1)).toEqual(1);
    });
    it("generar el mismo numero para cualquier numero si no sigue ninguna regla", () => {
        expect(generarFizzbuzz(2)).toEqual(2);
    });
    it("generar Fizz si el numero es  3", () => {
        expect(generarFizzbuzz(3)).toEqual("Fizz");
    });
    it("generar Buzz si el numero es 5", () => {
        expect(generarFizzbuzz(5)).toEqual("Buzz");
    });
});