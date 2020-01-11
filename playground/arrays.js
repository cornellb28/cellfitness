// memoization

const memoize = func => {
    // create a cache
    const results = {}
    return (...args) => {
        // Create a key for our cache
        const argsKey = JSON.stringify(args);
        // Only execute func if no cache val
        if(!results[argsKey]) {
            results[argsKey] = func(...args)
        }
        return results[argsKey];
    }
}





const inefficientSquare = num => {
    let total = 0;
    for(let i = 0; i < num; i++) {
        for(let j = 0; j < num; j++) {
            total++
        }
    }
    return total;
} 

const start = new Date();
inefficientSquare(4000)
console.log(new Date() - start);