// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(Broom){
    const appendCatCopy =[...cats, "Broom"];
    return appendCatCopy;

}
function prependCat(Arnold){
    const PrependCatCopy = ["Arnold", ...cats];
    return PrependCatCopy;
    
}
function removeLastCat(){
    const slicedLast =cats.slice(0,2);
    return slicedLast;
}
function removeFirstCat(){
    const slicedFirst = cats.slice(1);
    return slicedFirst;
}