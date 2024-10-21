import './style.css'
import Information from './Information'
function Faculty (){
    return(
        <>
            <div className='fac'>
                <h1>FACULTY PORTAL</h1>
                {/* <p>ENTER THE STUDENT DETAILS</p>
                <p>Roll number : <input type="text" ></input></p>
                <p>Subject 1 : <input type="text" ></input></p>
                <p>Subject 2 : <input type="text" ></input></p>
                <p>Subject 3 : <input type="text" ></input></p>
                <p>Subject 4 : <input type="text" ></input></p>
                <p>STUDENT GRADE : <input type="text" ></input></p>
                <button>SUBMIT</button> */}
                <Information></Information>
            </div>
        </>
    )
}
export default Faculty