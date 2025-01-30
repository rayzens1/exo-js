const fileName = process.argv[2];

const lastDotIndex = fileName.lastIndexOf(".");

console.log(fileName.substring(lastDotIndex + 1));