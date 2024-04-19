// Part 1
const employees = [
      {"name":"Sam", "department":"Tech", "designation":"Manager", "salary":40000, "raise":true},
      {"name":"Mary", "department":"Finance", "designation":"Trainee", "salary":18500, "raise":true},
      {"name":"Bill", "department":"HR", "designation":"Executive", "salary":21200, "raise":false}
];
console.log(employees);

// Part 2
const company = {"companyName":"Tech Stars", "website":"www.techstars.site", "employees":employees};
console.log(company);

// Part 3
company["employees"].push({"name":"Anna", "department":"Tech", "designation":"Executive", "salary":25600, "raise":false});
console.log(company["employees"]);

// Part 4
const salarySum = company["employees"].reduce((sum, element) => sum + element["salary"], 0);
console.log(salarySum);

// Part 5
function salaryRaise() {
    for(const element of employees) {
        if(element["raise"]) {
            element["salary"] *= 1.1;
            element["raise"] = false;
        }
    }
}
salaryRaise();
console.log(employees[0]);

// Part 6
const wfhe = ["Anna", "Sam"];
function workFromHome() {
    for(const element of employees) {
        if(wfhe.includes(element["name"])) {
            element["wfh"] = true
        } else {
            element["wfh"] = false
        }
    }
}
workFromHome();
console.log(employees);