import React from 'react'
import {
  OnlinePharmacyImage,
  ForBabies01,
  ForBabies02,
  ForBabies03,
  ForBabies04,
  ForBabies05,
  ForBabies06,
  ForBabies07,
  OkIcon,
  ArrowRight
} from '../../assets'

const ForBabies = () => {
  return (
    <section className="py-10 md:py-20 font-main text-center md:text-left">
      <div className="max-w-[1100px] mx-auto space-y-20">
        <article className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-12">
          <div className="flex-1">
            <img className="w-full h-[550px] object-cover rounded-[35px] shadow-cardService" src={OnlinePharmacyImage} alt="For Babies" />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl w-full max-w-[320px]">
              For babies, children, and teens.
            </h2>
            <p className="max-w-[480px] font-body font-light py-6">
              Lorem ipsum dolor sit amet consectetur. Rhoncus sed imperdiet mauris facilisi at imperdiet hendrerit enim. Sed fames pharetra sagittis pellentesque ullamcorper amet dolor pellentesque. Amet enim dictum ut et eu nulla vitae cras varius. Consectetur aliquet cras sit aliquam a faucibus at. Tortor nunc amet vel ipsum congue. Amet in tristique vitae ultrices mi tempus egestas vitae ac. Eget euismod vel etiam elementum laoreet etiam amet viverra. Blandit scelerisque elementum euismod nullam massa ullamcorper tellus donec amet. Pretium tincidunt hendrerit morbi id pellentesque ac facilisis. Ut nec nulla dignissim convallis sit sit donec. Et nullam sed porttitor ac.
            </p>
            <button className={`rounded-full mx-auto md:mx-0 text-lg group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent shadow-cardService`}>
              Sign Up Your Child Today
            </button>
          </div>
        </article>

        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {
            [ForBabies01, ForBabies02, ForBabies03, ForBabies04, ForBabies05, ForBabies06].map((imageSrc, index) => (
              <article
                key={index}
                className="p-6 flex flex-col items-center border-[0.25px] shadow-cardService rounded-3xl"
              >
                <img src={imageSrc} alt="Benefits for Babies" className="w-24 h-24 object-contain" />
                <h2 className="font-semibold py-3">Lorem ipsum dolor sit.</h2>
                <p className="text-center leading-6">
                  Lorem ipsum dolor sit amet consectetur. Rhoncus sed imperdiet mauris facilisi at imperdiet hendrerit enim. Sed fames pharetra sagittis pellentesque ullamcorper amet dolor pellentesque. Amet enim dictum ut et eu nulla vitae cras varius. Consectetur aliquet cras sit aliquam a faucibus at. Tortor nunc amet vel ipsum.
                </p>
              </article>
            ))
          }
        </article>

        <article>
          <h2 className="text-4xl">Membership Benefits</h2>
          <p className="font-body py-4 max-w-[680px]">
            Lorem ipsum dolor sit amet consectetur. Dictum nunc proin nibh mauris suspendisse adipiscing risus adipiscing. Semper at interdum pellentesque adipiscing. Amet donec morbi egestas diam nam. Proin senectus ut proin id sed nec.
          </p>
          <button className={`mx-auto md:mx-0 rounded-full text-lg group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent shadow-cardService`}>
            Sign Up Your Child Today
          </button>
        </article>

        <article className="relative w-full py-8 px-12 border-[0.25px] rounded-3xl shadow-cardService space-y-7 text-lg">
          <img src={ForBabies07} alt="Benefits for Babies" className="hidden md:block absolute right-16 top-20" />
          <h2 className="text-4xl">What We Can Help With</h2>
          <div className="flex flex-col md:flex-row text-left gap-x-24 gap-y-6 font-light font-body">
            <ul className="space-y-6">
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Well-child visits</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Routine vaccinations</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Colds and flus</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Ear aches</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Fever and illnesses</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Allergies and asthma</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Rashes and skin issues</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Minor injuries</span>
              </li>
            </ul>

            <ul className="space-y-6">
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Mental and behavioral health</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Concussions</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Growth and nutrition</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>COVID-19 care and testing</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div>
                  <OkIcon className="text-primary" />
                </div>
                <span>Parenting support and questions</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div>
                  <OkIcon className="text-primary" />
                </div>
                <span>Newborn care including lactation and bottle feeding support</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div>
                  <OkIcon className="text-primary" />
                </div>
                <span>Infant care including guidance around sleep and potty training</span>
              </li>
            </ul>
          </div>
          <button className={`rounded-full text-lg group hover:ring-1 hover:ring-primary px-6 md:px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent shadow-cardService`}>
            View Membership Plans
          </button>
        </article>

        <article className="pb-10">
          <h2 className="text-4xl pb-8">FAQs</h2>
          <ul className="font-body space-y-3">
            <li className="flex justify-between items-center border-b border-gray-700 pb-3">
              <p>Questions 1</p>
              <ArrowRight className="text-primary" />
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-3">
              <p>Questions 2</p>
              <ArrowRight className="text-primary" />
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-3">
              <p>Questions 3</p>
              <ArrowRight className="text-primary" />
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-3">
              <p>Questions 4</p>
              <ArrowRight className="text-primary" />
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-3">
              <p>Questions 5</p>
              <ArrowRight className="text-primary" />
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-3">
              <p>Questions 6</p>
              <ArrowRight className="text-primary" />
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-3">
              <p>Questions 7</p>
              <ArrowRight className="text-primary" />
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-3">
              <p>Questions 8</p>
              <ArrowRight className="text-primary" />
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default ForBabies