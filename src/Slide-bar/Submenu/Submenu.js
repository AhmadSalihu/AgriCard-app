import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './submenu.styles.css';

const Submenu = () => {
  AOS.init();
  return (
      <>
        <div className="main border-b">
        <div className="row">
          <div className="content">
      <img src="/cardimages/agricard02.jpg" alt="Agricard" style={{width: '100%'}}/>
      <h3 className="h1">AgriCard</h3>
            <p className="font-bold"><strong className='font-bold'>         
              You grow, you raise, you farm. You are a Producer. Let AgriCard get you what you need to keep growing, raising and farming.
            </strong></p>
						<p className="font-bold"> A Digitalize AgriCard Management Sytems for robust citizen database with effective security management and Real Time Online Agricultural Bussiness Revenue Recoveries</p>
    </div>
  </div>
      </div>
      <br />
     <div  data-aos="fade-up"
     data-aos-duration="3000"> 
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans h1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  AgriC Verve (Prepaired FRiD), Payment Solution for farmers.
              <br className="hidden md:block" />
              {' '} 
              <span className="inline-block text-deep-purple-accent-400">
                To Boost Productivity
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
             <strong>Agric Prepaired (FRiD)</strong>, is an agricultural credit card dedicated exclusively to YOU: Nigerian’s farmers. Designed to work with producers’ and cash flow needs. AgriCard offers various payment and plans benefits that suit YOUR agribusiness.
            </p>
          </div>
          <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
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
              <h6 className="mb-2 font-semibold leading-5">
                Online Roburst Citizen Database
              </h6>
              <p className="text-sm text-gray-900">
               Real Time Agricultural Online Bussiness With Effective Management Security
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
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
              <h6 className="mb-2 font-semibold leading-5">
                Effective Revenue Recovery upto 30%
              </h6>
              <p className="text-sm text-gray-900">
                    Secured Your Agric Card
                <span> </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/cardimages/vervecard.jpg"
            alt=""
          />
        </div>
      </div>
        </div>
     <h2 className="h1 tc">How To Register AgriCard</h2>   
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold h1">Step 1</p>
              <p className="text-gray-700">
               Click on The Sign Up link in the navbar, it will direct you to where you would create account using your phone number.<br /> Start with your country Code first(+234) and then your phone number.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold h1">Step 2</p>
              <p className="text-gray-700">
                After putting your phone number, click on the submit button, a recaptcha would promptin the screen, select the appropraite recaptcha and click on verify. You would rececived a code in your phone, copy that code and put it in the prompted icon and click ok.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold h1">Step 3</p>
              <p className="text-gray-700">
               Then you would be directed to a form for register. Fill in the registeration form and select the type of agricard services you want and also choose the sub-type of the services and click next button</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold h1">Step 4</p>
              <p className="text-gray-700">
               You would be directed to a review page, review all the details provided by you and then procceed to a payment gateway.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-6 text-gray-600"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1">
              <p className="mb-2 text-lg font-bold">Success</p>
              <p className="text-gray-700" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
            src="/logoimages/agriclogo.jpeg"
            alt=""
          />
        </div>
      </div>
      </div>
      </div>   
	</>
	)
}

export default Submenu
