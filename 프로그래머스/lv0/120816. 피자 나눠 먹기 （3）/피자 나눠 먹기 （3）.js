function solution(slice, n) {
 let pizza = 0;
    pizza = (n%slice) > 0 ? Math.floor(n/slice) + 1 : n/slice;
    return pizza;
}