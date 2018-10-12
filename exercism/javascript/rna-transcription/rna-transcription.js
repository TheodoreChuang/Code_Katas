class DnaTranscriber {
    toRna(n){
         const DTOR = {
            'G': 'C',
            'C': 'G',
            'T': 'A',
            'A': 'U'
        }

        return n
            .split('')
            .map(function(n){
                if(DTOR[n] === undefined) throw Error('Invalid input')
                    return DTOR[n]})
            .join('') 
    }
} 

module.exports = DnaTranscriber