export default class Gigasecond {
    constructor(date) {
        this._date = date
    }
        
    date(){
        const gigamillisecond = 10 ** 12
        return new Date(this._date.getTime() + gigamillisecond)
    }
}