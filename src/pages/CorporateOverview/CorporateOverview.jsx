import React from 'react'
import {
  CorporateOverview01,
  CorporateOverview02,
  CorporateOverview03,
  CorporateOverview04,
  Membership04,
  Membership05,
  Membership06
} from '../../assets'

const CorporateOverview = () => {
  return (
    <section className="font-main pt-16 pb-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        <article>
          <div className="relative flex">
            <img className="w-full" src={CorporateOverview01} alt="Corporate Overview" />
            <h2 className="absolute bottom-8 left-8 text-white text-4xl">Corporate Overview</h2>
          </div>
          <div className="py-10 flex justify-center gap-x-10 text-center">
            <article>
              <h2 className="text-primary text-8xl">91%</h2>
              <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
                Of medical issues resolved in the first interaction
              </p>
            </article>
            <article>
              <h2 className="text-primary text-8xl">65%</h2>
              <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
                Of visits prevent a workplace absense
              </p>
            </article>
            <article>
              <h2 className="text-primary text-8xl">3.6</h2>
              <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
                Hours saves per consultation on average
              </p>
            </article>
          </div>
          <div>
            <p className="font-body text-xl text-center py-8 font-light">
              Lorem ipsum dolor sit amet consectetur. Duis nibh a lobortis nunc tortor fermentum nisi ac hendrerit.
            </p>
            <div className="flex justify-center gap-x-12">
              <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                5-10 Employees
              </button>
              <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                10+ Employees
              </button>
            </div>
          </div>
        </article>

        <article className="text-center pt-10 space-y-6">
          <h2 className="text-4xl">Lorem ipsum dolor sit.</h2>
          <div className="flex justify-between">
            <article className="flex flex-col items-center justify-center space-y-1">
              <img className="w-24" src={Membership04} alt="Medical Care" />
              <div className="space-y-2">
                <h2 className="text-xl">Lorem ipsum dolor sit.</h2>
                <p className="font-body font-thin text-sm w-full max-w-[360px] leading-[1.4rem]">
                  Lorem ipsum dolor sit amet consectetur. Rhoncus sed imperdiet mauris facilisi at imperdiet hendrerit enim. Sed fames pharetra sagittis pellentesque ullamcorper amet dolor pellentesque.
                </p>
                <button className={`mx-auto rounded-full text-lg group hover:ring-1 hover:ring-primary px-8 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                  Learn More
                </button>
              </div>
            </article>
            <article className="flex flex-col items-center justify-center space-y-1">
              <img className="w-24" src={Membership05} alt="Medical Care" />
              <div className="space-y-2">
                <h2 className="text-xl">Lorem ipsum dolor sit.</h2>
                <p className="font-body font-thin text-sm w-full max-w-[360px] leading-[1.4rem]">
                  Lorem ipsum dolor sit amet consectetur. Rhoncus sed imperdiet mauris facilisi at imperdiet hendrerit enim. Sed fames pharetra sagittis pellentesque ullamcorper amet dolor pellentesque.
                </p>
                <button className={`mx-auto rounded-full text-lg group hover:ring-1 hover:ring-primary px-8 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                  Learn More
                </button>
              </div>
            </article>
            <article className="flex flex-col items-center justify-center space-y-1">
              <img className="w-24" src={Membership06} alt="Medical Care" />
              <div className="space-y-2">
                <h2 className="text-xl">Lorem ipsum dolor sit.</h2>
                <p className="font-body font-thin text-sm w-full max-w-[360px] leading-[1.4rem]">
                  Lorem ipsum dolor sit amet consectetur. Rhoncus sed imperdiet mauris facilisi at imperdiet hendrerit enim. Sed fames pharetra sagittis pellentesque ullamcorper amet dolor pellentesque.
                </p>
                <button className={`mx-auto rounded-full text-lg group hover:ring-1 hover:ring-primary px-8 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                  Learn More
                </button>
              </div>
            </article>
          </div>
        </article>

        <article className="flex justify-between text-center">
          <div className="flex flex-col items-center space-y-2">
            <img src={CorporateOverview02} alt="Healthcare Benefits" />
            <p className="font-body font-thin text-sm w-full max-w-[360px] leading-[1.4rem] px-6">
              Lorem ipsum dolor sit amet consectetur. Rhoncus sed imperdiet mauris facilisi at imperdiet hendrerit enim. Sed fames pharetra sagittis pellentesque ullamcorper amet dolor pellentesque.
            </p>
            <button className={`mx-auto rounded-full text-lg group hover:ring-1 hover:ring-primary px-8 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
              Learn More
            </button>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src={CorporateOverview03} alt="Healthcare Benefits" />
            <p className="font-body font-thin text-sm w-full max-w-[360px] leading-[1.4rem] px-6">
              Lorem ipsum dolor sit amet consectetur. Rhoncus sed imperdiet mauris facilisi at imperdiet hendrerit enim. Sed fames pharetra sagittis pellentesque ullamcorper amet dolor pellentesque.
            </p>
            <button className={`mx-auto rounded-full text-lg group hover:ring-1 hover:ring-primary px-8 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
              Learn More
            </button>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src={CorporateOverview04} alt="Healthcare Benefits" />
            <p className="font-body font-thin text-sm w-full max-w-[360px] leading-[1.4rem] px-6">
              Lorem ipsum dolor sit amet consectetur. Rhoncus sed imperdiet mauris facilisi at imperdiet hendrerit enim. Sed fames pharetra sagittis pellentesque ullamcorper amet dolor pellentesque.
            </p>
            <button className={`mx-auto rounded-full text-lg group hover:ring-1 hover:ring-primary px-8 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
              Learn More
            </button>
          </div>
        </article>

        <article className="text-center px-5">
          <h2 className="text-[2.5rem]">Lorem ipsum dolor sit.</h2>
          <p className="font-body font-light py-4 text-sm">
            Lorem ipsum dolor sit amet consectetur. Venenatis eu hendrerit faucibus leo ultrices mi enim dui. Lobortis lectus enim nulla in. Vel neque sem massa ullamcorper in. Nunc velit turpis id dignissim diam arcu libero leo. Id porttitor fermentum amet blandit facilisis at. Orci bibendum et mattis laoreet leo tristique at. Non sollicitudin bibendum viverra ac. Purus tristique risus adipiscing quam pharetra. Velit quam viverra quis sit mi. Purus elit dignissim fermentum fermentum fusce. Viverra nulla rhoncus vitae integer euismod. Sagittis accumsan.
          </p>
          <p className="font-body font-light text-sm">
            Molestie lectus at lacus commodo. Sed risus id eget quisque gravida in faucibus. Nec condimentum risus nunc dolor nullam vel leo quis dictum. Morbi quis vel amet massa. Tincidunt quis viverra est nullam diam sed. Fusce pretium felis amet aliquam lobortis amet morbi. Justo id nunc velit sit porta dictumst tempus. Tortor quam risus massa mi cursus cras. Mattis ut purus scelerisque adipiscing varius at aenean feugiat nunc. Diam facilisis malesuada platea a. Senectus eget cursus neque justo et natoque netus sed mauris.
          </p>
        </article>
      </div>
    </section>
  )
}

export default CorporateOverview