const romanos = {
    i : 1,
    v : 5,
    x : 10,
    l : 50,
    c : 100,
    d : 500,
    m : 1000
}

function romanToDecimal(numbers) {
    numbers = numbers.toLowerCase().split("")
    let total = 0;
    let tamanho = numbers.length - 1;
    
    for (key in numbers){
        if(numbers[key] >= numbers[key -1]){
            total += parseInt(romanos[numbers[key]])
        }

    }
    console.log(total)
}
romanToDecimal("XIV")