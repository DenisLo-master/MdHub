import React from 'react'
import DescriptionGrid from '../../components/DescriptionGrid'
import { ServicesMedicalLaboratoryHero } from '../../assets'
import Button from '../../components/Button'

const ServicesMedicalLaboratory = () => {
  return (
    <section className="font-body text-gray-800 ">
      <DescriptionGrid
        title="Lab Testing"
        imageSrc={ServicesMedicalLaboratoryHero}
        reverse
      >
        <p>
          MD HUB offers a full range of certified laboratory testing to meet all your medical needs. Our members benefit from an affordable and efficient service with precise and fast results.
        </p>
        <p>
          Members with a lab requisition on hand may simply load it on our form bellow and select a preferred nurse testing time and date. Otherwise if you do not have a requisition form getting one on MD HUB is easy (Learn more)

        </p>
      </DescriptionGrid>

      <div className="w-full max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-main">
          Laboratory Request Form
        </h2>
        <form className="w-full py-10 space-y-2">
          <div className="flex space-x-8">
            <input className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary" type="text" name="firstName" placeholder="First Name" />
            <input className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary" type="tel" name="phoneNu,ber" placeholder="Phone Number" />
          </div>

          <div className="flex space-x-8">
            <input className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary" type="text" name="lastName" placeholder="Last Name" />
            <input className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary" type="email" name="emailAdress" placeholder="Email Address" />
          </div>

          <div className="flex space-x-8">
            <input className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary" type="text" name="preferredDate" placeholder="Preferred Date (DD/MM/YYY)" />
            <input className="px-4 py-2 flex-1 border rounded-lg outline-none focus:ring ring-primary" type="text" name="preferredTime" placeholder="Preferred Time" />
          </div>

          <div className="flex space-x-8 pt-4">
            <div className="flex-1 flex space-x-4 text-base font-main">
            <Button fullWidth>
              Upload Requisition File
            </Button>
            <Button fullWidth>
              Submit Form
            </Button>
            </div>
            <div className="flex-1 flex">
            <Button fullWidth>
              Continue Booking
            </Button>
            </div>
          </div>
        </form>

        <section className="py-10 text-center text-body text-light">
          <p>IF YOU DO NOT HAVE a requisition, click here to <strong className="font-semibold">SEE A VIRTUAL DOCTOR NOW</strong></p>

          <p className="py-8">Upon submitting your requisition form our team will contact you to confirm your booking within 24-48 hours. All Lab test are subject to a minimum nursing fee of $99 for members and $149 for non-members, which include a nurse visit to your</p>

          <p className="font-semibold"> NOTE: ONLY CANADIAN REQUISITIONS WILL BE ACCEPTED</p>
        </section>
      </div>
    </section>
  )
}

export default ServicesMedicalLaboratory