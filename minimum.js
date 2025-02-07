export function minTable(numbers) {
    let minNumber = numbers[0];
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i]<minNumber) {
            minNumber=numbers[i];
        }
    }
    return(minNumber);
}