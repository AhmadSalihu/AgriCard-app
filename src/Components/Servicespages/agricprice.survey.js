import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const AgriCardPriceSurvey = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={5000}>
			<img
				className="d-block w-100"
				src="/cardimages/entrep01.jpeg"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h3 className="h1">Agricultural Entrepreneurship</h3>
				<p className="h1">With AgriCard Bussiness For Nigerian's Farmers</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
			<img
				className="d-block w-100"
				src="/cardimages/entrep.jpg"
				alt="Second slide"
			/>
			<Carousel.Caption>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
		</Carousel.Item>
		</Carousel>
		</>
	)
}

export default AgriCardPriceSurvey
