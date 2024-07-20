import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen md:p-8">

      {/* header */}
      <Header></Header>

      {/* Navigating the digital landscape for success */}
      <section className="p-4">
        <div className="text-4xl font-medium leading-snug">Navigating the digital landscape for success</div>
        <Image src='/images/illustration.png' alt="illustration" width={601} height={515} className="w-full"></Image>
        <div className="mb-4">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</div>
        <div className="bg-black text-white text-center p-4 rounded-2xl mb-16 hover:bg-[#191A23] cursor-pointer">Book a consultation</div>
        <div className="flex gap-4 flex-wrap mb-8">
          <Image src='/images/company-logo-0.png' alt="Company logo" width={497} height={192} className="w-24 grayscale"></Image>
          <Image src='/images/company-logo-1.png' alt="Company logo" width={506} height={192} className="w-24 grayscale"></Image>
          <Image src='/images/company-logo-2.png' alt="Company logo" width={515} height={192} className="w-24 grayscale"></Image>
          <Image src='/images/company-logo-3.png' alt="Company logo" width={584} height={192} className="w-24 grayscale"></Image>
          <Image src='/images/company-logo-4.png' alt="Company logo" width={502} height={192} className="w-24 grayscale"></Image>
          <Image src='/images/company-logo-5.png' alt="Company logo" width={443} height={192} className="w-24 grayscale"></Image>
        </div>
      </section>

      {/* Services */}
      <section className="text-center p-4">
        <div className="text-3xl font-medium bg-[#B9FF66] inline-block px-2 rounded mb-4">Services</div>
        <div className="mb-4">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</div>

        <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 p-12 bg-gray-100 relative">
          <div>
            <div className="text-2xl font-medium bg-[#B9FF66] inline-block px-2 rounded-md">Search engine</div>
          </div>
          <div>
            <div className="text-2xl font-medium bg-[#B9FF66] inline-block px-2 rounded-md mb-20">optimization</div>
          </div>
          <Image src='/images/arrow-black.png' alt="arrow" width={98} height={98} className="w-12"></Image>
          <Image src='/images/services-1.png' alt="arrow" width={210} height={167} className="w-32 absolute bottom-10 right-10"></Image>
        </div>

        <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 p-12 relative bg-[#B9FF66]">
          <div>
            <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md">Pay-per-click</div>
          </div>
          <div>
            <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md mb-20">advertising</div>
          </div>
          <Image src='/images/arrow-black.png' alt="arrow" width={98} height={98} className="w-12"></Image>
          <Image src='/images/services-2.png' alt="arrow" width={210} height={167} className="w-32 absolute bottom-10 right-10"></Image>
        </div>

        <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 p-12 relative bg-black">
          <div>
            <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md">Social Media</div>
          </div>
          <div>
            <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md mb-20">Marketing</div>
          </div>
          <Image src='/images/arrow-white.png' alt="arrow" width={98} height={98} className="w-12"></Image>
          <Image src='/images/services-3.png' alt="arrow" width={210} height={167} className="w-32 absolute bottom-10 right-10"></Image>
        </div>

        <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 p-12 bg-gray-100 relative">
          <div>
            <div className="text-2xl font-medium bg-[#B9FF66] inline-block px-2 rounded-md">Email</div>
          </div>
          <div>
            <div className="text-2xl font-medium bg-[#B9FF66] inline-block px-2 rounded-md mb-20">Marketing</div>
          </div>
          <Image src='/images/arrow-black.png' alt="arrow" width={98} height={98} className="w-12"></Image>
          <Image src='/images/services-4.png' alt="arrow" width={210} height={167} className="w-32 absolute bottom-10 right-10"></Image>
        </div>

        <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 p-12 relative bg-[#B9FF66]">
          <div>
            <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md">Content</div>
          </div>
          <div>
            <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md mb-20">Creation</div>
          </div>
          <Image src='/images/arrow-black.png' alt="arrow" width={98} height={98} className="w-12"></Image>
          <Image src='/images/services-5.png' alt="arrow" width={210} height={167} className="w-32 absolute bottom-10 right-10"></Image>
        </div>

        <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 p-12 relative bg-black">
          <div>
            <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md">Analytics and</div>
          </div>
          <div>
            <div className="text-2xl font-medium bg-white inline-block px-2 rounded-md mb-20">Tracking</div>
          </div>
          <Image src='/images/arrow-white.png' alt="arrow" width={98} height={98} className="w-12"></Image>
          <Image src='/images/services-6.png' alt="arrow" width={210} height={167} className="w-32 absolute bottom-10 right-10"></Image>
        </div>

      </section>

      {/* Let’s make things happen */}
      <section className="p-4 mb-4">
        <div className="p-10 bg-gray-100 rounded-[40px]">
          <div className="text-2xl font-medium inline-block px-2 rounded mb-4">Let’s make things happen</div>
          <div className="mb-8">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</div>
          <div className="bg-black text-white text-center p-4 rounded-2xl hover:bg-[#191A23] cursor-pointer">Get your proposal</div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="text-center">
        <div className="p-4">
          <div className="text-3xl font-medium bg-[#B9FF66] inline-block px-2 rounded mb-4">Case Studies</div>
          <div className="mb-4">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</div>
        </div>

        <div className="flex gap-4 overflow-x-auto px-4">
          <div className="text-left rounded-[40px] mb-6 px-12 py-10 relative bg-[#191A23] text-white min-w-[90%]">
            <div className="mb-4">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</div>
            <div>
              <div className="inline text-xl text-[#B9FF66] mr-4">Learn more</div>
              <Image src='/images/arrow-green.png' alt="arrow" width={42} height={40} className="w-6 inline"></Image>
            </div>

          </div>
          <div className="text-left rounded-[40px] mb-6 px-12 py-10 relative bg-[#191A23] text-white min-w-[90%]">
            <div className="mb-4">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</div>
            <div>
              <div className="inline text-xl text-[#B9FF66] mr-4">Learn more</div>
              <Image src='/images/arrow-green.png' alt="arrow" width={42} height={40} className="w-6 inline"></Image>
            </div>

          </div>
          <div className="text-left rounded-[40px] mb-6 px-12 py-10 relative bg-[#191A23] text-white min-w-[90%]">
            <div className="mb-4">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</div>
            <div>
              <div className="inline text-xl text-[#B9FF66] mr-4">Learn more</div>
              <Image src='/images/arrow-green.png' alt="arrow" width={42} height={40} className="w-6 inline"></Image>
            </div>

          </div>
        </div>

      </section>

      {/* Our Working Process */}
      <section className="text-center p-4">
        <div>
          <div className="text-3xl font-medium bg-[#B9FF66] inline-block px-2 rounded">Our Working</div>
        </div>
        <div>
          <div className="text-3xl font-medium bg-[#B9FF66] inline-block px-2 rounded mb-4">Process</div>
        </div>
        <div className="mb-4">Step-by-Step Guide to Achieving Your Business Goals</div>

        <div className="text-left">
          <div className="flex justify-between items-center border-solid border-black border border-b-[6px] rounded-[40px] mb-4 p-6 bg-gray-100">
            <div className="text-3xl font-medium">01</div>
            <div className="text-lg font-medium px-4">Consultation</div>
            <div className="border border-black border-solid rounded-full w-8 h-8 min-w-8 min-h-8 inline-block flex items-center justify-center text-3xl font-medium">+</div>
          </div>
          
          <div className="flex justify-between items-center border-solid border-black border border-b-[6px] rounded-[40px] mb-4 p-6 bg-gray-100">
            <div className="text-3xl font-medium">02</div>
            <div className="text-lg font-medium px-4">Research and Strategy Development</div>
            <div className="border border-black border-solid rounded-full w-8 h-8 min-w-8 min-h-8 inline-block flex items-center justify-center text-3xl font-medium">+</div>
          </div>

          <div className="flex justify-between items-center border-solid border-black border border-b-[6px] rounded-[40px] mb-4 p-6 bg-gray-100">
            <div className="text-3xl font-medium">03</div>
            <div className="text-lg font-medium px-4">Implementation</div>
            <div className="border border-black border-solid rounded-full w-8 h-8 min-w-8 min-h-8 inline-block flex items-center justify-center text-3xl font-medium">+</div>
          </div>

          <div className="flex justify-between items-center border-solid border-black border border-b-[6px] rounded-[40px] mb-4 p-6 bg-gray-100">
            <div className="text-3xl font-medium">04</div>
            <div className="text-lg font-medium px-4">Monitoring and Optimization</div>
            <div className="border border-black border-solid rounded-full w-8 h-8 min-w-8 min-h-8 inline-block flex items-center justify-center text-3xl font-medium">+</div>
          </div>
          
          <div className="flex justify-between items-center border-solid border-black border border-b-[6px] rounded-[40px] mb-4 p-6 bg-gray-100">
            <div className="text-3xl font-medium">05</div>
            <div className="text-lg font-medium px-4">Reporting and Communication</div>
            <div className="border border-black border-solid rounded-full w-8 h-8 min-w-8 min-h-8 inline-block flex items-center justify-center text-3xl font-medium">+</div>
          </div>

          <div className="flex justify-between items-center border-solid border-black border border-b-[6px] rounded-[40px] mb-4 p-6 bg-gray-100">
            <div className="text-3xl font-medium">06</div>
            <div className="text-lg font-medium px-4">Continual Improvement</div>
            <div className="border border-black border-solid rounded-full w-8 h-8 min-w-8 min-h-8 inline-block flex items-center justify-center text-3xl font-medium">+</div>
          </div>
        </div>
        
      </section>

      {/* Team */}
      <section className="text-center p-4">
        <div className="text-3xl font-medium bg-[#B9FF66] inline-block px-2 rounded mb-4">Team</div>
        <div className="mb-4">Meet the skilled and experienced team behind our successful digital marketing strategies</div>

        <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 px-10 py-8 relative">
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

        <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 px-10 py-8 relative">
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

        <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 px-10 py-8 relative">
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

        <div className="text-left border-solid border-black border border-b-[6px] rounded-[40px] mb-6 px-10 py-8 relative">
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

        <div className="bg-black text-white text-center p-4 rounded-2xl mb-8">See all team</div>
        
      </section>

      {/* Testimonials */}
      <section className="text-center p-4">
        <div className="text-3xl font-medium bg-[#B9FF66] inline-block px-2 rounded mb-4">Testimonials</div>
        <div className="mb-4">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</div>

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
        <div className="text-3xl font-medium bg-[#B9FF66] inline-block px-2 rounded mb-4">Contact Us</div>
        <div className="mb-4">Connect with Us: Let's Discuss Your Digital Marketing Needs</div>

        <div className="bg-gray-100 rounded-[40px] p-8 mb-8 text-left">
          {/* radio button */}
          <div className="flex justify-between items-center px-4 mb-4">
            <div className="flex justify-between items-center">
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

        </div>
        <div className="bg-black text-white p-4 rounded-2xl hover:bg-[#191A23] cursor-pointer">Send Message</div>
      </section>

      {/* footer */}
      <footer className="bg-[#191A23] text-center text-white p-4">
        <div className="pb-4 mb-8 border-b border-white border-solid">
          <div className="flex justify-center items-center my-8">
            <Image src='/images/logo-white.png' alt="arrow" width={60} height={61} className="w-6 mr-1.5"></Image>
            <div className="text-2xl">Positivus</div>
          </div>
          <div className="mb-4 hover:text-[#B9FF66] cursor-pointer">About us</div>
          <div className="mb-4 hover:text-[#B9FF66] cursor-pointer">Services</div>
          <div className="mb-4 hover:text-[#B9FF66] cursor-pointer">Use Cases</div>
          <div className="mb-8 hover:text-[#B9FF66] cursor-pointer">Pricing</div>
          <div className="mb-8 font-medium bg-[#B9FF66] inline-block px-2 rounded mb-4 text-black">Contact us:</div>
          <div className="mb-4">Email: info@positivus.com</div>
          <div className="mb-4">Phone: 555-567-8901</div>
          <div className="mb-4">Address: 1234 Main St Moonstone City, Stardust State 12345</div>
          <div className="bg-[#292A32] rounded-2xl mb-8 p-8">
            <input className="mb-4 w-full border border-solid border-white p-4 rounded-xl bg-[#292A32]" placeholder="Email"></input>
            <div className="bg-[#B9FF66] text-black rounded-2xl p-4 hover:brightness-110 cursor-pointer">Subscribe to news</div>
          </div>
          <div className="flex justify-around items-center w-32 mx-auto mb-4">
            <Image src='/images/linkedin-white.png' alt="arrow" width={60} height={61} className="w-6 self-start"></Image>
            <Image src='/images/facebook.png' alt="arrow" width={60} height={61} className="w-6 self-start"></Image>
            <Image src='/images/twitter.png' alt="arrow" width={60} height={61} className="w-6 self-start"></Image>
          </div>
        </div>
        <div className="mb-4">© 2023 Positivus. All Rights Reserved.</div>
        <div className="mb-4">Privacy Policy</div>
      </footer>

    </div>
  );
}
