import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './page.styles.css'
import { Button } from '@material-ui/core';

const Poultry = ({ data }) => {
	return (
    <>
      	<Carousel>
		<Carousel.Item interval={7000}>
			<img
				className="d-block w-100"
				src="/cardimages/poultry01.jpg"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h3 className="h1 bold">Poultry Management System</h3>
			</Carousel.Caption>
				</Carousel.Item>
					<Carousel.Item interval={4000}>
			<img
				className="d-block w-100"
				src="/cardimages/poultry02.jpg"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h3 className="h1 bold">Poultry</h3>
			</Carousel.Caption>
		</Carousel.Item>
      </Carousel>
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src= '/cardimages/poultry-farming-ducks-01.jpg'
              alt="duck"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Ducks</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Add to Cart</h3>
            </div>
          </div>						
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
					 src='/cardimages/quail1.jpg' 								
              alt="quils"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Quil</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Add to Cart</h3>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/poultry-guinea-fowl.jpg'
             alt="geese"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Geese</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Add to Cart</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/poultry01.jpg'
              alt="chicken breeds"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Chicken breeds</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Add to Cart</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/turkey-breeds.jpg'
            alt="grains"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Turkeys breeds</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Add to Cart</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/images.jpg'
            alt="grains"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Indian Peafowl</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Add to Cart</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/poultry-03.jpg'
             alt="grains"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Egg Layers</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Add to Cart</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/poultry05.jpg'
             alt="grains"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">chickens</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Add to Cart</h3>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-l	g hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
               src='/cardimages/Wild-Turkey.jpg'
              alt="wild-turkey"
            />
             <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Wild Turkey</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Add to Cart</h3>
            </div>
          </div>
        </a>
      </div>
			</div>
			<br />
			<div>
				<Button type='submit' variant="contained"
					color='primary'>Apply for Card{' '} ₦5000</Button>
			</div>
	</>
	)
}

export default Poultry
