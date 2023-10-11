function fibonacci(num) {
    const result = [0, 1]

    for ( let i = 2; i <= num; i++) {
        result.push(result[i-1] + result[i - 2])
    }

    return result[num]
}

function fibonacciShort(num) {
    if (num === 0) {
        return 0
    }
    let a = 1
    let b = 1

    for (let i = 3; i <= num; i++) {
        let c = a + b
        a = b 
        b = c
        // [a, b] = [b, a + b]
    }

    return b
}

function fibonacciRecusrsion(num) {
    if (num < 2) {
        return num
    }

    return fibonacciRecusrsion(num - 1) + fibonacciRecusrsion(num - 2)
}

console.log(fibonacciRecusrsion(6))


