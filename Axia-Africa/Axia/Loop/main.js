// Standard Loop
// Forward Loop, Backward Loop
// For IN
// For OF
// while
// Do While

const FullName = [
    "Obilor Ugochukwu",
    "Kelly Victor",
    "Nlemadim Pascal",
    "Noland Obilor ",
    "Favour Nlemadim",
    "Destiny",
    "Emel Sewimg",
    "Beauty Donald"   

]

const PrintName = (FullName) => {
    console.log (`My are names are: ${FullName}`)

}

// Fordward Loop
console.log("This is Fordward Loop")

for(let Index = 0; Index < FullName.length; Index++){
PrintName(FullName[Index])

}
console.log("This is Backward Loop")
// Backward Loop

for(let Index = FullName.length - 1; Index > 0; Index--){
PrintName(FullName[Index])

}

// For Of
for(const value of FullName){

    console.log(`For of: ${value}`)

}

// For In

const Obj = {

   Name: "Nlemadim Pascal",
   Dept: "  Agricultural Economics",
   RegNo: "20191171931", 
   YearofEntry: "2019",

}

for(const key in Obj){

console.log(`value of for In Loop: ${Obj[key]} with key: ${key}`)
}

// while Loop
// Foor Arrays

//FullName = 0;
let i=0
while (i < FullName.length){
console.log(FullName[i])
i++
}

//  For Objects
const Obj2 = {
   Name: "Nlemadim Pascal",
   Dept: "Agricultural Economics",
   RegNo: "20191171931",
   YearofEntry: "2019",
};

const keys = Object.keys(Obj2);

let iobj = 0;


while(iobj < keys.length){
    //console.log(`key values ${key}`)
    const key = keys[iobj];
    console.log(`${key}: ${Obj2[key]}`);
    iobj++;
}


// Do While Loop
// For Array Loop
let Index = 0
do{  
Index < FullName.length
console.log(FullName)
Index++
}while(Index===0) 

    //do while Loop
    // for Object
let idx = 0;
//keyx = Object.keys(Obj2)
do{

    idx < keys.length
    const key = keys[idx] 
    console.log(`${key}: ${Obj2[key]}`)
    idx++
}while(idx===0)