import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ForYouHeaderSection } from '../../sections'
import { ForFamilyGrid01, ForFamilyGrid02, ForFamilyGrid03, ForFamilyGrid04, ForFamilyGrid05, ForFamilyGrid06, OkIcon } from '../../assets'
import FAQ from '../../components/FAQ'
import { forYouFAQData } from '../../constants'

const ForFamily = () => {
  const { t } = useTranslation()
  return (
    <section className="md:mt-[120px] font-main">
      <ForYouHeaderSection family />
      <section className="w-full px-4 text-center md:text-left py-10 md:w-[clamp(60rem,80vw,95rem)] mx-auto flex flex-col gap-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 font-body text-center">
          <article className="shadow-cardService p-8 rounded-[8px] flex flex-col items-center">
            <div className="w-[123px] h-[123px] flex justify-center items-center">
              <img src={ForFamilyGrid01} alt={t('24-7-care')} />
            </div>
            <div className="flex flex-col gap-y-3">
              <h2 className="text-lg font-semibold">{t('24-7-care')}</h2>
              <p>{t('chat-with-compassionate-providers-24-7-over-video-and-schedule-doctor-appointments-easily-online-no-lost-sleep-here')}</p>
            </div>
          </article>

          <article className="shadow-cardService p-8 rounded-[8px] flex flex-col items-center">
            <div className="w-[123px] h-[123px] flex justify-center items-center">
              <img src={ForFamilyGrid02} alt={t('healthcare-specialists')} />
            </div>
            <div className="flex flex-col gap-y-3">
              <h2 className="text-lg font-semibold">{t('healthcare-specialists')}</h2>
              <p>{t('specialized-doctors-can-be-hard-to-find-in-canada-and-can-take-weeks-or-months-to-see-mdhub-allows-you-to-get-personalized-care-from-specialists-fast')}</p>
            </div>
          </article>

          <article className="shadow-cardService p-8 rounded-[8px] flex flex-col items-center">
            <div className="w-[123px] h-[123px] flex justify-center items-center">
              <img src={ForFamilyGrid03} alt={t('convenient-locations')} />
            </div>
            <div className="flex flex-col gap-y-3">
              <h2 className="text-lg font-semibold">{t('convenient-locations')}</h2>
              <p>{t('youll-be-matched-with-locations-in-your-area-if-anyone-in-your-family-requires-an-in-person-appointment-to-help-save-you-time')}</p>
            </div>
          </article>

          <article className="shadow-cardService p-8 rounded-[8px] flex flex-col items-center">
            <div className="w-[123px] h-[123px] flex justify-center items-center">
              <img src={ForFamilyGrid04} alt={t('healthcare-in-your-hands')} />
            </div>
            <div className="flex flex-col gap-y-3">
              <h2 className="text-lg font-semibold">{t('healthcare-in-your-hands')}</h2>
              <p>{t('our-membership-allows-you-to-advocate-for-your-whole-familys-health-and-put-the-power-in-their-hands-plus-youll-be-setting-a-great-example')}</p>
            </div>
          </article>

          <article className="shadow-cardService p-8 rounded-[8px] flex flex-col items-center">
            <div className="w-[123px] h-[123px] flex justify-center items-center">
              <img src={ForFamilyGrid05} alt="{t('cohesive-one-stop-care')}" />
            </div>
            <div className="flex flex-col gap-y-3">
              <h2 className="text-lg font-semibold">{t('cohesive-one-stop-care')}</h2>
              <p>{t('its-hard-to-keep-track-of-your-familys-files-and-health-history-using-our-platform-your-family-doctors-will-have-everything-they-need-all-in-one-place')}</p>
            </div>
          </article>

          <article className="shadow-cardService p-8 rounded-[8px] flex flex-col items-center">
            <div className="w-[123px] h-[123px] flex justify-center items-center">
              <img src={ForFamilyGrid06} alt="{t('your-health-arsenal')}" />
            </div>
            <div className="flex flex-col gap-y-3">
              <h2 className="text-lg font-semibold">{t('your-health-arsenal')}</h2>
              <p>{t('whatever-your-family-is-dealing-with-our-memberships-can-help-with-our-online-pharmacy-prescription-delivery-and-access-to-specialists')}</p>
            </div>
          </article>
        </div>

        <div className="w-full py-8 md:py-20 px-4 md:px-0 text-center md:text-left mx-auto flex flex-col justify-between gap-y-4">
          <h2 className="text-5xl font-main">
            {t('Membership Benefits')}
          </h2>
          <p className="font-body">
            {t('raising-a-family-can-be-challenging-but-were-always-by-your-side-gain-peace-of-mind-when-it-comes-to-those-you-love-most-with-a-family-plan-family-memberships-start-at-39-99-when-you-sign-up-for-12-months-with-mdhub')}
          </p>
          <div>
            <button className="text-xl px-10 h-[48px] bg-[#1EBC91] hover:bg-white text-white hover:text-dark rounded-[48px] border border-[#1EBC91] transition-all ease-out duration-300" type="button">
              <Link to="/register">
                {t('sign-up-today')}
              </Link>
            </button>
          </div>
        </div>

        <article className="bg-primary text-white py-10 px-4 lg:px-20 rounded-lg bg-linearGradientPrimary shadow-cardService">
          <h2 className="text-5xl text-center font-main pb-4">What We Can Help With</h2>
          <ul className="hidden font-body md:grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-2 justify-between space-y-4 font-light text-lg grid-list">
            <li className="flex items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div>
              <span>{t('routine-checkups')}</span>
            </li>
            <div>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('parenting-support')}</span>
              </li>
            </div>
            <li className="flex items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('nutrition')}</span>
            </li>
            <div>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('newborn-care')}</span>
              </li>
            </div>
            <li className="flex items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('cold-and-flu')}</span>
            </li>
            <div>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('infant-care')}</span>
              </li>
            </div>
            <li className="flex items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('fever-and-illnesses')}</span>
            </li>
            <div>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('minor-injuries')}</span>
              </li>
            </div>
            <li className="flex items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('ear-aches')}</span>
            </li>
            <div>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span className="text-left">{t('behaviour-issues-and-mental-health')}</span>
              </li>
            </div>
            <li className="flex items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('sinus-infections')}</span>
            </li>
            <div>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('concussions')}</span>
              </li>
            </div>
            <li className="flex items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('allergies-and-asthma')}</span>
            </li>
            <div>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('covid-19-testing')}</span>
              </li>
            </div>
            <li className="flex items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('rashes-and-skin-issues')}</span>
            </li>
            <div>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('routine-vaccinations')}</span>
              </li>
            </div>
            <li className="hidden md:block">
              <Link to="/rates">
                <button className="text-dark hover:text-white bg-white hover:bg-[#1EBC91] h-[48px] rounded-[48px] font-main px-10 transition-all ease-out duration-300" type="button">
                  {t('view-membership-plans')}
                </button>
              </Link>
            </li>
            <div>
              <li className="flex items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>+{t('much-more')}</span>
              </li>
            </div>
            <li className="block md:hidden">
              <Link to="/rates">
                <button className=" h-[48px] text-dark bg-white hover:bg-[#1EBC91] hover:text-white rounded-[48px] font-main px-10" type="button">
                  {t('view-membership-plans')}
                </button>
              </Link>
            </li>
          </ul>
          <ul className="md:hidden text-left gap-y-4 font-body text-lg font-light flex flex-col items-center">
            <li className="flex w-[222px] items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div>
              <span>{t('routine-checkups')}</span>
            </li>
            <li className="flex w-[222px] items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('parenting-support')}</span>
            </li>
            <li className="flex w-[222px] items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('nutrition')}</span>
            </li>
            <div>
              <li className="flex w-[222px] items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('newborn-care')}</span>
              </li>
            </div>
            <li className="flex w-[222px] items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('cold-and-flu')}</span>
            </li>
            <div>
              <li className="flex w-[222px] items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('infant-care')}</span>
              </li>
            </div>
            <li className="flex w-[222px] items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('fever-and-illnesses')}</span>
            </li>
            <div>
              <li className="flex w-[222px] items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('minor-injuries')}</span>
              </li>
            </div>
            <li className="flex w-[222px] items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('ear-aches')}</span>
            </li>
            <div>
              <li className="flex w-[222px] items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span className="text-left leading-[1.2em]">{t('behaviour-issues-and-mental-health-0')}</span>
              </li>
            </div>
            <li className="flex w-[222px] items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('sinus-infections')}</span>
            </li>
            <div>
              <li className="flex w-[222px] items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('concussions')}</span>
              </li>
            </div>
            <li className="flex w-[222px] items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('allergies-and-asthma')}</span>
            </li>
            <div>
              <li className="flex w-[222px] items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('covid-19-testing')}</span>
              </li>
            </div>
            <li className="flex w-[222px] items-center gap-x-5">
              <div>
                <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
              </div> <span>{t('rashes-and-skin-issues')}</span>
            </li>
            <div>
              <li className="flex w-[222px] items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>{t('routine-vaccinations')}</span>
              </li>
            </div>
            <div>
              <li className="flex w-[222px] items-center gap-x-5">
                <div>
                  <OkIcon className="w-[1.5rem] md:w-10 md:h-10" />
                </div> <span>+{t('much-more')}</span>
              </li>
            </div>
            <li className="block md:hidden pt-6">
              <Link to="/rates">
                <button className=" h-[48px] text-dark bg-white hover:bg-[#1EBC91] hover:text-white rounded-[48px] font-main px-10" type="button">
                  {t('view-membership-plans')}
                </button>
              </Link>
            </li>
          </ul>
        </article>

        <section className="py-10 font-body w-full max-w-[72rem] mx-auto flex flex-col gap-y-5 px-4">
          {
            forYouFAQData.map(faqItem => (
              <FAQ
                key={faqItem.id}
                question={t(`${faqItem.question}`)}
              >
                <p>
                  {t(`${faqItem.answer}`)}
                </p>
              </FAQ>
            ))
          }
        </section>
      </section>
    </section>
  )
}

export default ForFamily
