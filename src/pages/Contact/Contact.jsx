import React from 'react'
import { PhoneIcon, LocationIcon } from '../../assets'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <section className="md:pt-44 py-20 flex justify-center text-white px-4">
      <article className="w-full md:w-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-auto block bg-primary rounded-t-lg md:rounded-tl-[35px] md:rounded-bl-[35px] p-10 font-main space-y-4 md:h-[500px] shadow-cardService">
          <h1 className="text-4xl">Contact Us</h1>
          <ul>
            <li className='flex items-center gap-x-2'>
              <PhoneIcon className="w-4" /> <span>+1 514 88M-DHUB</span>
            </li>
            <li className='flex items-center gap-x-2'>
              <LocationIcon className="w-4" /> <span>Montreal, QC</span>
            </li>
          </ul>
        </div>
        <div className="w-full py-16 md:px-12 bg-[#f9f9f9] shadow-cardService rounded-[35px] text-gray-800 font-body">
          <form className="w-full px-4 space-y-4 md:w-[500px] text-gray-800">
            <h3 className="pb-4">{t('required-field')} *</h3>
            <div className="w-full relative">
              <p className="absolute left-0 -top-3">*</p>
              <input className="w-full px-6 py-3 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" type="text" placeholder={t('full-name')} />
            </div>
            <div className="w-full relative">
              <p className="absolute left-0 -top-3">*</p>
              <input className="w-full px-6 py-3 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" type="email" placeholder={t('your-email-address')} />
            </div>
            <div className="w-full">
              <input className="w-full px-6 py-3 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" type="text" placeholder={t('organization-company')} />
            </div>
            <div className="w-full">
              <textarea className="w-full h-[300px] p-6 border border-[#48ABC8] focus:shadow-input outline-none rounded-[20px]" placeholder={t('your-message-here')} />
            </div>
            <div className='w-full pt-3'>
              <button type="submit" className={`rounded-full font-main text-xl group hover:ring-1 hover:ring-primary px-12 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                {t('send-message')}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  )
}

export default Contact