function outerFunc() {
    let x = 'Wild';

   return  function innerFunc() {
        return x;
    }
}

const closure = outerFunc();
console.log(closure());
