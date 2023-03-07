import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ForCorporateGrid01,
  ForCorporateGrid02,
  ForCorporateGrid03,
  ForCorporateGrid04,
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  ForCorporateHeader,
  AirCanada,
  OkIconWhite
} from '../../assets'
import { registerationStore } from '../../store/registerationStore'

const CorporateOverview = () => {
  const changeSelectedAccountType = registerationStore(state => state.changeSelectedAccountType)
  return (
    <section className="font-main">
      <section className="relative font-main bg-virtualDoctor overflow-hidden">
        <img className="absolute object-cover w-full h-[400px]" src={ForCorporateHeader} alt="For Corporate" />
        <div className="relative z-10 w-full max-w-7xl mx-auto h-[390px] flex items-center">
          <h2 className="text-[88px] max-w-[650px] leading-[80px] pb-5 text-white">
            your employees health should never be limited
          </h2>
        </div>
      </section>

      <section className="w-full max-w-[1130px] mx-auto py-20 font-main">
        <article className="w-full bg-linearGradientPrimary rounded-lg py-10 pb-32 text-white space-y-6">
          <h2 className="text-center text-4xl max-w-lg mx-auto">Attract and retain top talent by offering the ultimate care</h2>
          <ul className="flex justify-center flex-wrap font-body text-white gap-x-16 gap-y-8 relative">
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                A healthy team member is a your companies greatest asset
              </p>
            </li>
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                Doctors notes, paediatricians and homecare for the kids and grandparents
              </p>
            </li>
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                Support and coverage for each employee and their family
              </p>
            </li>
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                Preventive care and ongoing management of chronic conditions
              </p>
            </li>
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                Reduce down time and recovery with on demand fast service
              </p>
            </li>
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                Vaccination, prescriptions and mobile nurses and all medical records in one place
              </p>
            </li>
            <li className="flex w-[380px] gap-x-2" />
            <li className="flex w-[380px] gap-x-2">
              <OkIconWhite className="w-6 h-6" />
              <p className="w-full">
                Strong focus on mental health and wellness
              </p>
            </li>
            <li className="absolute -bottom-7 left-36">
              <Link className="block" to="/register">
                <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white border-white text-primary font-main">
                  Sign Up Today
                </button>
              </Link>
            </li>
          </ul>
        </article>
      </section>

      <section className="bg-[#F9F9F9] py-10">
        <h2 className="text-4xl text-dark text-center">Lorem ipsum dolor sit amet consectetur.</h2>
        <div className="py-10 flex justify-center gap-x-16 text-center">
          <article>
            <h2 className="text-primary text-8xl">85%</h2>
            <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </article>
          <article>
            <h2 className="text-primary text-8xl">91%</h2>
            <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </article>
          <article>
            <h2 className="text-primary text-8xl">65%</h2>
            <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </article>
        </div>
      </section>

      <section className="w-full max-w-[1130px] mx-auto py-20 font-main">
        <div className="w-full bg-linearGradientPrimary rounded-lg p-10 text-white flex justify-between gap-x-12">
          <article className="space-y-8">
            <h2 className="text-4xl">Lorem ipsum dolor sit amet consectetur.</h2>
            <div className="space-y-3">
              <h2 className="text-3xl">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="font-body">
                Lorem ipsum dolor sit amet consectetur. In ipsum quam viverra purus libero. Pellentesque ultricies viverra sed eu arcu nunc. Donec tortor aliquam eu varius aliquet eu dui magna. Lobortis mollis amet orci volutpat tincidunt sed massa magna.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="font-body">
                Lorem ipsum dolor sit amet consectetur. In ipsum quam viverra purus libero. Pellentesque ultricies viverra sed eu arcu nunc. Donec tortor aliquam eu varius aliquet eu dui magna. Lobortis mollis amet orci volutpat tincidunt sed massa magna.
              </p>
            </div>
          </article>
          <article className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="font-body">
                Lorem ipsum dolor sit amet consectetur. In ipsum quam viverra purus libero. Pellentesque ultricies viverra sed eu arcu nunc. Donec tortor aliquam eu varius aliquet eu dui magna. Lobortis mollis amet orci volutpat tincidunt sed massa magna.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="font-body">
                Lorem ipsum dolor sit amet consectetur. In ipsum quam viverra purus libero. Pellentesque ultricies viverra sed eu arcu nunc. Donec tortor aliquam eu varius aliquet eu dui magna. Lobortis mollis amet orci volutpat tincidunt sed massa magna.
              </p>
            </div>

            <div>
              <Link className="block" to="/register">
                <button className="rounded-full w-[240px] text-lg flex justify-center py-3 border bg-white border-white text-primary font-main">
                  Sign Up Today
                </button>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#F9F9F9] py-10">
        <h2 className="text-4xl text-dark text-center">Lorem ipsum dolor sit amet consectetur.</h2>
        <div className="py-10 flex justify-center gap-x-16 text-center">
          <article className="space-y-3">
            <h2 className="text-primary text-8xl">25%</h2>
            <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
              Lorem ipsum dolor sit amet consectetur. Tellus at commodo in mauris vulputate nulla risus convallis pellentesque.
            </p>
          </article>
          <article className="space-y-3">
            <h2 className="text-primary text-8xl">70%</h2>
            <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
              Lorem ipsum dolor sit amet consectetur. Tellus at commodo in mauris vulputate nulla risus convallis pellentesque.
            </p>
          </article>
          <article className="space-y-3">
            <h2 className="text-primary text-8xl">90%</h2>
            <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
              Lorem ipsum dolor sit amet consectetur. Tellus at commodo in mauris vulputate nulla risus convallis pellentesque.
            </p>
          </article>
          <article className="space-y-3">
            <h2 className="text-primary text-8xl">75%</h2>
            <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
              Lorem ipsum dolor sit amet consectetur. Tellus at commodo in mauris vulputate nulla risus convallis pellentesque.
            </p>
          </article>
        </div>
      </section>

      <section className="max-w-[1130px] mx-auto py-20 space-y-16">
        <div className="bg-white grid grid-cols-2 gap-10">
          <article>
            <div className="relative font-main">
              <img className="w-full" src={ForCorporateGrid01} alt="Corporate Benefits" />
              <h2 className="text-xl absolute left-4 bottom-4 text-white">Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
            <div className="shadow-corporateCard font-body px-6 py-2">
              <p>Lorem ipsum dolor sit amet consectetur. Massa massa scelerisque id fringilla a purus aliquet nisi.</p>
            </div>
          </article>

          <article>
            <div className="relative font-main">
              <img className="w-full" src={ForCorporateGrid02} alt="Corporate Benefits" />
              <h2 className="text-xl absolute left-4 bottom-4 text-white">Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
            <div className="shadow-corporateCard font-body px-6 py-2">
              <p>Lorem ipsum dolor sit amet consectetur. Massa massa scelerisque id fringilla a purus aliquet nisi.</p>
            </div>
          </article>

          <article>
            <div className="relative font-main">
              <img className="w-full" src={ForCorporateGrid03} alt="Corporate Benefits" />
              <h2 className="text-xl absolute left-4 bottom-4 text-white">Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
            <div className="shadow-corporateCard font-body px-6 py-2">
              <p>Lorem ipsum dolor sit amet consectetur. Massa massa scelerisque id fringilla a purus aliquet nisi.</p>
            </div>
          </article>

          <article>
            <div className="relative font-main">
              <img className="w-full" src={ForCorporateGrid04} alt="Corporate Benefits" />
              <h2 className="text-xl absolute left-4 bottom-4 text-white">Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
            <div className="shadow-corporateCard font-body px-6 py-2">
              <p>Lorem ipsum dolor sit amet consectetur. Massa massa scelerisque id fringilla a purus aliquet nisi.</p>
            </div>
          </article>
        </div>

        <div className="space-y-6 text-center">
          <h2 className="text-dark text-4xl pb-4">
            "mental well-being coverage has provided us with the tools to make a difference in the lives of our employees and each other.”
          </h2>
          <h3 className="text-xl">
            We cover some of Canada's finest
          </h3>
          <div className="flex justify-center items-center gap-x-16">
            <img className="max-w-[149px]" src={Logo1} alt="Air Canada" />
            <img className="max-w-[156px]" src={Logo2} alt="Sotherbys" />
            <img className="max-w-[147px]" src={Logo3} alt="Air BNB" />
            <img className="max-w-[153px]" src={Logo4} alt="Four Seasons" />
          </div>
        </div>
      </section>
    </section>
  )
}

export default CorporateOverview