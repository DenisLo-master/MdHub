import React from 'react'
import { HomeMedicalConditionsHero, ArrowIcon, ChevronRight, ForYouBottom } from '../../assets'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { GoStar } from 'react-icons/go'
import { AiOutlinePlus } from 'react-icons/ai'
import { ArrowRight } from '../../assets'
import { ArrowGradient } from '../../assets'
const HomeMedicalConditionsSection = () => {
	const { t } = useTranslation()
  return (
		<section className="font-main bg-home-gradient-reverse">
			<div className="w-full max-w-7xl mx-auto px-8">
				<h2 className="text-4xl md:text-5xl">{t('medical-conditions-treated')}</h2>
				<p className="w-full py-4 font-body text-xl">
					{t('at-mdhub-we-care-for-everything-from-common-illnesses-to-chronic-diseases-and-mental-health-concerns-we-can-now-treat-a-majority-of-health-conditions-by-coupling-virtual-care-with-physical-diagnostics-with-mobile-nursing-care-patients-can-forget-the-limited-virtual-care-stigma-and-benefit-from-advance-and-proactive-control-of-their-health')}
				</p>
				<div className="flex flex-col-reverse gap-y-4 md:flex-row items-start text-left">
					<article className="flex-1">
						<h2 className="text-3xl text-dark pb-4">{t('our-treatments-include')}</h2>
						<div className="max-w-[500px] space-y-4">
							<article>
								<h2 className="text-2xl text-primary pb-2">{t('wellness-and-prevention')}</h2>
								<p className="font-body text-sm">
									{t('well-help-you-get-healthy-and-stay-that-way-with-state-of-the-art-screening-disease-prevention-and-lifestyle-advice')}
								</p>
							</article>
							<article>
								<h2 className="text-2xl text-primary pb-2">{t('everyday-care')}</h2>
								<p className="font-body text-sm">
									{t('wake-up-with-the-flu-or-a-questionable-rash-we-diagnose-and-treat-a-wide-spectrum-of-illnesses-so-you-get-the-care-you-need-without-having-to-visit-the-emergency-room-or-see-specialists-no-need-for-family-doctors-all-our-doctors-are-here-for-your-family-with-constant-access-to-your-medical-history-in-one-place')}
								</p>
							</article>
							<article>
								<h2 className="text-2xl text-primary pb-2">{t('access-to-specialists')}</h2>
								<p className="font-body text-sm">
									{t('have-a-specific-or-advanced-condition-select-and-get-referrals-to-a-wide-a-array-of-medical-specialists-qualified-to-diagnose-and-treat-advance-care-requirements')}
								</p>
							</article>
							<article>
								<h2 className="text-2xl text-primary pb-2">{t('chronic-conditions')}</h2>
								<p className="font-body text-sm">
									{t('chronic-conditions-like-diabetes-hypertension-and-obesity-can-be-difficult-to-manage-and-prevent-on-your-own-our-doctors-are-here-to-make-it-easier-with-the-support-and-resources-you-need-to-find-your-way-to-better-health')}
								</p>
							</article>
							<article>
								<h2 className="text-2xl text-primary pb-2">{t('mental-health-0')}</h2>
								<p className="font-body text-sm">
									{t('your-mental-health-is-an-important-part-of-the-full-picture-whether-youre-feeling-off-or-experiencing-depression-anxiety-insomnia-or-something-more-complex-our-suite-of-mental-health-services-is-here-to-help-in-addition-free-access-to-headspace-is-available-with-memberships')}
								</p>
							</article>

							<article className="text-primary flex items-center gap-x-2">
								<ArrowGradient className="transform scale-110 rotate-[50deg]" />
								<h2 className="text-2xl text-primary">{t('many-more-0')}</h2>
							</article>
							<article>
								<Link to="/services" className="flex gap-x-1 font-body font-semibold">
									<span className="pt-1">{t('explore-all-our-services-and-treatments')}</span>
									<ChevronRight className="text-primary w-4" />
								</Link>
							</article>
						</div>
					</article>
					<img className="hidden md:block w-full max-w-[600px]" src={HomeMedicalConditionsHero} alt="Medical Conditions treated" />
				</div>
			</div>
			<div className="text-center py-10 px-8">
				<div>
					<h2 className="text-4xl md:text-6xl text-center px-4 pb-7">{t('get-your-first-year-of-membership-for')} <span className="price">$359</span> $289</h2>
					{/* <div className="absolute -top-6 right-[24%] 3xl:right-[28%] w-[2px] h-28 bg-primary transform rotate-45"></div> */}
				</div>
				<p className="text-lg font-body p-4">{t('receive-immediate-personalized-and-human-medical-follow-up-by-registering-with-mdhub')}</p>
				<div className="flex justify-center">
					<Link to="/register">
						<button className="border border-primary text-white rounded-full group hover:ring-1 hover:ring-primary  py-2  flex justify-center items-center space-x-2  bg-[#1EBC91] px-12">
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
