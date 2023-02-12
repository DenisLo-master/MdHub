import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { MentalHealth } from '../../assets'
import Button from '../../components/Button'


const HomeHeadspaceSection = () => {
  return (
    <section className="flex flex-col md:flex-row py-20">
      <article className="w-full max-w-[650px]">
        <img className="w-full md:object-cover" src={MentalHealth} alt="Mental Health" />
      </article>
      <article className="flex-1 flex justify-center">
        <section className="flex flex-col justify-between md:w-[75%]">
          <div className="px-8 font-body">
            <h2 className="w-full max-w-[400px] font-main text-center md:text-left text-4xl md:text-5xl pb-6">
              Put your mental health first.
            </h2>
            <p className="pb-2">Live a healthier, happier life in just a few minutes a day.</p>
            <ul className="py-8 space-y-12">
              <li className="flex items-center gap-x-4">
                <article>
                  <div className="w-10 h-10 rounded-full bg-[#D9D9D9]" />
                </article>
                <p className="w-full max-w-[450px]">
                  Lorem ipsum dolor sit amet consectetur. Non lorem nunc sit diam. Lacus pulvinar sed id amet amet vitae egestas.
                </p>
              </li>
              <li className="flex items-center gap-x-4">
                <article>
                  <div className="w-10 h-10 rounded-full bg-[#D9D9D9]" />
                </article>
                <p className="w-full max-w-[450px]">
                  Lorem ipsum dolor sit amet consectetur. Non lorem nunc sit diam. Lacus pulvinar sed id amet amet vitae egestas.
                </p>
              </li>
              <li className="flex items-center gap-x-4">
                <article>
                  <div className="w-10 h-10 rounded-full bg-[#D9D9D9]" />
                </article>
                <p className="w-full max-w-[450px]">
                  Lorem ipsum dolor sit amet consectetur. Non lorem nunc sit diam. Lacus pulvinar sed id amet amet vitae egestas.
                </p>
              </li>
            </ul>
          </div>
          <div className="px-8">
            <Button>
              <span className="font-main text-xl">Check out the Headspace app</span> <FiArrowUpRight className="md:text-lg transition-colors ease-out duration-150 group-hover:text-primary" />
            </Button>
          </div>
        </section>
      </article>
    </section>
  )
}

export default HomeHeadspaceSection