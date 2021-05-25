
export default fib = (n, k) => {
    if(n === 1 || n === 2){
        return 1;
    }

    return fib(n - 1, k) + k*fib(n -2, k);
}

console.log(fib(36, 3));