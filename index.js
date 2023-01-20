// Write your solution in this file!
//test 1
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}
//test 2
function updateEmployeeWithKeyAndValue(obj, streetAddress, value) {
    const newObj = { ...obj };
  
    newObj[streetAddress] = "11 Broadway";
  
    return newObj;
}


//test 3
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
  
    return obj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
  
    return employee
}
//test 4
function deleteFromEmployeeByKey(obj, key){
    const newObj = Object.assign({}, employee)
    delete newObj[key]
    return newObj
}

