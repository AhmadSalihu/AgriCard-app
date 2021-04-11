import { Button } from '@material-ui/core'
import React from 'react'
import { List } from 'semantic-ui-react';
import Carousel from 'react-bootstrap/Carousel';
import 'semantic-ui-css/semantic.min.css';
import './agricard.styles.css'

const AgricLoan = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	}
	return (
		<>
			<Carousel>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src="https://netstorage-legit.akamaized.net/images/2a7217cbde1af5c0.jpg?imwidth=900" alt='' />
				</Carousel.Item>
			</Carousel>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
					<div>
						<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
							AgriCard Loan
          </p>
					</div>
					<h2 className="max-w-lg mb-6 font-sans text-deep-purple-accent-400 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
						<span className="relative inline-block">
							<svg
								viewBox="0 0 52 24"
								fill="currentColor"
								className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
							>
								<defs>
									<pattern
										id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
										x="0"
										y="0"
										width=".135"
										height=".30"
									>
										<circle cx="1" cy="1" r=".7" />
									</pattern>
								</defs>
								<rect
									fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
									width="52"
									height="24"
								/>
							</svg>
							<span className="relative">The</span>
						</span>{' '}
          only, Solution that don't accept limitedness
        </h2>
					<p className="text-base text-gray-700 md:text-lg font-bold">
						AgriCard Loan Managment Sysytems is geared towards aiding farmers to
						boost farm products and promote Agriculture bussiness within Africa and the world atlerge.
        </p>
				</div>
				<div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
					<div className="flex flex-col justify-center">
						<div className="flex">
							<div className="mr-4">
								<div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
									<svg
										className="w-8 h-8 text-deep-purple-accent-400"
										stroke="currentColor"
										viewBox="0 0 52 52"
									>
										<polygon
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
											fill="none"
											points="29 13 14 29 25 29 23 39 38 23 27 23"
										/>
									</svg>
								</div>
							</div>
							<div>
								<h6 className="mb-2 font-bold leading-5">
									Features:
              </h6>
								<p className="text-deep-purple-accent-400 font-bold">
									Maximum obligor limit is N2 billion for medium and large scale private sector enterprises
								<ul>
										<li>Loan Volume ranging from %0 upto to a maximum of 1 billion for a single obligor</li>
									</ul>
								</p>
								<hr className="w-full my-6 border-gray-300" />
							</div>
						</div>
						<div className="flex">
							<div className="mr-4">
								<div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
									<svg
										className="w-8 h-8 text-deep-purple-accent-400"
										stroke="currentColor"
										viewBox="0 0 52 52"
									>
										<polygon
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
											fill="none"
											points="29 13 14 29 25 29 23 39 38 23 27 23"
										/>
									</svg>
								</div>
							</div>
							<div>
								<h6 className="mb-2 font-bold leading-5">
									Objectives:
              </h6>
								<p className="text-deep-purple-accent-400 font-bold">
									The scheme aims at providing adequate and timely credit for the comprehensive credit requirements of the farmers under single window with flexible and simplified procedures. The schemes aims to provide the farmers both Short term as well as Medium term loan requirements and a reasonable component of consumption needs.
              </p>
								<hr className="w-full my-6 border-gray-300" />
							</div>
						</div>
						<div className="flex">
							<div className="mr-4">
								<div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
									<svg
										className="w-8 h-8 text-deep-purple-accent-400"
										stroke="currentColor"
										viewBox="0 0 52 52"
									>
										<polygon
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
											fill="none"
											points="29 13 14 29 25 29 23 39 38 23 27 23"
										/>
									</svg>
								</div>
							</div>
							<div>
								<h6 className="mb-2 font-bold leading-5">
									Nature of financial accomodation:
              </h6>
								<p className="text-deep-purple-accent-400 font-bold">
									The credit facility extended under the scheme will be in the nature of term loan for Agriculture/ Allied activity loans and revolving credit for short term loans & consumption credit.
              </p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-5">
						<img
							className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
							src="/cardimages/agricard_ansatt.jpg"
							alt=""
						/>
						<img
							className="object-cover w-full h-48 rounded shadow-lg"
							src="/cardimages/agricard_firma.jpg"
							alt=""
						/>
						<img
							className="object-cover w-full h-48 rounded shadow-lg"
							src="/cardimages/agricard_privat.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="grid gap-5 row-gap-8 lg:grid-cols-2">
					<div className="flex flex-col justify-center">
						<div className="max-w-xl mb-6">
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
								Our Product and Services
              <br className="hidden md:block" />
              Tailored for you.{' '}
								<span className="relative px-1">
									<div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
									<span className="relative inline-block text-deep-purple-accent-400">
										To Boost Productivity
                </span>
								</span>
							</h2>
							<p className="text-base text-gray-700 md:text-lg">
								Developed to finance Agricultural production and Agro-allied activities.
            </p>
						</div>
						<div className="grid gap-5 row-gap-8 sm:grid-cols-2">
							<div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
								<div className="h-full p-5 border border-l-0 rounded-r">
									<h6 className="mb-2 font-bold leading-5 text-deep-purple-accent-400">
											Large Credit Product
                </h6>
									<p className="text-sm text-gray-900 font-bold">
										Developed to finance large agricultural production and agro allied activities. Loan volume ranging from above 50 million to a maximum of 1 billion for a single obligor.
							{/* Developed to encourage Nigerian Youths to key into agriculture and take it as an investment or as a business */}
                </p>
								</div>
							</div>
							<div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
								<div className="h-full p-5 border border-l-0 rounded-r">
									<h6 className="mb-2 font-bold leading-5 text-deep-purple-accent-400">
										Direct Credit products
                </h6>
									<p className="text-sm font-bold text-gray-900">
									Direct Credit Product (Small and Medium Enterprises).Developed to finance agricultural productions and agro-allied activities. Loan volume ranges from above N250,000.00.
                </p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img
							className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
							src="/cardimages/agricardloan.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
			<List className="">
				<p className="h1">AgriCard Loan is Facilitated through the following process</p>
				<List.Item>
					<List.Icon name='marker' />
					<List.Content>
						<List.Header as='a'>	Agricultural Production Loans for inputs like seeds, fertilizers, pesticides,etc. Production Loans also include working capital finance to meet expenses of various nature attributable to farming.</List.Header>
						<br />
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name='marker' />
					<List.Content>
						<List.Header as='a'>Farm Development Finance for improvement of agricultural land, orchards, nurseries, agro-allied industries, bakeries, animal husbandry, horticulture, etc. and construction of storage facilities, etc. for storage of seeds, raw agriculture/farm produce.</List.Header>
					</List.Content>
				</List.Item>
				<List.Item>
				</List.Item>
			</List>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<h5 className="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2 text-deep-purple-accent-400">
					Large Credit Products
        <br className="hidden md:block" />
        {' '}
					<span className="inline-block text-deep-purple-accent-400">
						Developed to Finanace Large agricultural Production and Agro Allied Activities. 
        </span>
				</h5>
				<br />
				<div className="grid gap-3 row-gap-3 lg:grid-cols-3">
					<ul className="space-y-3">
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
          Loan volume ranging from above 50 million to a maximum of 1 billion for a single obligor.
          </li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
           Accessed by corporate bodies only.
          </li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
            Disbursement both cash and kind.
          </li>
					</ul>
					<ul className="space-y-3">
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
            Agro-business must be a clause in the Memart of the company for corporate applicants.
          </li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
           Backed up with viable, profitable and bankable business proposal.
          </li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
            Agro-business must be a clause in the Memart of the company for corporate applicants.
          </li>
					</ul>
					<ul className="space-y-3">
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
         Security acceptable to the <strong>AgriCard</strong> required
          </li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
         Interest rate 14% for agricultural production and agro-processing while marketing is 20%.
          </li>
						{/* <li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
           Interest rate 14% for agricultural production and agro-processing while commodity marketing is 20%.
          </li> */}
					</ul>
				</div>
			</div>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<h5 className="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2 text-deep-purple-accent-400">
					Direct Credit Products
        <br className="hidden md:block" />
        {' '}
					<span className="inline-block text-deep-purple-accent-400">
						
        </span>
				</h5>
				<div className="grid gap-3 row-gap-3 lg:grid-cols-3">
					<ul className="space-y-3">
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
           Developed to finance agricultural productions and Agro-allied activities.
          </li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
            Loan volume ranges from above N250,000.00 to a maximum of N50,000,000.00.
          </li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
            Limit of N5,000,000.00 to individual persons.
          </li>
					</ul>
					<ul className="space-y-3">
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
            Above N5,000,000.00 to corporate organisations.
          </li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
            Loan tenor not exceeding 5 years.
          </li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
            Disbursement both cash and kind.
          </li>
					</ul>
					<ul className="space-y-3">
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
         For both individuals and cooperate bodies.
          </li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
          Consent to mortgage of the landed property being pledged as security for the loan required.
          </li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
           Interest rate 14% for agricultural production and agro-processing while commodity marketing is 20%.
          </li>
					</ul>
				</div>
			</div>
				<br />
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">    
				Youth Agricultural Revolution In Nigeria (YARN)
          </h5>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Developed to encourage Nigerian Youths</span> to key into agriculture and take it as an investment or as a business.
          </p>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn More
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
			<Button type='submit' variant="contained" color='primary' onClick={handleSubmit}>Apply for Loan</Button>
		</>
	)
 }
export default AgricLoan
