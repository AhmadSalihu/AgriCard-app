import { Button } from '@material-ui/core'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Livestock = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={8000}>
			<img
				className="d-block w-100"
				src="/cardimages/livestock05.jpg"
				alt="livestock"
			/>
			<Carousel.Caption>
				<h3 className="h1">Livestock</h3>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={7000}>
			<img
				className="d-block w-100"
				src="/cardimages/poultry05.jpg"
				alt="Second slide"
			/>
			<Carousel.Caption>
				<h3 className='h1'>Livestock Management</h3>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
			<img
				className="d-block w-100"
				src='/cardimages/livestock02.jpg'
				alt="Third slide"
			/>
			<Carousel.Caption>
				<h3>Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			</Carousel.Caption>
		</Carousel.Item>
			</Carousel>
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/livestock02.jpg'
              alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Cattle</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>						
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/sheep.jpg'
             alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Sheep</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/livestock04.jpg'
              alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Livestock</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/livestock05.jpg'
            alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Sheep & Dog</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/ramstock.jpg'
             alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Ram</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/goatstock.jpg'
             alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Goats</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
        </a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/rabbit.jpg'
             alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Rabbits</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
        </a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/ostrich.jpg'
             alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Ostrich</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-l	g hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/snailstock.jpg'
              alt="poultry"
            />
             <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Snails</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
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

export default Livestock
