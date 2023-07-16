function solution(array, height) {
    var answer = array.filter(array => array > height);
    return answer.length;
}