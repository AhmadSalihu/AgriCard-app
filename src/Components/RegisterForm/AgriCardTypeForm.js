import { Button, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React from 'react'



const AgriCardType = ({ backStep, dataForm }) => {

	return (
		<>	<Typography style={{ padding: '10px 0', fontWeight: 'bold'}} variant='h6' gutterBottom>Review</Typography>
			<List disablePadding>
				<ListItem style={{ padding: '10px 0', fontWeight: 'bold' }}>
						<ListItemText primary={dataForm.FirstName} />
					<Typography variant='body2' >{dataForm.lastName}</Typography>
				</ListItem>
				<ListItem style={{ padding: '10px 0', fontWeight: 'bold' }}>
						<ListItemText primary={dataForm.email} />
					<Typography variant='body2'>{dataForm.phoneNo}</Typography>
				</ListItem>
				<ListItem style={{ padding: '10px 0', fontWeight: 'bold' }}>
						<ListItemText primary={dataForm.selectState} />
					<Typography variant='body2'>{dataForm.selectLocalGovt}</Typography>
				</ListItem>
				<ListItem style={{ padding: '10px 0', fontWeight: 'bold' }}>
						<ListItemText primary={dataForm.agricServiceType} />
					<Typography variant='body2'>₦{dataForm.price}</Typography>
				</ListItem>
			</List>	
				<Divider />
			<Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>Payment Method</Typography>
			
			<br />
			<br />
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Button variant='outlined' color='primary' onClick={backStep}>Back</Button>
			<a href="https://paystack.com/pay/agricard_payment">
			<Button variant='contained' color='primary'>pay NGN{dataForm.price}</Button>
			</a>
			</div>
		</>
	)
}

export default AgriCardType
