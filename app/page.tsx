import Image from "next/image";
import Header from "@/components/Header";
import Accordian from "@/components/Accordian";

export default function Home() {
  return (
    <div className="h-screen md:p-8 lg:p-16 max-w-screen-xl mx-auto">

      {/* header */}
      <Header></Header>

      {/* Navigating the digital landscape for success */}
      <section className="md:hidden p-4">
        <div className="text-4xl font-medium leading-snug">Navigating the digital landscape for success</div>
        <Image src='/images/illustration.png' alt="illustration" width={601} height={515} className="w-full"></Image>
        <div className="mb-4">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</div>
        <div className="bg-black text-white text-center p-4 rounded-2xl mb-16 hover:bg-[#191A23] cursor-pointer">Book a consultation</div>
      </section>

      <section className="hidden md:block md:flex md:flex-row">
        <div className="">
          <div className="text-4xl font-medium leading-snug mb-8 lg:text-5xl lg:leading-snug xl:text-6xl xl:leading-normal">Navigating the digital landscape for success</div>
          <div className="mb-4">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</div>
          <div className="bg-black text-white text-center px-8 py-4 rounded-2xl hover:bg-[#191A23] cursor-pointer inline-block">Book a consultation</div>
        </div>
        <Image src='/images/illustration.png' alt="illustration" width={601} height={515} className="md:h-[40vh] lg:h-[50vh] xl:h-[60vh] w-auto"></Image>
      </section>

      {/* Company Logos */}
      <div className="p-4 flex gap-4 flex-wrap mb-8 md:justify-around relative">
        <div className="flex gap-4">
          <Image src='/images/company-logo-0.png' alt="Company logo" width={497} height={192} className="w-24 grayscale"></Image>
          <Image src='/images/company-logo-1.png' alt="Company logo" width={506} height={192} className="w-24 grayscale"></Image>
          <Image src='/images/company-logo-2.png' alt="Company logo" width={515} height={192} className="w-24 grayscale"></Image>
        </div>
        <div className="flex gap-4">
          <Image src='/images/company-logo-3.png' alt="Company logo" width={584} height={192} className="w-24 grayscale"></Image>
          <Image src='/images/company-logo-4.png' alt="Company logo" width={502} height={192} className="w-24 grayscale"></Image>
          <Image src='/images/company-logo-5.png' alt="Company logo" width={443} height={192} className="w-24 grayscale"></Image>
        </div>
      </div>

      {/* Services */}
      <section className="text-center p-4">
        <div className="p-4 md:flex md:items-center md:mb-8 md:text-left">
          <div className="text-3xl font-medium bg-1 inline-block px-2 rounded mb-4 md:mr-8">Services</div>
          <div className="mb-4 md:w-1/2">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</div>
        </div>

        <div className="md:flex md:flex-row md:flex-wrap md:justify-between">
          <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 p-12 bg-3 relative md:basis-[48%]">
            <div>
              <div className="text-2xl font-medium bg-1 inline-block px-2 rounded-md">Search engine</div>
            </div>
            <div>
              <div className="text-2xl font-medium bg-1 inline-block px-2 rounded-md mb-20">optimization</div>
            </div>
            <div className="flex items-center">
              <Image src='/images/arrow-black.png' alt="arrow" width={98} height={98} className="w-12 md:mr-4"></Image>
              <div className="hidden lg:block cursor-pointer hover:text-1">Learn more</div>
            </div>
            <Image src='/images/services-1.png' alt="arrow" width={210} height={167} className="w-32 absolute bottom-10 right-10"></Image>
          </div>

          <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 p-12 relative bg-1 md:basis-[48%]">
            <div>
              <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md">Pay-per-click</div>
            </div>
            <div>
              <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md mb-20">advertising</div>
            </div>
              <div className="flex items-center">
                <Image src='/images/arrow-black.png' alt="arrow" width={98} height={98} className="w-12 md:mr-4"></Image>
                <div className="hidden lg:block cursor-pointer hover:text-1">Learn more</div>
              </div>
            <Image src='/images/services-2.png' alt="arrow" width={210} height={167} className="w-32 absolute bottom-10 right-10"></Image>
          </div>

          <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 p-12 relative bg-black md:basis-[48%]">
            <div>
              <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md">Social Media</div>
            </div>
            <div>
              <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md mb-20">Marketing</div>
            </div>
              <div className="flex items-center">
                <Image src='/images/arrow-white.png' alt="arrow" width={98} height={98} className="w-12 md:mr-4"></Image>
                <div className="hidden lg:block cursor-pointer hover:text-1 text-white">Learn more</div>
              </div>
            <Image src='/images/services-3.png' alt="arrow" width={210} height={167} className="w-32 absolute bottom-10 right-10"></Image>
          </div>

          <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 p-12 bg-3 relative md:basis-[48%]">
            <div>
              <div className="text-2xl font-medium bg-1 inline-block px-2 rounded-md">Email</div>
            </div>
            <div>
              <div className="text-2xl font-medium bg-1 inline-block px-2 rounded-md mb-20">Marketing</div>
            </div>
              <div className="flex items-center">
                <Image src='/images/arrow-black.png' alt="arrow" width={98} height={98} className="w-12 md:mr-4"></Image>
                <div className="hidden lg:block cursor-pointer hover:text-1">Learn more</div>
              </div>
            <Image src='/images/services-4.png' alt="arrow" width={210} height={167} className="w-32 absolute bottom-10 right-10"></Image>
          </div>

          <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 p-12 relative bg-1 md:basis-[48%]">
            <div>
              <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md">Content</div>
            </div>
            <div>
              <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md mb-20">Creation</div>
            </div>
              <div className="flex items-center">
                <Image src='/images/arrow-black.png' alt="arrow" width={98} height={98} className="w-12 md:mr-4"></Image>
                <div className="hidden lg:block cursor-pointer hover:text-1">Learn more</div>
              </div>
            <Image src='/images/services-5.png' alt="arrow" width={210} height={167} className="w-32 absolute bottom-10 right-10"></Image>
          </div>

          <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 p-12 relative bg-black md:basis-[48%]">
            <div>
              <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md">Analytics and</div>
            </div>
            <div>
              <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md mb-20">Tracking</div>
            </div>
              <div className="flex items-center">
                <Image src='/images/arrow-white.png' alt="arrow" width={98} height={98} className="w-12 md:mr-4"></Image>
                <div className="hidden lg:block cursor-pointer hover:text-1 text-white">Learn more</div>
              </div>
            <Image src='/images/services-6.png' alt="arrow" width={210} height={167} className="w-32 absolute bottom-10 right-10"></Image>
          </div>
        </div>


      </section>

      {/* Let’s make things happen */}
      <section className="p-4 mb-4">
        <div className="p-10 bg-3 rounded-[40px] relative">
          <div className="md:w-1/2">
            <div className="text-2xl font-medium inline-block px-2 rounded mb-4">Let’s make things happen</div>
            <div className="mb-8">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</div>
            <div className="bg-black text-white text-center p-4 rounded-2xl hover:bg-[#191A23] cursor-pointer md:inline-block md:px-8">Get your <span className="hidden md:inline">free </span>proposal</div>
          </div>
          <Image src='/images/illustration-2.png' alt="illustration" width={359} height={395} className="hidden md:block absolute md:right-0 md:h-full md:top-0 lg:right-[10%] lg:-top-[10%] lg:h-[120%] w-auto"></Image>
        </div>
      </section>

      {/* Case Studies */}
      <section className="text-center md:mb-12">
        <div className="p-4 md:flex md:items-center md:mb-8 md:text-left">
          <div className="text-3xl font-medium bg-1 inline-block px-2 rounded mb-4 md:mr-8">Case Studies</div>
          <div className="mb-4 md:w-1/2">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</div>
        </div>

        <div className="flex gap-4 overflow-x-auto px-4 md:bg-2 md:rounded-[40px] md:overflow-visible md:p-12">
          <div className="text-left rounded-[40px] mb-6 px-12 py-10 relative bg-2 text-white min-w-[90%] md:rounded-none md:min-w-[28%] md:p-4 md:border-r">
            <div className="mb-4">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</div>
            <div>
              <div className="inline text-xl text-[#B9FF66] mr-4 hover:text-white cursor-pointer">Learn more</div>
              <Image src='/images/arrow-green.png' alt="arrow" width={42} height={40} className="w-6 inline"></Image>
            </div>
          </div>
          <div className="text-left rounded-[40px] mb-6 px-12 py-10 relative bg-2 text-white min-w-[90%] md:rounded-none md:min-w-[28%] md:p-4 md:border-r">
            <div className="mb-4">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</div>
            <div>
              <div className="inline text-xl text-[#B9FF66] mr-4 hover:text-white cursor-pointer">Learn more</div>
              <Image src='/images/arrow-green.png' alt="arrow" width={42} height={40} className="w-6 inline"></Image>
            </div>
          </div>
          <div className="text-left rounded-[40px] mb-6 px-12 py-10 relative bg-2 text-white min-w-[90%] md:rounded-none md:min-w-[28%] md:p-4">
            <div className="mb-4">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</div>
            <div>
              <div className="inline text-xl text-[#B9FF66] mr-4 hover:text-white cursor-pointer">Learn more</div>
              <Image src='/images/arrow-green.png' alt="arrow" width={42} height={40} className="w-6 inline"></Image>
            </div>
          </div>
        </div>
      </section>

      {/* Our Working Process */}
      <section className="text-center p-4">
        <div className="p-4 md:flex md:items-center md:mb-8 md:text-left">
          <div className="md:mr-8">
            <div>
              <div className="text-3xl font-medium bg-1 inline-block px-2 rounded">Our Working</div>
            </div>
            <div>
              <div className="text-3xl font-medium bg-1 inline-block px-2 rounded mb-4">Process</div>
            </div>
          </div>
          <div className="mb-4 md:w-1/2">Step-by-Step Guide to Achieving Your Business Goals</div>
        </div>


        <div className="text-left">
          <Accordian index="01" title="Consultation" content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."></Accordian>
          <Accordian index="02" title="Research and Strategy Development" content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."></Accordian>
          <Accordian index="03" title="Implementation" content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."></Accordian>
          <Accordian index="04" title="Monitoring and Optimization" content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."></Accordian>
          <Accordian index="05" title="Reporting and Communication" content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."></Accordian>
          <Accordian index="06" title="Continual Improvement" content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."></Accordian>
        </div>
        
      </section>

      {/* Team */}
      <section className="text-center p-4">
        <div className="p-4 md:flex md:items-center md:mb-8 md:text-left">
          <div className="text-3xl font-medium bg-1 inline-block px-2 rounded mb-4 md:mr-8">Team</div>
          <div className="mb-4 md:w-1/2">Meet the skilled and experienced team behind our successful digital marketing strategies</div>
        </div>

        <div className="md:flex md:flex-row md:flex-wrap md:justify-between">

          <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 px-10 py-8 relative md:basis-[48%] lg:basis-[30%]">
            <div className="flex justify-between border-b pb-4 mb-4 border-black">
              <Image src='/images/team-0.png' alt="arrow" width={412} height={412} className="w-20"></Image>
              <div className="self-end ml-4">
                <div className="font-medium">John Smith</div>
                <div>CEO and Founder</div>
              </div>
              <Image src='/images/linkedin.png' alt="arrow" width={98} height={98} className="w-10 self-start"></Image>
            </div>
            <div>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</div>
          </div>

          <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 px-10 py-8 relative md:basis-[48%] lg:basis-[30%]">
            <div className="flex justify-between border-b pb-4 mb-4 border-black">
              <Image src='/images/team-1.png' alt="arrow" width={412} height={412} className="w-20"></Image>
              <div className="self-end ml-4">
                <div className="font-medium">Jane Doe</div>
                <div>Director of Operations</div>
              </div>
              <Image src='/images/linkedin.png' alt="arrow" width={98} height={98} className="w-10 self-start"></Image>
            </div>
            <div>7+ years of experience in project management and team leadership. Strong organizational and communication skills</div>
          </div>

          <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 px-10 py-8 relative md:basis-[48%] lg:basis-[30%]">
            <div className="flex justify-between border-b pb-4 mb-4 border-black">
              <Image src='/images/team-2.png' alt="arrow" width={412} height={412} className="w-20"></Image>
              <div className="self-end ml-4">
                <div className="font-medium">Michael Brown</div>
                <div>Senior SEO Specialist</div>
              </div>
              <Image src='/images/linkedin.png' alt="arrow" width={98} height={98} className="w-10 self-start"></Image>
            </div>
            <div>5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</div>
          </div>

          <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 px-10 py-8 relative md:basis-[48%] lg:basis-[30%]">
            <div className="flex justify-between border-b pb-4 mb-4 border-black">
              <Image src='/images/team-3.png' alt="arrow" width={412} height={412} className="w-20"></Image>
              <div className="self-end ml-4">
                <div className="font-medium">Emily Johnson</div>
                <div>PPC Manager</div>
              </div>
              <Image src='/images/linkedin.png' alt="arrow" width={98} height={98} className="w-10 self-start"></Image>
            </div>
            <div>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</div>
          </div>

          <div className="hidden text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 px-10 py-8 relative md:block md:basis-[48%] lg:basis-[30%]">
            <div className="flex justify-between border-b pb-4 mb-4 border-black">
              <Image src='/images/team-4.png' alt="arrow" width={412} height={412} className="w-20"></Image>
              <div className="self-end ml-4">
                <div className="font-medium">Emily Johnson</div>
                <div>PPC Manager</div>
              </div>
              <Image src='/images/linkedin.png' alt="arrow" width={98} height={98} className="w-10 self-start"></Image>
            </div>
            <div>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</div>
          </div>

          <div className="hidden text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 px-10 py-8 relative md:block md:basis-[48%] lg:basis-[30%]">
            <div className="flex justify-between border-b pb-4 mb-4 border-black">
              <Image src='/images/team-5.png' alt="arrow" width={412} height={412} className="w-20"></Image>
              <div className="self-end ml-4">
                <div className="font-medium">Emily Johnson</div>
                <div>PPC Manager</div>
              </div>
              <Image src='/images/linkedin.png' alt="arrow" width={98} height={98} className="w-10 self-start"></Image>
            </div>
            <div>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</div>
          </div>

        </div>

        <div className="md:flex md:flex-row-reverse">
          <div className="bg-black text-white text-center p-4 rounded-2xl mb-8 hover:bg-[#191A23] cursor-pointer md:inline-block md:px-16">See all team</div>
        </div>
        
      </section>

      {/* Testimonials */}
      <section className="text-center p-4">
        <div className="p-4 md:flex md:items-center md:mb-8 md:text-left">
          <div className="text-3xl font-medium bg-1 inline-block px-2 rounded mb-4 md:mr-8">Testimonials</div>
          <div className="mb-4 md:w-1/2">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</div>
        </div>

        <div className="bg-black rounded-[40px] text-white p-8 text-left">
          <div>
            <div className="border border-solid border-[#B9FF66] rounded-[40px] mb-10 px-6 py-8 relative">
              <div>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
              <div className="absolute p-4 -bottom-4 left-10 h-4 w-4 rotate-45 border-b border-r border-solid border-[#B9FF66] bg-black"></div>
            </div>
            <div className="px-8">
              <div className="font-medium text-[#B9FF66]">John Smith</div>
              <div>Marketing Director at XYZ Corp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="text-center p-4 mb-16">
        <div className="p-4 md:flex md:items-center md:mb-8 md:text-left">
          <div className="text-3xl font-medium bg-1 inline-block px-2 rounded mb-4 md:mr-8">Contact Us</div>
          <div className="mb-4 md:w-1/2">Connect with Us: Let's Discuss Your Digital Marketing Needs</div>
        </div>

        <div className="bg-3 rounded-[40px] p-8 mb-8 text-left md:flex md:justify-between relative">
          {/* radio button */}
          <div className="md:w-1/2 md:ml-8">
            <div className="flex justify-between items-center px-4 mb-4 md:justify-start">
              <div className="flex justify-between items-center md:mr-8">
                <input type="radio" name="contact" id="hi" className=""></input>
                <label htmlFor="hi" className="ml-4 flex items-center">Say hi</label>
              </div>
              <div className="flex justify-between items-center">
                <input type="radio" name="contact" id="quote" className=""></input>
                <label htmlFor="quote" className="ml-4">Get a Quote</label>
              </div>
            </div>

            <div className="mb-4">Name</div>
            <input className="mb-4 w-full border border-solid border-black p-4 rounded-xl" placeholder="Name"></input>
            <div className="mb-4">Email</div>
            <input className="mb-4 w-full border border-solid border-black p-4 rounded-xl" placeholder="Email"></input>
            <div className="mb-4">Message</div>
            <textarea className="mb-4 w-full border border-solid border-black p-4 rounded-xl" placeholder="Message" rows={4}></textarea>
            <div className="bg-black text-white p-4 rounded-2xl hover:bg-[#191A23] cursor-pointer text-center hidden md:block">Send Message</div>
          </div>

          <Image src='/images/illustration-3.png' alt="illustration" width={692} height={649} className="hidden md:block absolute right-0 top-[10%] h-[80%] w-auto"></Image>

        </div>
        <div className="bg-black text-white p-4 rounded-2xl hover:bg-[#191A23] cursor-pointer md:hidden">Send Message</div>
      </section>

      {/* footer */}
      <footer className="relative bg-[#191A23] text-center text-white p-4 md:rounded-t-[40px] md:px-16">
        <div className="pb-4 mb-8 border-b border-white border-solid">
          <div className="md:flex md:items-center">
            <div className="flex justify-center items-center my-8 md:mr-8">
              <Image src='/images/logo-white.png' alt="arrow" width={60} height={61} className="w-6 mr-1.5"></Image>
              <div className="text-2xl">Positivus</div>
            </div>
            <div className="mb-4 hover:text-[#B9FF66] cursor-pointer md:mb-0 md:mr-4">About us</div>
            <div className="mb-4 hover:text-[#B9FF66] cursor-pointer md:mb-0 md:mr-4">Services</div>
            <div className="mb-4 hover:text-[#B9FF66] cursor-pointer md:mb-0 md:mr-4">Use Cases</div>
            <div className="mb-8 hover:text-[#B9FF66] cursor-pointer md:mb-0 md:mr-4">Pricing</div>
          </div>

          <div className="md:flex md:justify-between">
            <div className="md:mr-8 md:text-left md:w-1/3">
              <div className="mb-8 font-medium bg-1 inline-block px-2 rounded mb-4 text-black">Contact us:</div>
              <div className="mb-4">Email: info@positivus.com</div>
              <div className="mb-4">Phone: 555-567-8901</div>
              <div className="mb-4">Address: 1234 Main St Moonstone City, Stardust State 12345</div>
            </div>
            <div className="bg-[#292A32] rounded-2xl mb-8 p-8 md:flex md:items-center">
              <input className="mb-4 w-full border border-solid border-white p-4 rounded-xl bg-[#292A32] md:mr-4 md:mb-0" placeholder="Email"></input>
              <div className="bg-1 text-black rounded-2xl p-4 hover:brightness-110 cursor-pointer md:whitespace-nowrap">Subscribe to news</div>
            </div>
          </div>

          <div className="flex justify-around items-center w-32 mx-auto mb-4 md:absolute md:top-12 md:right-12">
            <Image src='/images/linkedin-white.png' alt="arrow" width={60} height={61} className="w-6 self-start"></Image>
            <Image src='/images/facebook.png' alt="arrow" width={60} height={61} className="w-6 self-start"></Image>
            <Image src='/images/twitter.png' alt="arrow" width={60} height={61} className="w-6 self-start"></Image>
          </div>
        </div>
        <div className="md:flex">
          <div className="mb-4 md:mr-8">© 2023 Positivus. All Rights Reserved.</div>
          <div className="mb-4">Privacy Policy</div>
        </div>
      </footer>

    </div>
  );
}
