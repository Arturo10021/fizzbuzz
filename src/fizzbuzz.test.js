import generarFizzbuzz from "./fizzbuzz";

describe("Fizzbuzz", () => {
    it("generar el mismo numero si no se sigue ninguna regla", () => {
        expect(generarFizzbuzz(1)).toEqual(1);
    });
});