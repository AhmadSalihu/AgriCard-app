import React from 'react';
// import firebase, { signInWithGoogle } from '../../firebase'
// import CustomButton from '../CustomButton';
// import SignIn from '../sign-in.component/sign-in';
 import firebase from '../../firebase'

class PhoneValidation extends React.Component {	
	constructor(props) {
	super(props)
		this.state = {

		}
	}

	setUpRecaptcha = () => {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
		'size': 'invisible',
		'callback': (response) => {
			// reCAPTCHA solved, allow signInWithPhoneNumber.
		this.onSignInSubmit();
		}
		}
		);	
		};

		onSignInSubmit = (event) => {
		event.preventDefault()
		this.setUpRecaptcha()
			const phoneNumber = document.getElementById('number').value;
		const appVerifier = window.recaptchaVerifier;
		firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
			window.confirmationResult = confirmationResult;
			const code = window.prompt("Enter Code");
		confirmationResult.confirm(code).then((result) => {
			// User signed in successfully.
			const user = result.user;
			console.log(result.user.phoneNumber)
			console.log(user, "Is Signed is successfully")
			var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
			// ...
	firebase.auth().signInWithCredential(credential);
		}).catch((error) => {
			// User couldn't sign in (bad result code?)
			// ...
		});
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
	}

	

	render() {
		return (
			<>
				<div className="App">
					<div className="Container">
						<div className="row justify-content-center align-items-center">
							<div className="col-sm-6 text-left">
								<h2>Login with PhoneNo</h2>
								<form onSubmit={this.onSignInSubmit}>
									<div id="recaptcha-container"></div>
									<div className="form-group">
										{/* <label>Phone Number</label> */}
										<input placeholder="start with country code" style={{width: '20vw'}} id="number" className="form-control" />
									</div>
									<div style={{width: '20vw', display: 'flex', justifyContent: 'space-between'}}>
									<button type="submit" className="btn btn-primary">
										VERIFY
									</button>
									</div>
								</form>
								   {/* <CustomButton className="btn btn-primary" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton> */}
							</div>
						</div>
						{/* <SignIn /> */}
					</div>
			</div>

		</>
	)
}
}

export default PhoneValidation;