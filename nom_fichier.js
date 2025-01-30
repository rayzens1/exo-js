const fileName = process.argv[2];

const lastDotIndex = fileName.lastIndexOf(".");

const baseName = fileName.substring(0, lastDotIndex);

console.log(baseName);