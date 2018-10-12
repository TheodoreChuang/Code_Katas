class Hamming {
    compute(strand1, strand2){
        if(strand1.length !== strand2.length)
            throw Error('DNA strands must be of equal length.')
        
        return strand1
            .split('')
            .filter((x, i) => x !== strand2.split('')[i])
            .length
    }
}
module.exports = Hamming

//// Solution by nelsonkhan 
