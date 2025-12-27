const statement = 'I am a hard working person';
const statementS = statement.split(' ');
let reverse = '';
for(let word of statementS){
    reverse = word + ' ' + reverse;
}
console.log(reverse.trim());