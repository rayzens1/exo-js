let numbers = [ 386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345, 399, 162,
     758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217, 815, 67, 104, 58, 512, 24, 892,
     894, 767, 553, 81, 379, 843, 831, 445, 742, 717, 958,743, 527 ]

function swap(tab,indice1,indice2){
    [tab[indice1],tab[indice2]] = [tab[indice2],tab[indice1]];
}

if(!(numbers.length % 2)) { // Pair
    let reverseI = numbers.length-1; // On divise par 2 pour tomber au milieu
    for(i=0; i<(numbers.length/2); i++) {
        swap(numbers, i, reverseI);
        reverseI--;
    }
} else { // Inpair
    let reverseI = numbers.length-1;
    for(i=0; i<((numbers.length-1)/2); i++) { // on enlève juste 1 a la longueur du tableau avant de diviser par 2
        swap(numbers, i, reverseI);
        reverseI--;
    }
}

console.log(numbers)