import './assets/Footer.css';
const Footer=()=>{
    return(
        <div className='Footer'>
            <div className="form">
            <label for="name">Name:</label>
            <input type='text' name='name' placeholder='Enter Name'/>
            
            <label for="name">Department:</label>
            <input type='text' name='name' placeholder='Enter Department'/>
            
            <label for="name">Section:</label>
            <input type='text' name='name' placeholder='Enter Section'/>
            
            <label for="name">CGPA:</label>
            <input type='text' name='name' placeholder='Enter CGPA'/>
            </div>
        </div>
    )
}

export default Footer;