const data = [
    {name: 'Bichael', age: 37},
    {name: 'Sammy', age: 29},
    {name: 'Arthur', age: 21},
    {name: 'Alexandr', age: 42},
    {name: 'Jeffrey', age: 26},
    {name: 'Aominick', age: 37},
];

function sortObjects(data) {
    debugger
   return data.sort((a,b) => {
      if(a.age === b.age) {
        return -1;
      } else {
         return a.age - b.age;
      }
   });
};
console.log(sortObjects(data));
