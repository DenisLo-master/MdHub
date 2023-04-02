import React from 'react'
import { HomeMedicalConditionsHero, ArrowIcon, ChevronRight, ForYouBottom } from '../../assets'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { GoStar } from 'react-icons/go'
import { AiOutlinePlus } from 'react-icons/ai'
const HomeMedicalConditionsSection = () => {
	const { t } = useTranslation()
  return (
		<section className="font-main bg-home-gradient-reverse">
			<div className="w-full max-w-7xl mx-auto flex flex-col-reverse gap-y-4 md:flex-row items-start px-4 text-center md:text-left">
      	<article className="flex-1">
					<h2 className="text-5xl">{t('medical-conditions-treated')}</h2>
      		<p className="w-full max-w-[500px] py-4 font-body">
						{t('our-medical-team-can-treat-most-health-conditions-online-our-health-professionals-are-available-for-a-consultation-and-to-provide-prescriptions-for-common-chronic-care-conditions')}
      		</p>
      		<div className="max-w-[380px] space-y-4">
      			<article>
							<h2 className="text-2xl text-primary pb-2">{t('acute-care')}</h2>
							<p className="font-body text-sm">{t('our-healthcare-professionals-provide-tests-and-treatment-for-most-common-medical-problems')}
	      			</p>
      			</article>
      			<article>
							<h2 className="text-2xl text-primary pb-2">{t('chronic-care')}</h2>
	      			<p className="font-body text-sm">
								{t('our-healthcare-professionals-can-provide-you-with-a-consultation-or-a-prescription-for-most-common-chronic-illnesses-previously-diagnosed-0')}
	      			</p>
      			</article>
      			<article>
							<h2 className="text-2xl text-primary pb-2">{t('mental-health-0')}</h2>
	      			<p className="font-body text-sm">
								{t('our-healthcare-professionals-can-provide-you-with-a-consultation-or-a-prescription-for-most-common-chronic-illnesses-previously-diagnosed')}
	      			</p>
      			</article>
      			<article>
							<h2 className="text-2xl text-primary pb-2">{t('sexual-health')}</h2>
	      			<p className="font-body text-sm">
								{t('our-health-professionals-are-available-to-advise-you-and-prescribe-treatment-for-sexual-health-problems')}
	      			</p>
      			</article>
						<article className="text-primary flex items-center gap-x-2">
							<AiOutlinePlus />
							<h2 className="text-2xl text-primary">{t('many-more-0')}</h2>
						</article>
						<article>
							<Link to="/services" className="flex items-center gap-x-1 font-body">
								{t('explore-all-our-services-and-treatments')}
								<ChevronRight className="text-primary h-3 w-3"/>
							</Link>
						</article>
      		</div>
      	</article>
				<img className="hidden md:block w-full max-w-[500px]" src={HomeMedicalConditionsHero} alt="Medical Conditions treated" />
      </div>
			<div className="text-center py-10">
				<div>
					<h2 className="text-4xl md:text-6xl text-center px-4 pb-7">{t('get-your-first-year-of-membership-for')} <span className="price">$359</span> $289</h2>
					{/* <div className="absolute -top-6 right-[24%] 3xl:right-[28%] w-[2px] h-28 bg-primary transform rotate-45"></div> */}
				</div>
				<p className="text-lg font-body py-4">{t('receive-immediate-personalized-and-human-medical-follow-up-by-registering-with-mdhub')}</p>
				<div className="flex justify-center">
					<Link to="/register">
						<button className="border border-primary text-white rounded-full group hover:ring-1 hover:ring-primary  py-2  flex justify-center items-center space-x-2  bg-gradient-primary px-12">
							<span>{t('sign-up-today')}</span>
						</button>
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
						<h2 className="font-main">{t('reviewing-lab-testing-and-diagnostics')}</h2>
					</div>
				</div>
			</section>
    </section>
  )
}

export default HomeMedicalConditionsSection
