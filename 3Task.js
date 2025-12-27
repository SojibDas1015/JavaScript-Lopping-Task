var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let sentence = '';
for(let word of numbers)
{
    sentence = word + sentence;
}
console.log(sentence);