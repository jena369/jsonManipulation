
// resume data in JSON Format:

var myJSON={
    "Title": "DevOps Engineer",
    "Name": "Jenarthanan",
    "Mobile_No": "94XXXXXXX20",
    "Email": "jexxxxxxxxxxx9@gmail.com",
    "Education": "Masters in Electronics and Communicaton",
    "Passed Out Year": "2024",
    "CGPA": 7.95,
    "Skill1": "CICD Automation",
    "Skill2": "JavaScript",
    "Skill3": "MS Office",
    "Skill4": "Communication Skill",
    "Skill5": "Container Orchestration",
    "Known Language1": "English",
    "Known Language3": "Malayalam",
    "Known Language2": "Tamil",
    "Hobbies1": "Sketching",
    "Hobbies2": "Trading"
    }

//#######################################################################################################################

// //Using for loop:

// Obj_Keys=Object.keys(myJSON)
// Object_Entries=Object.entries(myJSON)
// for(var i=0;i<Obj_Keys.length;i++){
//  console.log(Obj_Keys[i]," : ",Object_Entries[i])
// }

//#######################################################################################################################

// //Using for-of loop:

// Obj_Keys=Object.keys(myJSON)
// Object_Entries=Object.entries(myJSON)
// for (const [key, value] of Object.entries(myJSON)){
//  console.log(`${key} : ${value}`);
// }

//#######################################################################################################################

// //Using foreach loop:

// Object.entries(myJSON).forEach(([key, value]) => {
//  console.log(`${key} : ${value}`)
// })

//#######################################################################################################################

//Using for in loop:

for (const key in myJSON) {
    console.log(`${key} : ${myJSON[key]}`)
}   