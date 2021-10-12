"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weekday = exports.flagChange = void 0;
// use &, |, ~ to handle enum
var AnimalFlag;
(function (AnimalFlag) {
    AnimalFlag[AnimalFlag["None"] = 0] = "None";
    AnimalFlag[AnimalFlag["HasClaws"] = 1] = "HasClaws";
    AnimalFlag[AnimalFlag["CanFly"] = 2] = "CanFly";
    AnimalFlag[AnimalFlag["EatsFish"] = 4] = "EatsFish";
    AnimalFlag[AnimalFlag["Endangered"] = 8] = "Endangered"; //1000
})(AnimalFlag || (AnimalFlag = {}));
var flagChange = function () {
    var animalFlag = AnimalFlag.None;
    console.log(animalFlag); //0
    animalFlag |= AnimalFlag.HasClaws;
    console.log(animalFlag & AnimalFlag.HasClaws); //1
    animalFlag |= AnimalFlag.CanFly;
    console.log(animalFlag & AnimalFlag.HasClaws); //1
    console.log(animalFlag & AnimalFlag.Endangered); //0
    var animalFlag1 = AnimalFlag.None;
    animalFlag1 |= AnimalFlag.EatsFish | AnimalFlag.Endangered;
    console.log(animalFlag1 & AnimalFlag.EatsFish); //4
    console.log(animalFlag1 & AnimalFlag.Endangered); //8
    console.log(animalFlag1 & AnimalFlag.HasClaws); //0
    animalFlag1 &= ~AnimalFlag.Endangered;
    console.log(animalFlag1 & AnimalFlag.Endangered); //0
    //|= to add a flag
    // &= ~flag to clear a flag
    // | to merge flag
};
exports.flagChange = flagChange;
//Use namespace + enum to implement static method for enum
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
exports.Weekday = Weekday;
(function (Weekday) {
    Weekday.isBusinessDay = function (day) {
        return console.log(day !== Weekday.Sunday && day !== Weekday.Saturday);
    };
})(Weekday || (Weekday = {}));
exports.Weekday = Weekday;
