//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let Year = function(input) {
    this.year = input
};

Year.prototype.isLeap = function() {
    // return (this.year % 4 === 0 && this.year % 100 !== 0 || this.year % 400 === 0)

    if(this.value % 400 === 0){
        return true
    }
    if(this.value % 100 === 0) {
        return false
        }
    if(this.value % 4 === 0){
        return true
    } 
    else {
        return false
    }
};

module.exports = Year;


