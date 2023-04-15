import express from "express";

const application = express();

const studentsFunction = (request, respond) => {
};

const students = [
    {
        id: 1,
        name: "Hossam",
        city: "Ashmoon",

    },
    {
        id: 2,
        name: "Hatem",
        city: "Shebeen",

    }, {
        id: 3,
        name: "Ragap",
        city: "Menouf",

    },
    {
        id: 4,
        name: "Abu ELhadid",
        city: "Tanta"
    },

];

application.get('/students', (req, res) => {

    let output = '<ul>'
    for (let i = 0; i < students.length; i++){
        const student = students[i]
        output += '<li>' + student.name + '</li>';


        console.log("Hossam Hatem Ragap");

    }
    output += '</ul>'
    res.send(output)

    
})

application.listen(5000)