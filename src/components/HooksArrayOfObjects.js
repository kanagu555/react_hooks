import React, { useState} from 'react'


const HooksArrayOfObjects = () => {

    const [studentDetails, setStudentDetails] = useState([{id:1, name:'Kanagu'}])

    const addStudent = () => {
        setStudentDetails(student => [...student, {id:studentDetails.length + 1, name:'Hari'}])
    }

    return (
        <div>
            <button onClick={addStudent}>Add Student Name</button>
            {
                studentDetails.map((e) => <li key={e.id}>{e.name}</li>)
            }
        </div>
    )
}

export default HooksArrayOfObjects