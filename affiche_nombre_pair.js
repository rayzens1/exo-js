const numbersList = [44, 14, 23, 22, 43, 69, 23, 48, 962, 47];

const finalList = [];

for(let i = 0; i<numbersList.length; i++) {
    const element = numbersList[i];

    if(element>237) break;

    if((element%2) == 0) {
        finalList.shift(element);
    }
}

console.log(finalList);