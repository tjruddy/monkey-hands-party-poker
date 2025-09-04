let queryStr = location.search;
queryStr = queryStr.substring(1, queryStr.length);

while (queryStr.indexOf("+") !== -1) {
  queryStr = queryStr.replace("+", " ");
}

let queryArray = queryStr.split("&");
let values = {};
let equalPos = 0;
let keyVal = "";
let dataVal = "";
for (let i = 0; i < queryArray.length; i++) {
  equalPos = queryArray[i].search("=");
  keyVal = queryArray[i].substring(0, equalPos);
  dataVal = queryArray[i].substring(equalPos + 1);
  dataVal = decodeURIComponent(dataVal);
  values[keyVal] = dataVal;
}

document.querySelector("#first").textContent = `${values["firstname"]}`;
document.querySelector("#first2").textContent = `${values["firstname"]}`;
document.querySelector("#first3").textContent = `${values["firstname"]}`;
document.querySelector("#last").textContent = `${values["lastname"]}`;
document.querySelector("#user").textContent = `${values["username"]}`;
document.querySelector("#phone").textContent = `${values["number"]}`;
document.querySelector("#city").textContent = `${values["location"]}`;
document.querySelector("#email").textContent = `${values["email"]}`;
document.querySelector("#bankroll").textContent = `${values["bankroll"]}`;

console.log(values);

let username = values["username"];
let bankroll = values["bankroll"];