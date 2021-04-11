import React, { useState, useEffect } from 'react'
import { Grid, InputLabel, MenuItem, Select, Button, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './customTextField'
import { Link } from 'react-router-dom'
import States from '../../Constants/States';
import farmertype from '../farmertype'
import Types from '../Servicespages/servicesCategory'

const AddressForm = ({ next, agricards }) => {
	const [selectStates, setSelectStates] = useState([]);
	const [selectState, setSelectState] = useState('');
	const [selectLocalGovts, setSelectLocalGovts] = useState([]);
	const [selectLocalGovt, setSelectLocalGovt] = useState('');
	const [locals, setLocals] = useState([]);
	// const [selection, setSelection] = useState([])
	const [price, setPrice] = useState('')
	const [prices, setPrices] = useState({});
	const [farmerTypes, setFarmerTypes] = useState([]);
	const [farmerType, setFarmerType] = useState('');
	const [agricServiceTypes, setAgricServiceTypes] = useState([]);
	const [agricServiceType, setAgricServiceType] = useState('');
	const [selectServiceTypes, setSelectServiceTypes] = useState([]);
	const [selectServiceType, setSelectServiceType] = useState('');
	const [selectServiceCategories, setSelectServiceCategories] = useState([]);
	const [selectServiceCategory, setSelectServiceCategory] = useState('');
	const [categories, setCategories] = useState([]);


	const methods = useForm();


	let Category = {}		

	const fetchFarmerType = () => {
		setFarmerTypes(farmertype);
		setFarmerType(farmertype[0].name)
	}
	const fetchAgricServiceType = () => {
		setAgricServiceTypes(agricards)
		setAgricServiceType(agricards[0].name)
 }

	const fetchServiceTypes = () => {
		const service = Types();
		const types = [];
		service.map(service => {
			Category[service.type.name] = service.type.subType;
			return (types.push(service.type))
		})

		setCategories(Category)
		setSelectServiceTypes(types);
		setSelectServiceType(types[0].name);
		setSelectServiceCategories(Category[types[0].name]);
		setSelectServiceCategory(Category[types[0].name][0].name);
		setSelectServiceCategory(Category[types[0].name][0].name);
	}
	
	const fetchServiceCategory = (subType) => {
		setSelectServiceCategories(categories[subType]);
		setSelectServiceCategory(categories[subType][0].name)
		
	}
	
	let Locals = {}		

	const fetchStates = () => {
		const data = States();
		const states = [];
		data.map(data => {
			Locals[data.state.name] = data.state.locals;
			return (states.push(data.state))
		})
		setLocals(Locals)
		setSelectStates(states);
		setSelectState(states[0].name);
		setSelectLocalGovts(Locals[states[0].name]);
		setSelectLocalGovt(Locals[states[0].name][0].name);
		setSelectLocalGovt(Locals[states[0].name][0].name);

	}
	
	const fetchLocalGovt = (state) => {
		setSelectLocalGovts(locals[state]);
		setSelectLocalGovt(locals[state][0].name)
		
	}
	
	useEffect(() => {
		fetchFarmerType();
		fetchAgricServiceType();
		fetchServiceTypes();
		fetchStates();
		let cards = {}
		agricards.map(card => { return (cards[card.name] = card.price) })
		setPrices(cards)
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	

	return (
		<>
			<Typography variant='h6' gutterBottom> Farmer Register Form</Typography>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit((data) => next({ ...data, selectState, selectServiceCategory, agricServiceType, selectLocalGovt, price, selectServiceType, farmerType }))}>
					<Grid container spacing={3}>
					<FormInput required name="FirstName" label='First name' />
					<FormInput required name="lastName" label='Last name' />
					<FormInput  name="email" label='Email / optional' />
					<FormInput required name="phoneNo" label='Enter Mobile No' />
					<FormInput name="address" label='Farm location / optional' />
						<Grid item xs={12} sm={6}>
							<InputLabel>Farmer Type</InputLabel>
							<Select value={farmerType} fullWidth onChange={(e) => { setFarmerType(e.target.value) }}>
								{farmerTypes.map((type) => (			
								<MenuItem key={type.id} value={type.name} >
										{type.name}
								</MenuItem>
									))}
							</Select>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputLabel>Select Agric Type</InputLabel>
							<Select value={selectServiceType} fullWidth onChange={(e) => { setSelectServiceType(e.target.value); fetchServiceCategory(e.target.value)}}>
								{selectServiceTypes.map((type) => (			
								<MenuItem key={type.id} value={type.name} categories={type.categories}>
										{type.name}
								</MenuItem>
									))}
							</Select>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputLabel>Select Service Type</InputLabel>
							<Select value={selectServiceCategory} fullWidth onChange={(e) => setSelectServiceCategory(e.target.value)}>
									{selectServiceCategories.map((category) => (
								<MenuItem key={category.id} value={category.name}>
										{category.name}
								</MenuItem>
									))}
							</Select>
						</Grid>
							<Grid item xs={12} sm={6}>
							<InputLabel>Type of Agricard</InputLabel>
							<Select required value={agricServiceType} fullWidth onChange={(e) => { setAgricServiceType(e.target.value); setPrice(prices[e.target.value]) }}>
									{agricServiceTypes.map((card) => (
								<MenuItem key={card.id} value={card.name}>
										{card.name}
								</MenuItem>
									))}
							</Select>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputLabel>Select Sate</InputLabel>
							<Select value={selectState} fullWidth onChange={(e) => { setSelectState(e.target.value); fetchLocalGovt(e.target.value)}}>
								{selectStates.map((state) => (			
								<MenuItem key={state.id} value={state.name} locals={state.locals}>
										{state.name}
								</MenuItem>
									))}
							</Select>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputLabel>Select LGA</InputLabel>
							<Select value={selectLocalGovt} fullWidth onChange={(e) => setSelectLocalGovt(e.target.value)}>
									{selectLocalGovts.map((local) => (
								<MenuItem key={local.id} value={local.name}>
										{local.name}
								</MenuItem>
									))}
							</Select>
						</Grid>
						<FormInput name="district" label='District / Ward' />
					</Grid>
					<br />
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Button component={Link} to ='/' variant="outlined">Back To Home</Button>
						<Button type='submit' variant="contained" color='primary'>NEXT</Button>
					</div>
				</form>
			</FormProvider>
		</>
	)
}

export default AddressForm
