

const fizzbuzz = (num) => {

  const divisible = (divider, num) => num % divider == 0
  
  if (typeof num  != 'number'){
    return 'Error, the argument is not a number' 
  }

  if ( divisible(3, num) && divisible(5, num) ) {
    return 'fizzbuzz'
  }

  if (divisible(3, num)){
    return 'fizz'
  }
  if (divisible(5, num)){
    return 'buzz'
  }

  return num

}

// fizzbuzz() 

const print = (num) => {
  for(let i = 1; i <= num; i++){
    console.log(`Number recieved ${i}, ${fizzbuzz(i)}`)
  } 
}

print(20)

module.exports =  (fizzbuzz)