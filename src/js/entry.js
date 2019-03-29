import hello from './hello';
import world from './world';

document.getElementById('demo').innerHTML = `${hello}, ${world}!`;


// arrow
var word = (a) => {
  console.log(`arrow func test+ ${a}`);
}
word('aa');
