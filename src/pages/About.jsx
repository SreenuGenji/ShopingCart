import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>give desc about colths about page
              Ah, I see! You're looking for a description for an "About" page for a clothing e-commerce website. Here’s a polished and engaging example for you:

               About Us

              Welcome to Fashion Fusion, your one-stop destination for all things stylish and trendy. At Fashion Fusion, we believe that fashion is more than just clothing; it's a way of expressing who you are without saying a word. Our journey began with a simple vision: to provide high-quality, fashionable clothing at accessible prices.</p>
           <p>At Fashion Fusion, we don't just sell clothes; we create a community of fashion lovers. Follow us on social media for the latest updates, style tips, and exclusive offers. Sign up for our newsletter to stay in the loop and receive special discounts.</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Another major e-commerce platform in India, Flipkart offers a wide range of clothing and accessories for men, women, and kids. They also have frequent sales and discounts.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div  className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>While the barbershop aims to bring the gap between timeless interior design and traditional craftsmanship, the website follows this strong gimmick. With clean code</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>These platforms are great for finding a variety of clothing options, from casual wear to formal attire, and they often have sales and discounts to help you save money. Happy shopping! 😊</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>While Amazon is a general e-commerce platform, it has a vast selection of clothing and accessories from various brands, making it a convenient one-stop-shop for fashion items.</p>
        </div>
        </div>

        <NewsletterBox />
    </div>
  )
}

export default About