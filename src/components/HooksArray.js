import React, { useState } from 'react'


const HooksArray = () => {
    const [studentName, setStudentName] = useState(['Kumar', 'Hari'])
     
    const studentList = ()  => {
        setStudentName((name) => [...name, 'Kanagu', 'Mano'])
    }

    
    return(
        <div>
            <button onClick={studentList}>Student List</button>
           
                {
                studentName.map( (e) => <li key={e}>{e}</li>)         
                }   
            
        </div>
    )
}

export default HooksArray