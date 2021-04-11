import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../Slide-bar/Submenu/submenu.styles.css';


const AgriCardCBHI = () => {
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
				<h3 className="h1">AgriCard CBHI</h3>
				<p className="h1">For Nigerian's Community Farmers</p>
			</Carousel.Caption>
		</Carousel.Item>
			</Carousel>
			<br />
				<section className="mw7 flex flex-row center">
  <article className="pv4 bt bb b--black-10 ph3 ph0-l">
    <div className="flex flex-column flex-row">
      <div className="w-0 w-60-ns pr3-ns order-2 order-1-ns">
        <h1 className="f3 athelas mt0 h1 lh-title">CBHI Now With AgriCard</h1>
        <p className="f5 f4-l lh-copy athelas">
         Community-Based Health Insurance (CBHI) is an emerging concept for providing financial protection against the cost of illness and improving access to quality health services for low-income rural households who are excluded from formal insurance. <strong>CBHI</strong> is currently being provided in some rural areas in developing countries and there is ongoing research about its impact on the well-being of the poor in these areas. Now, with the <strong>AgriCard</strong>, farmers can secured capital thats helps them inlarge agricultural production, especially as it relates to the Internal Displays Persons<strong>(IDP)s</strong>s.
        </p>
      </div>
      <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
        <img src="/cardimages/agricard02.jpg" className="db" alt="" />
      </div>
    </div>
  </article>
  <article className="pv4 bb b--black-10 ph3 ph0-l">
    <div className="flex flex-column flex-row-ns">
      <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
        <h1 className="f3 2xl flex flex-col md:flex-row athelas mt0 h1 lh-title">Best Appeoach to IDPs</h1>
        <p className="f5 f4-l lh-copy w-24 md:w-auto athelas">
						The strategy adapted by the NGO coalition in Benue state could work elsewhere where there humanitarian crises exist. In  Borno state, for example, a similar approach can be adopted to help IDPs who suffer from malnutrition and other challenges. By NGOs working on relief efforts in different areas, forming a coalition with the <strong>AgriCard</strong> to coordinate relief and help bring about a new social livelihood to the affected people would inturn bring social development and progress of the community which is one of the aim of <strong>CBHI</strong> and collaborating with other partneering agencies of the <strong>AgriCard</strong> such as <strong>BOA</strong>, <strong>PAN</strong>, <strong>NIRSAL</strong>and others would provide the necessary needs for IDPs.
        </p>
      </div>
      <div className="pl3-ns order-1 order-2-ns mb4 flex flexDiretion row  space-between mb0-ns w-100 w-40-ns">
        <img src="/cardimages/idps03.jpg" className="db" alt="idps." />
        {/* <img src="/cardimages/idps.jpg" className="db flex-ene" alt="idps." /> */}
      </div>
    </div>
  </article>
</section>
		</>
	)
}

export default AgriCardCBHI
