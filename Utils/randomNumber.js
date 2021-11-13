export const RandomNumber= (min,max,numberChosen) => {
let minNumber = Math.ceil(min)
let  maxNumber = Math.floor(max)
const random = Math.floor(Math.random() * (maxNumber-minNumber)) + minNumber
if (random === numberChosen) {
    return RandomNumber(min,max,numberChosen)
}
else {
    return random
}
}