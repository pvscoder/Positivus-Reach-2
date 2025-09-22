import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import {Navberlink} from "~/components/home/navber_footer/nav"
import {FooterLink} from "~/components/home/navber_footer/footer";
import {TitleLink} from "~/components/home/titlelink/titlelink";
import {TeamMember} from "~/components/home/teammember"
import { ContactUs,Contact } from "~/components/home/contactus";
import { Testimonials } from "~/components/home/testimonials/testimonials";
import { BannerLink } from "~/components/home/banner";
import { Accordion } from "~/components/home/accordion";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export function Welcome() {
  return (
    <>
      <Navberlink/>
      
      <section>
        <div className="container mt-15.5 md:17.5">
          <div className="w-full flex flex-col lg:flex-row justify-between ">  
            
            <div className="w-full lg:w-[600px] flex justify-center items-center hidden lg:block">
              <img src="img/banner/Illustration.svg" alt=""/>
            </div>    
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between ">
            
            <div className="w-full lg:w-[600px]">
              <div className="flex flex-col text-start items-center md:block">
                <div className="font-medium text-6xl pt-2">
                  Navigating the <br className="hidden lg:block"/> digital landscape <br className="hidden lg:block"/> for success
                </div>
                <div className="lg:hidden">
                  <img src="img/banner/illustration.svg" alt=""/>
                </div>
                <div className="text-xl font-normal py-8.75">
                  Our digital marketing agency helps businesses <br className="hidden lg:block"/>grow and succeed online through a range of <br className="hidden lg:block"/> services including SEO, PPC, social media marketing, <br className="hidden lg:block"/>and content creation.
                </div>
                <div className="w-full md:block">
                  <button className="w-full md:w-[264px] cursor-pointer text-xl font-normal border bg-black text-white py-4 rounded-2xl hover:bg-[#404040] text-center">
                    Book a consultation
                  </button>
                </div>                      
              
              </div>
            </div>
      
            
            <div className="w-full lg:w-[600px] flex justify-center items-center hidden lg:block">
              <img src="img/banner/illustration.svg" alt=""/>
            </div>    
          </div>

          <div>
            <div className=" mt-17.5">
              <Swiper slidesPerView={5}>
                  {[
                      { photo: "img/company_logo/amazon.svg", logoname: "amazon" },
                      { photo: "img/company_logo/hobspot.svg", logoname: "hobspot" },
                      { photo: "img/company_logo/netflix.svg", logoname: "netflix" },
                      { photo: "img/company_logo/notion.svg", logoname: "notion" },
                      { photo: "img/company_logo/vector.svg", logoname: "vector" },
                      { photo: "img/company_logo/zoom.svg", logoname: "zoom" },
                  ].map((banner, index) => (
                    <SwiperSlide>
                      <BannerLink key={index} photo={banner.photo} logoname={banner.logoname} />
                    </SwiperSlide>
                  ))}
              </Swiper>
              
                          
              <div className="banner-slider swiper">
                <div className="swiper-wrapper ">

                </div>

                <div className="hidden">
                  <div className="swiper-button-next "></div>
                  <div className="swiper-button-prev "></div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-17.5 md:mt-35">
          <TitleLink title="Services" Description="At our digital marketing agency, we offer a range of services to" DescriptionTwo="help businesses grow and succeed online. These services include:"/>            
            
          <div>
            <div className="relative">
              <div className="mt-30.75 bg-[#F3F3F3] rounded-[45px] flex justify-between items-center px-15 py-15">
                <div>
                  <div className="text-lg md:text-3xl font-medium">Let’s make things happen</div>
                  <div className="text-base md:text-lg font-normal py-6.5">
                      Contact us today to learn more about how our digital <br className="hidden md:block"/>marketing services can help your business grow and <br className="hidden md:block"/> succeed online.
                  </div>
                  <div>
                      <button className="bg-[#000] text-white font-normal text-lg px-10 py-3.75 rounded-lg hover:bg-[#404040] cursor-pointer">
                      Get your free proposal
                      </button>
                  </div>     
                
                </div>
      
              </div>     
            <div className="absolute right-0 top-[-25px] ">
                <div className="hidden lg:block">
                <svg width="494" height="395" viewBox="0 0 494 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M169 163.5C215.644 163.5 257.858 167.471 288.398 173.887C303.673 177.095 316 180.91 324.497 185.13C328.746 187.24 332.011 189.439 334.208 191.694C336.403 193.948 337.5 196.222 337.5 198.5C337.5 200.778 336.403 203.052 334.208 205.306C332.011 207.561 328.746 209.76 324.497 211.87C316 216.09 303.673 219.905 288.398 223.113C257.858 229.529 215.644 233.5 169 233.5C122.356 233.5 80.1417 229.529 49.6016 223.113C34.3275 219.905 21.9997 216.09 13.5029 211.87C9.25392 209.76 5.98872 207.561 3.79199 205.306C1.59696 203.052 0.5 200.778 0.5 198.5C0.5 196.222 1.59696 193.948 3.79199 191.694C5.98872 189.439 9.25392 187.24 13.5029 185.13C21.9997 180.91 34.3275 177.095 49.6016 173.887C80.1417 167.471 122.356 163.5 169 163.5Z" stroke="black"/>
                    <path d="M169 188.5C215.644 188.5 257.858 192.471 288.398 198.887C303.673 202.095 316 205.91 324.497 210.13C328.746 212.24 332.011 214.439 334.208 216.694C336.403 218.948 337.5 221.222 337.5 223.5C337.5 225.778 336.403 228.052 334.208 230.306C332.011 232.561 328.746 234.76 324.497 236.87C316 241.09 303.673 244.905 288.398 248.113C257.858 254.529 215.644 258.5 169 258.5C122.356 258.5 80.1417 254.529 49.6016 248.113C34.3275 244.905 21.9997 241.09 13.5029 236.87C9.25392 234.76 5.98872 232.561 3.79199 230.306C1.59696 228.052 0.5 225.778 0.5 223.5C0.5 221.222 1.59696 218.948 3.79199 216.694C5.98872 214.439 9.25392 212.24 13.5029 210.13C21.9997 205.91 34.3275 202.095 49.6016 198.887C80.1417 192.471 122.356 188.5 169 188.5Z" stroke="black"/>
                    <path d="M169 213.5C215.644 213.5 257.858 217.471 288.398 223.887C303.673 227.095 316 230.91 324.497 235.13C328.746 237.24 332.011 239.439 334.208 241.694C336.403 243.948 337.5 246.222 337.5 248.5C337.5 250.778 336.403 253.052 334.208 255.306C332.011 257.561 328.746 259.76 324.497 261.87C316 266.09 303.673 269.905 288.398 273.113C257.858 279.529 215.644 283.5 169 283.5C122.356 283.5 80.1417 279.529 49.6016 273.113C34.3275 269.905 21.9997 266.09 13.5029 261.87C9.25392 259.76 5.98872 257.561 3.79199 255.306C1.59696 253.052 0.5 250.778 0.5 248.5C0.5 246.222 1.59696 243.948 3.79199 241.694C5.98872 239.439 9.25392 237.24 13.5029 235.13C21.9997 230.91 34.3275 227.095 49.6016 223.887C80.1417 217.471 122.356 213.5 169 213.5Z" stroke="black"/>
                    <path d="M252.343 66.6289L252.511 67.5342L253.179 66.9004L300.312 22.1758L272.341 80.8232L271.944 81.6543L272.857 81.5342L337.277 73.0547L280.177 104.061L279.367 104.5L280.177 104.939L337.277 135.944L272.857 127.466L271.944 127.346L272.341 128.177L300.312 186.823L253.179 142.1L252.511 141.466L252.343 142.371L240.5 206.259L228.657 142.371L228.489 141.466L227.821 142.1L180.688 186.823L208.659 128.177L209.056 127.346L208.143 127.466L143.722 135.944L200.823 104.939L201.633 104.5L200.823 104.061L143.722 73.0547L208.143 81.5342L209.056 81.6543L208.659 80.8232L180.688 22.1758L227.821 66.9004L228.489 67.5342L228.657 66.6289L240.5 2.74023L252.343 66.6289Z" stroke="black"/>
                    <path d="M277 177L294.789 222.06L341.11 207.874L316.972 249.877L356.944 277.247L309.055 284.563L312.578 332.879L277 300L241.422 332.879L244.945 284.563L197.056 277.247L237.028 249.877L212.89 207.874L259.211 222.06L277 177Z" fill="#D9D9D9"/>
                    <path d="M112.194 306.102L135.134 264L158.258 306.102L200.269 329.134L158.258 352.166L135.134 394.269L112.194 352.166L70 329.134L112.194 306.102Z" fill="#B9FF66"/>
                    <circle cx="152.5" cy="186.5" r="62" fill="black" stroke="black"/>
                    <ellipse cx="132" cy="173" rx="10" ry="20" fill="white"/>
                    <ellipse cx="173" cy="173" rx="10" ry="20" fill="white"/>
                </svg>
        
                </div>
    
            </div>  
    
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-17.5 md:mt-35">
          <TitleLink title="Case Studies" Description="Explore Real-Life Examples of Our Proven Digital Marketing " DescriptionTwo=" Success through Our Case Studies"/> 

          <div className="hidden lg:block pt-20">
            <div className="bg-[#191A23] border rounded-4xl gap-12.5 py-20 px-15 flex">
              <div className="border-r border-[#fff] px-16">
                <div className="font-normal text-lg text-[#fff]">
                  For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                </div>
                <div className="pt-5">
                  <a href="#">
                    <div className="flex items-center gap-3.75 text-green">
                      <div className="font-normal text-xl">
                        Learn more
                      </div>
                      <div>
                        <img src="img/icon/1.svg" alt=""/>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            
              <div className="border-r border-[#fff] px-16">
                <div className="font-normal text-lg text-[#fff]">
                  For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                </div>
                <div className="pt-5">
                  <a href="#">
                    <div className="flex items-center gap-3.75 text-green">
                      <div className="font-normal text-xl">
                        Learn more
                      </div>
                      <div>
                        <img src="img/icon/1.svg" alt=""/>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            
              <div className="px-16">
                <div className="font-normal text-lg text-[#fff]">
                  For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
                </div>
                <div className="pt-5">
                  <a href="#">
                    <div className="flex items-center gap-3.75 text-green">
                      <div className="font-normal text-xl">
                        Learn more
                      </div>
                      <div>
                        <img src="img/icon/1.svg" alt=""/>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-10 ml-6.5">
          <div>
            <div className="threeimonial-slider mySwiper swiper">
              <div className="swiper-wrapper" >
                
                <div  className="swiper-slide h-auto!">
                  <div className="border-[#fff] p-16 border rounded-[45px] bg-[#191A23] h-full">
                    <div className="font-normal text-sm text-[#fff]">
                      For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                    </div>
                    
                    <div className="pt-5">
                      <a href="#">
                        <div className="flex items-center gap-3.75 text-green">
                          <div className="font-normal text-lg">
                            Learn more
                          </div>
                          <div>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L2 15L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2 15L2.75 16.299L20.0705 6.29904L19.3205 5L18.5705 3.70096L1.25 13.701L2 15Z" fill="#B9FF66"/>
                            </svg>
                          </div>  
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
        
        
                <div  className="swiper-slide h-auto!">
                  <div className="border-[#fff] p-16 border rounded-[45px] bg-[#191A23] h-full">
                    <div className="font-normal text-sm text-[#fff]">
                      For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                    </div>
                    
                    <div className="pt-5">
                      <a href="#">
                        <div className="flex items-center gap-3.75 text-green">
                          <div className="font-normal text-lg">
                            Learn more
                          </div>
                          <div>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L2 15L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2 15L2.75 16.299L20.0705 6.29904L19.3205 5L18.5705 3.70096L1.25 13.701L2 15Z" fill="#B9FF66"/>
                            </svg>
                          </div>  
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
        
        
                <div  className="swiper-slide h-auto!">
                  <div className="border-[#fff] p-16 border rounded-[45px] bg-[#191A23] h-full">
                    <div className="font-normal text-sm text-[#fff]">
                      For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
                    </div>
                    
                    <div className="pt-5">
                      <a href="#">
                        <div className="flex items-center gap-3.75 text-green">
                          <div className="font-normal text-lg">
                            Learn more
                          </div>
                          <div>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L2 15L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2 15L2.75 16.299L20.0705 6.29904L19.3205 5L18.5705 3.70096L1.25 13.701L2 15Z" fill="#B9FF66"/>
                            </svg>
                          </div>  
                        </div>
                      </a>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
      
        </div>        
        
      </section>  

      <section>
        <div className="container mt-17.5 md:mt-35">
          <TitleLink
            title="Our Working Process"
            Description="Step-by-Step Guide to Achieving"
            DescriptionTwo="Your Business Goals"
          />
          <div className="mt-20">
          {[
            { title: "Consultation", number: "01", },
            { title: "Research and Strategy Development", number: "02" },
            { title: "Implementation", number: "03", },
            { title: "Monitoring and Optimization", number: "04" },
            { title: "Reporting and Analysis", number: "05"},
            { title: "Continual Improvement", number: "06"},


          ].map((item, index) => (
            <Accordion
              key={index}
              number={item.number}
              title={item.title}
              description={'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts...'}
            />
          ))}

          </div>
        </div>
      </section>


      <section>
        <div className="container mt-17.5 md:mt-35">
          <TitleLink title="Team" Description="Meet the skilled and experienced team behind our " DescriptionTwo=" successful digital marketing strategies"/>        

          <div className="mt-10 lg:mt-20">
            <div className="gap-10 pb-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
              {[
                { photo:"/img/team/1.svg", name: "John Smith", position: "CEO and Founder", exp: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy" },

                { photo:"/img/team/2.svg", name: "Jane Doe", position: "Director of Operations", exp: "7+ years of experience in project management and team leadership. Strong organizational and communication skills" },

                { photo: "/img/team/3.svg", name: "Michael Brown", position: "Senior SEO Specialist", exp: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization" },

                { photo: "/img/team/4.svg", name: "Emily Johnson", position: "PPC Manager", exp: " 3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis" },

                { photo: "/img/team/5.svg", name: "Brian Williams", position: "Social Media Specialist", exp: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement" },

                { photo: "/img/team/6.svg", name: "Sarah Kim", position: "Content Creator", exp: " 2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries" },


              ].map((member, index) => (
                <TeamMember key={index} photo={member.photo} name={member.name} position={member.position} exp={member.exp}/>
              ))
              }

            </div>
            <div className="flex justify-end">
              <button className=" w-full md:w-[187px] h-[68px] bg-[#000] text-white font-normal text-lg  rounded-2xl hover:bg-[#404040] cursor-pointer">
                See all team
              </button>
            </div>
          </div>
          

        </div>
      </section>

      <section>
        <div className="container mt-12.5 md:mt-25">
          <TitleLink title="Testimonials" Description="Hear from Our Satisfied Clients: Read Our Testimonials" DescriptionTwo="to Learn More about Our Digital Marketing Services"/> 
            
          <div className="mt-15 md:20">
            <div className="bg-[#191A23] border rounded-[50px] gap-12.5 py-20 pt-5 md:pt-21 px-4 md:px-0">
              <Swiper slidesPerView={1.5}>
                  {[
                    { comment: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", position: "Marketing Director at XYZ Corp" },
                    { comment: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", position: "Marketing Director at XYZ Corp" },
                    { comment: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", position: "Marketing Director at XYZ Corp" },
                    { comment: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", position: "Marketing Director at XYZ Corp" },
                    { comment: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", position: "Marketing Director at XYZ Corp" },
                  ]
                  .map((testimonial, index) => (
                    <SwiperSlide>
                      <Testimonials key={index} comment={testimonial.comment} name={testimonial.name} position={testimonial.position}/>
                    </SwiperSlide>
                  ))
                  }

              </Swiper>
              <div className="testimonial-slider swiper" >
                <div className="swiper-wrapper">

                    
                </div>
                <div className="flex justify-center mt-31 px-4 md:px-0">
                  <div className="flex w-full max-w-lg items-center">
                        
                    <div className="swiper-button-prev static! after:hidden mt-0!">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z" fill="white"/>
                      </svg>    
                    </div>

                    <div className="swiper-pagination static! mt-2"></div>

                      
                    <div className="swiper-button-next static! w-auto h-auto after:hidden mt-0!">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z" fill="white"/>
                      </svg>    
                    </div>
                  </div>
                </div>
      
              </div>
                
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-35">
          <TitleLink title="Contact Us" Description=" Connect with Us: Let's Discuss Your" DescriptionTwo=" Digital Marketing Needs"/> 
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 rounded-[50px] mt-10 lg:bg-[#F3F3F3] mt-20">
                <div className="bg-[#F3F3F3] rounded-[50px] py-10 md:block w-full px-20 xl:w-2/3 pl-25 py-20">
                    
                    <div className="flex justify-center md:justify-start items-center gap-20 mb-15">
                        
                         < ContactUs title="Say Hi"/>
                         < ContactUs title="Get a Quote"/>

        
                    </div>
    
                    
                    <div className="flex flex-col justify-center gap-6">
                      <Contact title="Name" Input="text" Placeholder="Name"/>
                      <Contact title="Email*" Input="email" Placeholder="Email"/>

                        <div className="pt-6.25">
                            <p className="font-normal text-base">Message*</p>
                            <input type="text" placeholder="Message" className="border bg-white rounded-2xl w-full py-5 pl-7.5 mt-2 pb-37.25"/>
                        </div>
                        <div className="hidden md:block w-full lg:bl:block pt-6.25">
                            <button className="font-normal text-xl border rounded-2xl bg-black text-white px-10 py-5 hover:bg-[#404040] w-full cursor-pointer ">
                            Send Message
                            </button>
                        </div>
                    </div>      
                </div>
                <div className="w-full md:hidden">
                    <button className="font-normal text-xl border rounded-2xl bg-black text-white px-10 py-5 hover:bg-[#404040] w-full cursor-pointer ">
                        Send Message
                    </button>
                </div>
    
                <div className="hidden lg:block flex justify-end">
                    <img src="img/icon/13.svg" alt=""/>
                </div>
            </div>

          </div>
      </section>

      <FooterLink/>

    </>
  );
}
