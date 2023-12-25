function solution(arr1, arr2) {
    const arr1Sum = arr1.reduce((arr,cur)=> arr + cur ,0);
    const arr2Sum = arr2.reduce((arr,cur)=> arr + cur ,0);
    const answer = (arr1.length > arr2.length) ? 1 : -1;
    
    if (arr1.length === arr2.length) {
        if (arr1Sum > arr2Sum) {
            return 1;
        } else if (arr2Sum > arr1Sum) {
            return -1;
        } else {
            return 0;
        }
    }

    return answer;
}