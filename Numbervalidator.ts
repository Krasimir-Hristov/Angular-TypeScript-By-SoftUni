export class NumberValidator {
    validate(arg) {
        return !isNaN(Number(arg));
    }
}