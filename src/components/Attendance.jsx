import { useState } from "react";
import './Attendance.css'
const studentsAttendance = [
    { name: "NIKITA NALANKILLLI", attendance: 85 },
    { name: "NISHITA SHREE", attendance: 95 },
    { name: "NIRMALA", attendance: 60 },
    { name: "NALANKILLI", attendance: 70 },
    { name: "SHEELA", attendance: 75 },
    { name: "JAYANTHI", attendance: 80 },
    { name: "KRISHNAN", attendance: 50 },
    { name: "MITHISH", attendance: 90 }
];

function Attendance(){
    const [atten,setatten] = useState(studentsAttendance)
    return(
        <div className="details">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Attendance</th>
                </tr>
            </thead>
            <tbody>
                {atten.map((student, index) => (
                    <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.attendance}</td>
                    </tr>
                ))}
            </tbody>
        </table></div>
    )
}

export default Attendance