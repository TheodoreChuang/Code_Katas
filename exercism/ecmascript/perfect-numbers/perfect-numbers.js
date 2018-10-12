export default class PerfectNumbers{
    classify(num){
        if(num < 1) throw Error ('Classification is only possible for natural numbers.')
        let sum = 1
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                if(i === num/i){
                    sum += i
                } else {
                    sum += (i + num/i)
                }
            }
        }
        if(sum > num) return 'abundant'
        if(sum < num || sum === 1) return 'deficient'
        if(sum === num) return 'perfect' 
    }
}
