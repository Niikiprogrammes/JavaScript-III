/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function home(){
    this.bar= 'LR';
    return this;

}

console.info(this);
console.info(homeLR());
// Principle 2

// code example for Implicit Binding
const user = {
name: 'Niik',
faveplace: home,
greet(){
 alert('hello, my name is ${this.name}')

}
}
user.greet()
// Principle 3

// code example for New Binding
function User (name, faveplace) {
    this.name= name
    this.faveplace= faveplace
}
const me = new User('Nikki,home')
// Principle 4

// code example for Explicit Binding
function greet (){
    alert('hello, my name is ${this.name}')
    const user = {
        name: 'Nikki',
        Faveplace: 'home'
    }
}
greet.call(user)