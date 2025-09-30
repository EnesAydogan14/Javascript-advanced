var person = {
    name: "Jan Jansen",
    age: 30,
    birthDate: "1994-01-15",
    gender: "Male",
    alive: true,
    hobbies: ["Football", "Reading", "Cooking", "Cycling"],

    changeName: function(newName) {
        this.name = newName;
        showPerson();
    },

    changeAliveStatus: function(status) {
        this.alive = status;
        showPerson();
    },

    addHobby: function(hobby) {
        this.hobbies.push(hobby);
        showPerson();
    }
};

function showPerson() {
    var outputDiv = document.querySelector('.output');
    outputDiv.innerHTML = `
        <p>Name: ${person.name}</p>
        <p>Age: ${person.age}</p>
        <p>Birth date: ${person.birthDate}</p>
        <p>Gender: ${person.gender}</p>
        <p>Alive: ${person.alive ? "Yes" : "No"}</p>
        <p>Hobbies: ${person.hobbies.join(', ')}</p>
    `;
}

document.addEventListener('DOMContentLoaded', showPerson);

