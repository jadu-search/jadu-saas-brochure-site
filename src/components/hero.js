import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-tertiary via-tertiary to-tertiary text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 mr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock the power of intelligent search
          </h1>
          <p className="text-xl mb-8">
            Enhance user experience and boost conversions with our AI-powered search engine for e-commerce
          </p>
          <button
            className="bg-tertiary text-primary-dark font-bold py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300"
            onClick={() => {
              const form = document.getElementById('contact-form');
              form.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request Demo
          </button>
        </div>
        <div className="md:w-1/2">
          <StaticImage
            src="../images/Jadu_hero (1).png"
            alt="E-commerce search illustration"
            placeholder="blurred"
            layout="constrained"
            width={1300}
            height={600}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero