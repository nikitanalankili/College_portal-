import { useEffect, useState } from 'react';
import './Toggle.css'
import Faculty from './Faculty';
import StudentDetails from './StudentDetails';
import Information from './Information';

function Togglebutton() {
    const [isChecked, setChecked] = useState(false)
    function Toggle() {
        setChecked(!isChecked)
        
    }


    return (
        <>

            <div className='line'>
                
                <div className="container">
                <p>STUDENT</p>
                    <input type="checkbox" id="inp" className='in' onChange={Toggle}></input>
                    
                    <label htmlFor="inp" className="button"></label>
                    <p>FACULTY</p>
                </div>
            </div>
            {isChecked ? <Information /> : <StudentDetails />}

        </>
    )
}
export default Togglebutton;