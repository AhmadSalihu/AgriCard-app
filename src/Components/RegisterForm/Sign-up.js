import React, { useState } from 'react'
import { Typography, Paper, Stepper, Step, StepLabel } from '@material-ui/core'
import useStyles from './styles'
import Review from './AgriCardTypeForm';
import AddressForm from './RegisterForm';
import agricards from '../agriCardState.component/selectecard.data';


const steps = ['Address Form', 'Review Details'];
const RegisterPage = ({ selection }) => {
	const [activeStep, setActiveStep] = useState(0);
	const [dataForm, setDataForm] = useState({})
	const classes = useStyles();

	  // userDetails = dataForm;
	
	const next = (data) => {
		setDataForm(data)
		nextStep();
	}

	const ConfirmationForm = () => (
		<div>
			Confirmation
		</div>
	);
	
	const  nextStep  = () => setActiveStep ((prevActiveStep) => prevActiveStep + 1) 
	const  backStep  = () => setActiveStep ((prevActiveStep) => prevActiveStep - 1) 

	const Form = () => activeStep === 0
		// ? <PhoneValidation next={next} agricards={agricards}  />
		? <AddressForm next={next} agricards={agricards}  />
		: <Review dataForm={dataForm} backStep={backStep} agricards={agricards} selection={selection} />


 
		return (
		<>
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography varian='h4' align='center'>Farmer RegisterForm</Typography>
					<Stepper activeStep={activeStep} className={classes.stpper}>
						{steps.map((step) => (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? <ConfirmationForm /> : <Form />}
				</Paper>
			</main>
		</>
	)
}

export default RegisterPage
