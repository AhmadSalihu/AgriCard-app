import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './agricard.styles.css';

const Acquatic = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={7000}>
			<img
				className="d-block w-100"
				src="/cardimages/fish01.jpg"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h3 className="h1">Acquatics Fish</h3>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
			<img
				className="d-block w-100"
				src="/cardimages/fish02.jpg"
				alt="Second slide"
			/>
			<Carousel.Caption>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={5000}> 
			<img
				className="d-block w-100"
				src="/cardimages/fish0.jpg"
				alt="Third slide"
			/>
			<Carousel.Caption>
				<h3 className="h1">Acquatics</h3>
				<p className="h1">Acquatic Fish</p>
			</Carousel.Caption>
		</Carousel.Item>
			</Carousel>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/cardimages/fish01.jpg"
              alt="aquatics"
            />
            <div className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
              <p className="text-sm font-medium tracking-wide text-white">
                Aquatic Fish
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/cardimages/acquafish0.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-1 py- bg-black bg-opacity-25">
              <p className="text-sm font-medium tracking-wide text-white">
                Aquatic Fish
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/cardimages/fish02.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
            Aquatic Fish
              </p>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/cardimages/acquafish02.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
            Aquatic Fish
              </p>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/cardimages/fish0.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
            Aquatic Fish
              </p>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/cardimages/acquafish03.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
            Aquatic Fish
              </p>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/cardimages/acquafish01.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
            Aquatic Fish
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/cardimages/acquafish03.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide  text-white">
                 Aquatic Fish
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
				{/* <div className="row">
					<div className="column">
					<div className="card">
						<img src='/cardimages/livestock01.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3 classname="title">Cows</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div className="column">
					<div className="card">
						<img src='/cardimages/fish01.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3 classname="title">Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div className="column">
					<div className="card">
						<img src='/cardimages/fish02.jpg' alt='' />
						<div className="tb flex justify-between">
					<h3 classname="title">Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div className="column">
					<div className="card">
						<img src='/cardimages/fish01.jpg' alt='' />
						<div className="tb flex justify-between">
					<h3 classname="title">Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div className="column">
					<div className="card">
						<img src='/cardimages/acquafish03.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3 classname="title">Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div className="column">
					<div className="card">
						<img src='/cardimages/acquafish01.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div className="column">
					<div className="card">
						<img src='/cardimages/acquafish0.jpg' alt='' />
						<div className="tb flex justify-between">
					<h3 classname="title">Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div className="column">
					<div className="card">
						<img src='/cardimages/acquafish.jpg' alt='' />
						<div className="tb flex justify-between">
					<h3 classname="title">Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
			</div> */}
		</>
	)
}

export default Acquatic
