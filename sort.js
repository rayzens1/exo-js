const numbers = [ 386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345, 399,
    162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217, 815, 67, 104, 58, 512,
    24, 892, 894, 767, 553, 81, 379, 843, 831, 445, 742, 717, 958, 743, 527 ];

function swap(tab, indexA, indexB) {
    [tab[indexA], tab[indexB]] = [tab[indexB], tab[indexA]];
}

for(let i = 0; i < numbers.length; i++) {
    let minIndex = i
    for(let j=i+1; j<numbers.length; j++) {
        if(numbers[j]<numbers[minIndex]) {
            minIndex=j;
        }
    }
    swap(numbers, i, minIndex)
}

console.log("Tableau trié :", numbers);