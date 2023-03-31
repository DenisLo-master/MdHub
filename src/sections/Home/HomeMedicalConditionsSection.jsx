import React from 'react'
import { HomeMedicalConditionsHero, ArrowIcon, ChevronRight, ForYouBottom } from '../../assets'
import {Link} from "react-router-dom"
import Button from '../../components/Button'
import { useTranslation } from 'react-i18next'
import { GoStar } from 'react-icons/go'
import { AiOutlinePlus } from 'react-icons/ai'
const HomeMedicalConditionsSection = () => {
	const { t } = useTranslation()
  return (
		<section className="font-main bg-home-gradient-reverse">
			<div className="w-full max-w-7xl mx-auto flex flex-col-reverse gap-y-4 md:flex-row items-start px-4 text-center md:text-left">
      	<article className="flex-1">
      		<h2 className="text-5xl">Medical Conditions Treated</h2>
      		<p className="w-full max-w-[500px] py-4 font-body">
      			Our medical team can treat most health conditions online. Our health professionals are available for a consultation and to provide prescriptions for common chronic care conditions.
      		</p>
      		<div className="max-w-[380px] space-y-4">
      			<article>
							<h2 className="text-2xl text-primary pb-2">Acute care</h2>
	      			<p className="font-body text-sm">Our healthcare professionals provide tests and treatment for most common medical problems. 
	      			</p>
      			</article>
      			<article>
							<h2 className="text-2xl text-primary pb-2">Chronic care</h2>
	      			<p className="font-body text-sm">
	      				Our healthcare professionals can provide you with a consultation or a prescription for most common chronic illnesses previously diagnosed.
	      			</p>
      			</article>
      			<article>
							<h2 className="text-2xl text-primary pb-2">Mental health</h2>
	      			<p className="font-body text-sm">
	      				Our healthcare professionals can provide you with a consultation or a prescription for most common chronic illnesses previously diagnosed.
	      			</p>
      			</article>
      			<article>
							<h2 className="text-2xl text-primary pb-2">Sexual health</h2>
	      			<p className="font-body text-sm">
	      				Our health professionals are available to advise you and prescribe treatment for sexual health problems.
	      			</p>
      			</article>
						<article className="text-primary flex items-center gap-x-2">
							<AiOutlinePlus />
							<h2 className="text-2xl text-primary">many more</h2>
						</article>
						<article>
							<Link to="/services" className="flex items-center gap-x-1 font-body">
								Explore all our services and treatments.
								<ChevronRight className="text-primary h-3 w-3"/>
							</Link>
						</article>
      		</div>
      	</article>
				<img className="hidden md:block w-full max-w-[500px]" src={HomeMedicalConditionsHero} alt="Medical Conditions treated" />
      </div>
			<div className="text-center py-10">
				<div className="relative">
					<h2 className="text-4xl md:text-6xl">Get your first year of membership for <span className="line-through">$359</span> $289</h2>
					{/* <div className="absolute -top-6 right-[23rem] w-[2px] h-28 bg-primary transform rotate-45"></div> */}
				</div>
				<p className="text-lg font-body py-4">Receive immediate personalized and human medical follow-up by registering with MDHub.</p>
				<div className="flex justify-center">
					<Link to="/register">
						<Button wide gradient>
							<span>Sign Up Today</span>
						</Button>
					</Link>
				</div>
			</div>
			<section className="for-you-bg py-10 3xl:py-20">
				<div className="relative z-10 w-full max-w-[1160px] text-3xl mx-auto md:h-[400px]  flex flex-col md:flex-row items-center text-white px-4">
					<div className="space-y-6 text-center md:text-left">
						<h2 className="max-w-[450px] pb-">
							“{t('just-registered-for-a-membership-chose-a-doctor-and-made-a-same-day-appointment-at-faster-than-i-buy-my-morning-coffee')}”
						</h2>
						<h2>— {t('mdhub-member-in-montreal')}</h2>
						<div className="flex justify-center md:justify-start gap-x-4 text-white pb-8">
							<GoStar/>
							<GoStar/>
							<GoStar/>
							<GoStar/>
							<GoStar/>
						</div>
						<h2 className="font-main">Reviewing: Lab testing & diagnostics</h2>
					</div>
				</div>
			</section>
    </section>
  )
}

export default HomeMedicalConditionsSection
