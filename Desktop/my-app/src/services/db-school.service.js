export function getCourses() {
    //console.log("usao u get courses, ovde zove api");
    /*const url = "http://localhost:3000/predmeti/";
    return request
           .get(url)
           .then((data)=>{
               return JSON.parse(data.text);
           })*/
           
 return fetch('http://localhost:3000/predmeti')
       .then(response=>response.json())
}




export function getSelected(id) {
    return fetch(`http://localhost:3000/predmeti/${id}`)
       .then(response => response.json())
}




export function deleteStudent(id) {
    return fetch(`http://localhost:3000/predmeti/${id}`,{
        method:"DELETE"
    }).then(response => response.json())
    .then(res => console.log("Resolve: " + res))
    .catch(err => console.log("Error: " + err));    
}





export function updateCourse(id, data) {
    return fetch(`http://localhost:3000/kursevi/${id}`, {
        method: 'put',
        headers: {
            'Accept': 'application/json,text/plain',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => console.log("Resolve: " + res))
    .catch(err => console.log("Error: " + err)); 
}




export function addStudent(data) {
    return fetch('http://localhost:3000/prijavljeni', {
        method: 'post',
        headers: {
            'Accept': 'application/json,text/plain',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => console.log("Resolve: " + res))
    .catch(err => console.log("Error: " + err)); 
}