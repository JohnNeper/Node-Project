const path = require('path');

console.log(path.sep)

const filepath = path.join('/content', 'subfolder', 'test.txt')

console.log(filepath)
const base = path.basename(filepath)
console.log(base)
//console.log(process.env.PATH)

console.log(path.dirname('path'))

const root = path.format({
    root: '/',
    name: 'test',
    ext: '.txt'
});
console.log(root)
console.log(path.isAbsolute('/content/subfolder'))
console.log(path.parse('/content/subfolder/test.txt'))