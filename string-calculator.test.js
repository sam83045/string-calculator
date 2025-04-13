const { add } = require("./string-calculator");

describe("String Calculator", () => {
    test("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    test("should return the number itself for a single number", () => {
        expect(add("5")).toBe(5);
    });

    test("should return the sum of two comma-separated numbers", () => {
        expect(add("1,2")).toBe(3);
    });

    test("should handle an unknown amount of numbers", () => {
        expect(add("1,2,3,4,5")).toBe(15);
    });

    test("should handle newlines as delimiters", () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test("should support different delimiters", () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test("should support custom delimiters of any length", () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });

    test("should support multiple custom delimiters", () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

    test("should throw an exception for negative numbers", () => {
        expect(() => add("1,-2,3,-4")).toThrowError("Negative numbers not allowed: -2, -4");
    });

    test("should handle normal cases correctly", () => {
        expect(add("1,2,3")).toBe(6);
        expect(add("")).toBe(0);
    });
});