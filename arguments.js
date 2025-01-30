const args = process.argv.slice(1);

const fileName = args[0];
const argsLength = args.length;
let argsLeft = process.argv.slice(2);


console.log(`Fichier: ${fileName}\nNombre d'argument: ${argsLength}\nLe reste des arguments: ${argsLeft}`);