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
import { Link } from 'react-router-dom'
import FAQ from '../../components/FAQ'

const forBabiesData = [
  {
    id: 1,
    title: "24/7 care",
    image: ForBabies01,
    text: "Chat with compassionate providers 24/7 over video and schedule doctor appointments easily online at any time. No (or at least, a lot less) sleep lost here."
  },
  {
    id: 2,
    title: "Pediatric specialists",
    image: ForBabies02,
    text: "Specialized doctors like pediatric doctors can be hard to find in Canada. Get the personalized care your child needs and get help from specialists fast."
  },
  {
    id: 3,
    title: "Convenient Locations",
    image: ForBabies03,
    text: "If your child requires an in-person meeting, you’ll be matched with kid-approved locations in your area. So you don’t have to rush around town to make an appointment on time."
  },
  {
    id: 4,
    title: "Healthcare in your hands",
    image: ForBabies04,
    text: "You know your children better than anyone. Our membership allows you to be an advocate for your children and family’s health while setting a great example."
  },
  {
    id: 5,
    title: "Cohesive one-stop care",
    image: ForBabies05,
    text: "With one or multiple children, it can be hard to keep track of their files and history. Using our platform, you, and your child’s doctors, will have everything they need all in one place."
  },
  {
    id: 6,
    title: "Your health arsenal",
    image: ForBabies06,
    text: "Whatever your family is dealing with, your MDHUB family plan can help you through it with our online pharmacy, prescription delivery, access to specialists, and convenient lab access."
  },

]

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
              The current healthcare system in Canada isn’t kind to parents and caregivers. Countless hours spent in waiting rooms, weeks on waiting lists to see specialists, and entire work days missed are unfortunately all too common. That’s why MDHUB is here to help with reimagined healthcare for families, like 24/7 access to pediatric doctors to give you peace of mind. 
            </p>
            <Link to="/register">
              <button className={`rounded-full mx-auto md:mx-0 text-lg group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent shadow-cardService`}>
                Sign Up Your Child Today
              </button>
            </Link>
          </div>
        </article>

        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {
            forBabiesData.map((item) => (
              <article
                key={item.id}
                className="p-6 flex flex-col items-center border-[0.25px] shadow-cardService rounded-3xl"
              >
                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
                <h2 className="font-semibold py-3">{item.title}</h2>
                <p className="text-center leading-6">
                  {item.text}
                </p>
              </article>
            ))
          }
        </article>

        <article>
          <h2 className="text-4xl">Membership Benefits</h2>
          <p className="font-body py-4 max-w-[680px]">
            Raising a family is rewarding but can be challenging at times – and that’s why we’re always by your side. Take care of those you love most with a family plan. Family memberships start at $44.99 when you sign up for 12 months with MDHUB.
          </p>
          <Link to="/register">
            <button className={`mx-auto md:mx-0 rounded-full text-lg group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent shadow-cardService`}>
              Sign Up Your Child Today
            </button>
          </Link>
        </article>

        <article className="relative w-full py-8 px-12 border-[0.25px] rounded-3xl shadow-cardService space-y-7 text-lg">
          <img src={ForBabies07} alt="Benefits for Babies" className="hidden md:block absolute right-16 top-20" />
          <h2 className="text-4xl">What We Can Help With</h2>
          <div className="flex flex-col md:flex-row text-left gap-x-24 gap-y-6 font-light font-body">
            <ul className="space-y-6">
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Routine checkups</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Nutrition</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Colds and flu</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Ear aches</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Sinus infections</span>
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
            </ul>

            <ul className="space-y-6">
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Fever and illnesses</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Newborn care</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Infant care</span>
              </li>
              <li className="flex space-x-2 items-center">
                <OkIcon className="text-primary" />
                <span>Minor injuries</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div>
                  <OkIcon className="text-primary" />
                </div>
                <span>Behaviour issues and mental health</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div>
                  <OkIcon className="text-primary" />
                </div>
                <span>Concussions</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div>
                  <OkIcon className="text-primary" />
                </div>
                <span>COVID-19 testing </span>
              </li>
              <li className="flex space-x-2 items-center">
                <div>
                  <OkIcon className="text-primary" />
                </div>
                <span>Routine vaccinations</span>
              </li>
            </ul>
          </div>
          <Link className="block" to="/rates">
            <button className={`rounded-full text-lg group hover:ring-1 hover:ring-primary px-6 md:px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent shadow-cardService`}>
              View Membership Plans
            </button>
          </Link>
        </article>

        <article className="pb-10">
          <h2 className="text-4xl pb-8">FAQs</h2>
          <ul className="font-body space-y-3">
            <FAQ
              key="faq1"
              question="What can I expect from my MDHUB family membership?"
            >
              <p className="pb-3">
                MDHUB’s family plan provides additional care and support for the babies, children, and teens in your care. Get access to virtual doctors 24/7, as well as pediatric doctors and specialists, so you never have to frantically Google symptoms in the middle of the night or wait hours to see a doctor again.
              </p>
              <p>
                Plus, you can get prescriptions filled using our online pharmacy and have them delivered directly to you, and access our medical labs. MDHUB’s family membership helps your kids stay healthy, which saves you time and provides peace of mind.
              </p>
            </FAQ>
            <FAQ
              key="faq2"
              question="What support do you offer families and new parents?"
            >
              <p>
                MDHUB offers support for families and parents because we know first-hand how much of an adjustment becoming a parent is. Our doctors and nurse practitioners can support new parents with lactating and bottle-feeding and can help with behavioural and mental health issues in children and teens.
              </p>
            </FAQ>
            <FAQ
              key="faq3"
              question="What can a family membership help with?"
            >
              <p>
                Our virtual doctors and nurse practitioners can treat many conditions online that are common in babies, children, and teens. Conditions include colds, the flu, sinus infections, eye infections, skin issues, and gastronomical issues. They can provide prescriptions or doctor’s notes as needed.
              </p>
            </FAQ>
            <FAQ
              key="faq4"
              question="What can’t a family membership help with?"
            >
              <p>
                A family membership can’t help with medical emergencies, physical examinations, stitches or major wound care, X-rays and orthopedic casts. For medical emergencies, always call 911.
              </p>
            </FAQ>
            <FAQ
              key="faq5"
              question="Is my family's data secure?"
            >
              <p>
                Yes, we take confidentiality extremely seriously. Your information is completely private and is protected by our leading security infrastructure and data protection policies. You are always in control of your personal health information.
              </p>
            </FAQ>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default ForBabies