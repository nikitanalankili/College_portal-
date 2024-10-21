import React, { useState, useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { sortAscending, sortDescending } from "../reducer/studentSlice";
const studentDetails = [
    { name: "NIKITA NALANKILLLI", rollno: "21ECR132", total_mark: 59, cgpa: 5.9 },
    { name: "NISHITA SHREE", rollno: "21ECR130", total_mark: 98, cgpa: 9.8 },
    { name: "NIRMALA", rollno: "21ECR131", total_mark: 28, cgpa: 2.8 },
    { name: "NALANKILLI", rollno: "21ECR138", total_mark: 48, cgpa: 4.8 },
    { name: "SHEELA", rollno: "21ECR133", total_mark: 35, cgpa: 3.5 },
    { name: "JAYANTHI", rollno: "21ECR134", total_mark: 61, cgpa: 6.1 },
    { name: "KRISHNAN", rollno: "21ECR135", total_mark: 24, cgpa: 2.4 },
    { name: "MITHISH", rollno: "21ECR136", total_mark: 79, cgpa: 7.9 }
];
const Information = () => {
    
    //const dispatch = useDispatch();
    //const studentDetails = useSelector(state => state.students.studentDetails);
    const [data, setData] = useState(studentDetails);
    const [search, setSearch] = useState("");
    const [original, setOriginal] = useState(studentDetails);
    const [isEditing, setIsEditing] = useState(false);
    // useEffect(() => {
    //     setData(studentDetails);
    //     setOriginal(studentDetails);
    // }, [studentDetails]);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = () => {
        const filtered = original.filter((student) => student.rollno === search);
        setData(filtered);
    };

    // const upsort = () => {
    //     dispatch(sortAscending());
    // };

    // const downsort = () => {
    //     dispatch(sortDescending());
    // };
    const upsort = () => {
        const sorted = [...original].sort((a, b) => b.cgpa - a.cgpa);
        setData(sorted);
    };

    const downsort = () => {
        const sorted = [...original].sort((a, b) => a.cgpa - b.cgpa);
        setData(sorted);
    };


    const handleDel = (rollno) => {
        const filtered = original.filter((student) => student.rollno !== rollno);
        setOriginal(filtered);
        setData(filtered);
    };

    useEffect(() => {
        if (search === "") setData(original);
    }, [search, original]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    placeholder="ENTER ROLL NUMBER"
                    value={search}
                    onChange={handleSearch}
                    className="search-input"
                />
                <button onClick={handleSubmit} className="search-button">Search</button>
                <button onClick={upsort} className="top">Top-Bottom</button>
                <button onClick={downsort} className="bottom">Bottom-Top</button>
            </div>

            <div className="details">
                {isEditing ? (
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Roll Number" />
                        <input type="text" placeholder="Total Marks" />
                        <input type="text" placeholder="CGPA" />
                        <button type="submit">Save</button>
                    </form>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Roll Number</th>
                                <th>Total Marks</th>
                                <th>CGPA</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.rollno}</td>
                                    <td>{student.total_mark}</td>
                                    <td>{student.cgpa}</td>
                                    <td>
                                        <button className="top" onClick={() => handleDel(student.rollno)}>Delete</button>
                                        <button className="top" onClick={handleEdit}>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Information;
