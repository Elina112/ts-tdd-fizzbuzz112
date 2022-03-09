export type FizzBuzzType = number | string;


const fizzBuzzConverter = (number: number): FizzBuzzType => {
    let numberString = number + ''
    if (number < 1 || number > 100) {
        throw new RangeError('范围错误')
    }
    if (numberString.indexOf('3') > -1 && numberString.indexOf('5') < 0 && numberString.indexOf('7') < 0) {
        return 'Fizz'
    } else if (numberString.indexOf('5') > -1 && numberString.indexOf('7') < 0) {
        return  'Buzz'
    } else if (numberString.indexOf('7') > -1) {
        return  'Whizz'
    } else if (number % 3 == 0 && number % 5 == 0 && number % 7 == 0) {
        return 'FizzBuzzWhizz'
    } else if (number % 5 == 0 && number % 7 == 0) {
        return 'BuzzWhizz'
    } else if (number % 3 == 0 && number % 7 == 0) {
        return 'FizzWhizz'
    } else if (number % 3 == 0 && number % 5 == 0) {
        return 'FizzBuzz'
    } else if (number % 7 == 0) {
        return 'Whizz'
    } else if (number % 5 == 0) {
        return 'Buzz'
    } else if (number % 3 == 0) {
        return 'Fizz'
    } else {
        return numberString
    }
}

export default fizzBuzzConverter;