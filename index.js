// Code your solution here
function findMatching(drivers,str){
    let a = drivers.filter(n => {
        return  n === str || str.toLowerCase() === n
    })
    return a
}

function fuzzyMatch(drivers,str){
    let a = drivers.filter(n => {
        return str.substring(0,2) === n.substring(0,2)
    })
    return a
}

function matchName(drivers,str){
    let a = drivers.filter(n => {
        return n.name === str
    })
    return a
}