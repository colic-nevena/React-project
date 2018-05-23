export function getCourses() {              
 return fetch('http://localhost:3000/predmeti')
       .then(response=>response.json())
}




export function getStudents() {              
    return fetch('http://localhost:3000/prijavljeni')
          .then(response=>response.json())
}
   
   
   
   
   
export function getTeachers() {              
    return fetch('http://localhost:3000/nastavnici')
          .then(response=>response.json())
   }
   


export function getStudentByEmail(email) {
    return fetch(`http://localhost:3000/prijavljeni/?email=${email}`)
                .then( response => response.json());
}



export function getCourseByName(ime) {
    return fetch(`http://localhost:3000/predmeti/?ime=${ime}`)
                .then( response => response.json());
}




export function getSelected(id) {
    return fetch(`http://localhost:3000/predmeti/${id}`)
       .then(response => response.json())
}




export function deleteStudent(id) {
    return fetch(`http://localhost:3000/prijavljeni/${id}`,{
        method:"DELETE"
    }).then(response => response.json());
     
}



export function updateCourse(id, data) {
    return fetch(`http://localhost:3000/predmeti/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json,text/plain',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    }).then(res => res.json())
   
}




export function addStudent(data) {
    return fetch('http://localhost:3000/prijavljeni', {
        method: 'POST',
        headers: {
            'Accept': 'application/json,text/plain',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    }).then(res => res.json())
     
}