function StudentDetails() {
    return (
        <>
            <div className="stu">
                <h1>STUDENT REPORT</h1>
                <p>YOUR GRADE IS A+</p>

                <table>
                    <thead>
                        <tr>
                            <th>SUBJECT</th>
                            <th>SCORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Maths</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Chemistry</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>Physics</td>
                            <td>95.7</td>
                        </tr>
                        <tr>
                            <td>Biology</td>
                            <td>99</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default StudentDetails