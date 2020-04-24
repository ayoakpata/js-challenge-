//Write a JavaScript function which accepts a name and prints the initials.

//Input: Dwayne Johnson Actor Output: DJA

//Input: Shakira Colombian Singer Output: SCS


// let name = "First";

// const initials = name.split("").charAt(0).toUppercase()


// console.log(initials)   

//let name = 'John Doe ane'

// let initials = function(name) {
//     let parts = name.split(' ').toUpperCase()
//     let initials = ''
//     for (let i = 0; i < parts.length; i++) {
//         if (parts[i].length > 0 && parts[i] !== '') {
//             initials += parts[i][0]
//         }
//     }
//     return initials
// }

// alert(initials(name))

let firstName = 'Jane';
let middleName = 'Jacques'
let lastName = 'Doe'

let initials = firstName.charAt(0) + middleName.charAt(0) + lastName.charAt(0)

console.log(initials);

