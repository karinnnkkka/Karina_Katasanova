//TASK 1

function IntegersFromList(l) {
    let NewList = l.filter(x => typeof x != 'string')
    return NewList
}

console.log("\nTASK 1 OUTPUT")
console.log(IntegersFromList([1, 'a', 'b', 0, 15]))
console.log(IntegersFromList([',', 'a', 'b', 3, 'aac', 4]))
console.log(IntegersFromList([1, '223', 'b', 55, 15]))

//TASK 2

function first_non_repeating_letter(s){
    for(let j  = 0; j < s.length; j++){
        let k = s.match(new RegExp(s[j],"gi")).length 
        if (k == 1){
            return s[j]
        }
    }
    return ''
}

console.log("\nTASK 2 OUTPUT")
console.log(first_non_repeating_letter('sTRess'))
console.log(first_non_repeating_letter('ffFiNale'))
console.log(first_non_repeating_letter('sUpeRsTaAy'))

//TASK 3

function SumToSingleDigit(a){
    let sum = 0
    if(a==0){
        sum = 0
    }
    else{
        let parts = a.toString().split('').map(Number)
        for(i=0;i<parts.length;i++){
            sum+=parts[i]
        }
        while(sum > 9){
            let sum1 = sum.toString().split('').map(Number)
            sum = 0
            for(i=0;i<sum1.length;i++){
                sum+=sum1[i]
            }
        }
    }
    return sum
}

console.log("\nTASK 3 OUTPUT")
console.log(SumToSingleDigit(1229))
console.log(SumToSingleDigit(1229452))
console.log(SumToSingleDigit(1023))

//TASK 4

function Pairs(array){
    let target = 5
    let pairs = 0
    array.forEach(function(item, idx){
        for(let i = idx+1; i < array.length; i++){
            if(item + array[i] == target){
                pairs+=1
            }
        }
    })
    return pairs
}

console.log("\nTASK 4 OUTPUT")
console.log("The number of pairs:", Pairs([0,1,2,3,4,5]))
console.log("The number of pairs:", Pairs([5,18,1,3,4,0,7,2, -13]))
console.log("The number of pairs:", Pairs([-10,15,24,3,4,2,11,6]))

//TASK 5

function UpperAndSort(guests){
    let upper = guests.toUpperCase()
    let arr = upper.split(';').map(x => x.replace(/(\w+):(\w+)/,'($2, $1)'))
    let output = arr.sort().join("")
    return output
}

console.log("\nTASK 5 OUTPUT")
console.log(UpperAndSort("Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
console.log(UpperAndSort("Sophia:Chromova;Antony:Uly;Dilya:Nalune;Ramai:Salt;Neramai:Salt;Maya:Nalune;Example:Becauseidk"))