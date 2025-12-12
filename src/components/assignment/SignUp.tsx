import { useRef, useState } from 'react';

export function SignUp() {
    const [isValid, setValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const validate = (target: HTMLInputElement) => {
        const length = target.value.length;

        if (length < 4) {
            setErrorMessage('* Username is too short! *');
            setValid(false);
        } else if (length > 32) {
            setErrorMessage('* Username is too long! *');
            setValid(false);
        } else {
            setErrorMessage('');
            setValid(true);
        }
    };

    return (
        <div className="card">
            <h1>Username</h1>
            <p>Please enter your desired username that's between 4 and 32 characters</p>
            <input id="username" type="text" onChange={(ev) => validate(ev.target)} />
            <small style={{ color: 'red' }}>{errorMessage}</small>
            <button id="submit" disabled={!isValid}>
                Submit
            </button>
        </div>
    );
}
