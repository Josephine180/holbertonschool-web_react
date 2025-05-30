interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: "Corentin",
  lastName: "Robles",
  age: 60,
  location: "Brest"
};

let student2: Student = {
  firstName: "Arthur",
  lastName: "Delacour",
  age: 20,
  location: "Rennes"
};

let studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
