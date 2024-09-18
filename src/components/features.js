import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Features = () => {
  return (
    <section>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:order-last">
            <h2 className="text-3xl font-bold mb-4 text-dark-navy">AI-Powered Search</h2>
            <p className="text-lg text-gray-700">Leverage the latest LLM technologies to provide more accurate and relevant search results for your customers.</p>
          </div>
          <div className="md:w-1/2">
            <StaticImage
              src="../images/icon1.png"
              alt="AI-Powered Search Illustration"
              placeholder="blurred"
              layout="constrained"
              width={600}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="py-16 bg-tertiary">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-dark-navy">Dynamic Search Listings</h2>
            <p className="text-lg text-gray-700">Break free from traditional search listing pages with our innovative, intuitive interface that adapts to user preferences.</p>
          </div>
          <div className="md:w-1/2">
            <StaticImage
              src="../images/feature-2.png"
              alt="Dynamic Search Listings Illustration"
              placeholder="blurred"
              layout="constrained"
              width={600}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:order-last">
            <h2 className="text-3xl font-bold mb-4 text-dark-navy">Enhanced User Experience</h2>
            <p className="text-lg text-gray-700">Provide a seamless and enjoyable shopping experience that keeps customers coming back for more.</p>
          </div>
          <div className="md:w-1/2">
            <StaticImage
              src="../images/feature-3.png"
              alt="Enhanced User Experience Illustration"
              placeholder="blurred"
              layout="constrained"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="py-16 bg-tertiary">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-dark-navy">Onboarding process</h2>
            <p className="text-lg text-gray-700">A structured 8-step workflow to get you up and running.</p>
          </div>
          <div className="md:w-1/2">
            <StaticImage
              src="../images/jadu-onboarding.png"
              alt="Dynamic Search Listings Illustration"
              placeholder="blurred"
              layout="constrained"
              width={600}
              height={850}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features