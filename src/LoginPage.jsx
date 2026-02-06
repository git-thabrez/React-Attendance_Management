import React,{ useState } from 'react'
import './loginPageStyles.css'
import Modal from './ErrorModal';
function loginPage() {
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('Enter Your Work Email');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    function handleNext(){
        if(!email){
            // setError('No Email Address Found');
            setModalMessage('No Email Address Found');
            setShowModal(true);
            return;
        }
        if(!email.includes("@")){
            // setError('Enter Proper Email Address');
            setModalMessage('Enter Proper Email Address');
            setShowModal(true);
            return;
        }
        setError('');
        console.log('Email submitted:', email);
        setMessage('Email submitted successfully!');
    }

    function handleReset(){
        setEmail('');
        setError('');
        setMessage('Enter Your Work Email');
        console.log('Reset Successfull');
    }

    function closeModal() {
        setShowModal(false);
    }

  return (
    <div className='loginHolder'>
        <div className='logoHolder'>
            <img src="https://binghattiweb.imgix.net/logo.svg" alt="" />
        </div>
        <div className='cardHolder'>
            <div className='topText'>BinGhatti Capture Login</div>
            <div className='contentArea'>
                <div className='emailHead'><i className="fa fa-id-badge"></i> Work Email ID <span className='asterikColor'>*</span></div>
                <input type='email' placeholder='Work Email' className='emailTag' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                {error && <div className="errorMessage">{error}</div>}
            </div>
            <div className='buttonArea'>
                <button className='nextBtn' onClick={handleNext}>Next</button>
                <button className='resetBtn' onClick={handleReset}>Reset</button>
            </div>
            
            {showModal && <Modal message={modalMessage} onClose={closeModal} />}
        </div>
        <div className='bottomText'></div>
    </div>
  )
}

export default loginPage