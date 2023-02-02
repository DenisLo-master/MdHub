import React from 'react'
import { ForYouHeaderSection } from '../../sections'
import { ForYouImage01, ForYouImage02, ForYouImage03, ForYouImage04, ArrowIcon } from '../../assets'

const ForYou = () => {
  return (
    <section>
      <ForYouHeaderSection />
      <section className="w-full max-w-[1130px] mx-auto py-10 font-main">
        <div className="space-y-6">
          <h2 className="text-4xl">Lorem ipsum dolor.</h2>
          <p className="font-body font-light">Lorem ipsum dolor sit amet consectetur. Rhoncus sed imperdiet mauris facilisi at imperdiet hendrerit enim. Sed fames pharetra sagittis pellentesque ullamcorper amet dolor pellentesque. Amet enim dictum ut et eu nulla vitae cras varius. Consectetur aliquet cras sit aliquam a faucibus at. Tortor nunc amet vel ipsum congue. Amet in tristique vitae ultrices mi tempus egestas vitae ac. Eget euismod vel etiam elementum laoreet etiam amet viverra. Blandit scelerisque elementum euismod nullam massa ullamcorper tellus donec amet. Pretium tincidunt hendrerit morbi id pellentesque ac facilisis. Ut nec nulla dignissim convallis sit sit donec. Et nullam sed porttito.</p>
          <button className={`rounded-full text-lg shadow-cardService group hover:ring-1 hover:ring-primary px-10 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
            Sign Up Today
          </button>
        </div>

        <div className="flex justify-center py-16">
          <article className="p-12 px-14 bg-[#f9f9f9] shadow-cardService rounded-tl-3xl rounded-bl-3xl">
            <h2 className="text-4xl pb-6">Lorem ipsum dolor.</h2>
            <div className="font-body text-sm max-w-[350px] space-y-6">
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus sed imperdiet mauris facilisi at imperdiet hendrerit enim. Sed fames pharetra sagittis pellentesque ullamcorper amet dolor pellentesque. Amet enim dictum ut et eu nulla vitae cras varius. Consectetur aliquet cras sit aliquam a faucibus at. Tortor nunc amet vel ipsum congue. Amet in tristique vitae ultrices mi tempus egestas vitae ac. Eget euismod vel etiam elementum laoreet etiam amet viverra.
              </p>

              <p>
                Blandit scelerisque elementum euismod nullam massa ullamcorper tellus donec amet. Pretium tincidunt hendrerit morbi id pellentesque ac facilisis. Ut nec nulla dignissim convallis sit sit donec. Et nullam sed porttito.  Eget euismod vel etiam elementum laoreet etiam amet viverra. Blandit scelerisque elementum.
              </p>

              <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-12 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent font-main`}>
                Learn More
              </button>

            </div>
          </article>
          <article>
            <img className="max-w-[650px] h-full" src={ForYouImage01} alt="For You" />
          </article>
        </div>

        <div className="py-14 flex justify-center gap-x-8 text-white text-2xl font-main">
          <article className="relative">
            <img src={ForYouImage02} alt="For You" />
            <div className="absolute flex space-x-2 items-center left-4 bottom-4">
              <span>Learn More</span>
              <ArrowIcon />
            </div>
          </article>
          <article className="relative">
            <img src={ForYouImage03} alt="For You" />
            <div className="absolute flex space-x-2 items-center left-4 bottom-4">
              <span>Learn More</span>
              <ArrowIcon />
            </div>
          </article>
          <article className="relative">
            <img src={ForYouImage04} alt="For You" />
            <div className="absolute flex space-x-2 items-center left-4 bottom-4">
              <span>Learn More</span>
              <ArrowIcon />
            </div>
          </article>
        </div>

        <div className="py-10 space-y-6">
          <h2 className="text-4xl">Lorem ipsum dolor.</h2>
          <p className="font-body font-light text-sm">
            Lorem ipsum dolor sit amet consectetur. Rhoncus sed imperdiet mauris facilisi at imperdiet hendrerit enim. Sed fames pharetra sagittis pellentesque ullamcorper amet dolor pellentesque. Amet enim dictum ut et eu nulla vitae cras varius. Consectetur aliquet cras sit aliquam a faucibus at. Tortor nunc amet vel ipsum congue. Amet in tristique vitae ultrices mi tempus egestas vitae ac. Eget euismod vel etiam elementum laoreet etiam amet viverra.
          </p>
        </div>
      </section>
    </section>
  )
}

export default ForYou