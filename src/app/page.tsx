import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Background Image */}
      <div>
        <Image
          src="/images/background.png"
          width={1600}
          height={900}
          alt="Background Image"
          className="w-full h-auto"
        />
      </div>

      {/* Jewelry Section */}
      <div>
        <div className="p-[5%]">
          <h1 className="md:text-2xl font-semibold text-[#002D69]">SHOP BY JEWELRY TYPE</h1>

          <div>
            <ul className="flex gap-[8%] mt-5">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="w-[15%] h-[15%]">
                  <Image
                    src={`/images/Item${item}.png`}
                    width={160}
                    height={90}
                    alt={`Jewelry Item ${item}`}
                    className="w-full h-auto"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Handcrafted Section */}
        <div className="flex flex-col-reverse md:flex-row">
          <div className="bg-[#002D69] text-white md:w-[50%] px-5 py-36">
            <h1 className="text-3xl font-semibold">HAND CRAFTED <br /> FINE PIECES.</h1>
            <p>
              We also firmly believed that our customers <br />
              deserved more choices, straightforward <br />
              information, and legendary service.
            </p>
            <button className="bg-white py-2 px-6 rounded-md text-black my-4 text-sm">Learn more</button>
          </div>
          <div className="md:w-[50%]">
            <Image
              src="/images/working.png"
              width={1600}
              height={900}
              alt="Working Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Latest Jewelry Section */}
      <div className="px-[6%] py-[4%]">
        <h1 className="md:text-2xl font-semibold text-[#002D69]">OUR LATEST JEWELRY</h1>
        <div>
          <ul className="flex justify-between mt-[2%]">
            {[1, 2, 3].map((item) => (
              <li key={item} className="w-[30%] h-[25%]">
                <Image
                  src={`/images/show${item}.png`}
                  width={160}
                  height={90}
                  alt={`Showcase Item ${item}`}
                  className="w-full h-auto"
                />
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center mt-4">
            <button className="bg-[#002D69] text-white py-1 px-3 rounded-md text-[15px]">VIEW GALLERY</button>
          </div>
        </div>
      </div>


      <div className='px-[6%] py-[4%]'>
        <h1 className="md:text-2xl font-semibold text-[#002D69]">CUSTOMER REVIEW</h1>

        <ul className='flex flex-col md:flex-row gap-[6%] mt-4'>
          <li className='border-gray-500 border-[0.5px] p-3 text-[#343434] font-serif'>
            <h1 className='text-[#002D69] text-3xl font-extrabold'>"</h1>

            <p>Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.</p>
            <p className='text-center mt-2'>- Nico Jones</p>
          </li>
          <li className='border-gray-500 border-[0.5px] p-3 text-[#343434] font-serif'>
            <h1 className='text-[#002D69] text-3xl font-extrabold'>"</h1>

            <p>What an amazing shopping experience! I tried other jewelers and didn't find anything I liked. Thank you so much.</p>
            <p className='text-center mt-2'>- Tracy wills</p>
          </li>
          <li className='border-gray-500 border-[0.5px] p-3 text-[#343434] font-serif'>
            <h1 className='text-[#002D69] text-3xl font-extrabold'>"</h1>

            <p>Great quality, and showed they can work through a problem and maintain excellent customer service!!</p>
            <p className='text-center mt-2'>- Susana Santos</p>
          </li>


        </ul>

      </div>


      <div className='px-[6%] py-[4%]'>
        {/* Section Title */}
        <h1 className="md:text-2xl font-semibold text-[#002D69] ">OUR SERVICES</h1>

        {/* Services Grid */}
        <div className="flex justify-between mt-4 gap-[8%]">
          {/* Service 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/service1.png" // Replace with your image path
              width={16}
              height={9}
              alt="Jewelry Repair"
              className="w-[30%] h-[25%]"
              layout='responsive'
            />
            <p className="mt-4 font-medium text-base md:text-base">JEWELRY REPAIR</p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/service2.png" // Replace with your image path
              width={16}
              height={9}
              alt="Ring Sizing"
              className="w-[30%] h-[25%]"
              layout='responsive'
            />
            <p className="mt-4 font-medium text-base md:text-base">RING SIZING</p>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/service3.png" // Replace with your image path
              width={16}
              height={9}
              alt="Jewelry Polishing"
              className="w-[30%] h-[25%]"
              layout='responsive'
            />
            <p className="mt-4 font-medium text-base md:text-base">JEWELRY POLISHING</p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-8 flex justify-center items-center">
          <button className="bg-[#002D69] text-white py-2 px-6 rounded-md text-base text-center">
            LEARN MORE
          </button>
        </div>
      </div>


      <footer className="bg-[#B8E0EF] h-full">
  <div className="flex flex-col lg:flex-row justify-center items-center">
    <div className="flex flex-col lg:flex-row bg-white mt-6">
      <div className="w-full lg:w-[350px] h-auto mb-4 lg:mb-0">
        <Image
          src="/images/Rectangle.png"
          layout="responsive"
          height={9}
          width={16}
          alt="img"
        />
      </div>
      <div className="w-full lg:w-[350px] text-center py-[6%]">
        <h1 className="text-[#002D69] text-2xl font-semibold">STAY IN TOUCH?</h1>
        <p className="mt-3 text-gray-600">
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
        </p>
        <button className="bg-[#002D69] py-2 px-6 mt-4 text-white rounded-md hover:bg-[#001A45]">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  <div className="border-b-2 border-black mt-8">
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 px-[8%] py-[4%] text-center md:text-left">
      <li>
        <h1 className="text-2xl mb-2 font-semibold">Product</h1>
        <p className="hover:underline cursor-pointer">Privacy Policy</p>
        <p className="hover:underline cursor-pointer">Terms of Service</p>
        <p className="hover:underline cursor-pointer">FAQ</p>
      </li>
      <li>
        <h1 className="text-2xl mb-2 font-semibold">Resources</h1>
        <p className="hover:underline cursor-pointer">Documentation</p>
        <p className="hover:underline cursor-pointer">Case Studies</p>
      </li>
      <li>
        <h1 className="text-2xl mb-2 font-semibold">Company</h1>
        <p className="hover:underline cursor-pointer">About Us</p>
        <p className="hover:underline cursor-pointer">Contact Us</p>
      </li>
    </ul>
  </div>

  <div className="py-[2%] flex flex-col md:flex-row justify-between items-center px-[4%]">
    <p className="text-center md:text-left mb-4 md:mb-0">© Blue Diamond Jewelry™ 2021</p>
    <ul className="flex justify-center md:justify-end gap-4">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
          <path d="M 16 4 C 9.3844276 4 4 9.3844276 4 16 C 4 22.615572 9.3844276 28 16 28 C 22.615572 28 28 22.615572 28 16 C 28 9.3844276 22.615572 4 16 4 z M 16 6 C 21.534692 6 26 10.465308 26 16 C 26 21.027386 22.311682 25.161277 17.488281 25.878906 L 17.488281 18.916016 L 20.335938 18.916016 L 20.783203 16.023438 L 17.488281 16.023438 L 17.488281 14.443359 C 17.488281 13.242359 17.882859 12.175781 19.005859 12.175781 L 20.810547 12.175781 L 20.810547 9.6523438 C 20.493547 9.6093438 19.822688 9.515625 18.554688 9.515625 C 15.906688 9.515625 14.355469 10.913609 14.355469 14.099609 L 14.355469 16.023438 L 11.632812 16.023438 L 11.632812 18.916016 L 14.355469 18.916016 L 14.355469 25.853516 C 9.6088556 25.070647 6 20.973047 6 16 C 6 10.465308 10.465308 6 16 6 z"></path>
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
          <path d="M 8 5 C 6.355469 5 5 6.355469 5 8 L 5 24 C 5 25.644531 6.355469 27 8 27 L 24 27 C 25.644531 27 27 25.644531 27 24 L 27 8 C 27 6.355469 25.644531 5 24 5 Z M 21 8 L 24 8 L 24 11 L 21 11 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z M 7 14 L 10.34375 14 C 10.121094 14.625 10 15.300781 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 15.300781 21.878906 14.625 21.65625 14 L 25 14 L 25 24 C 25 24.566406 24.566406 25 24 25 L 8 25 C 7.433594 25 7 24.566406 7 24 Z"></path>
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
          <path d="M16,4C9.3732309,4,4,9.3732309,4,16c0,5.0838451,3.1629233,9.4260006,7.6269226,11.1738453	c-0.1047688-0.9489231-0.1998463-2.4060001,0.0419998-3.4421539c0.2178469-0.9359989,1.4072313-5.964922,1.4072313-5.964922	s-0.3590775-0.7190762-0.3590775-1.7810774c0-1.6689224,0.9669228-2.9141541,2.1710777-2.9141541	c1.0241537,0,1.5180006,0.7689228,1.5180006,1.6901541c0,1.0301542-0.6549234,2.568924-0.994154,3.9950771	c-0.2829237,1.1949234,0.5990772,2.1692314,1.7769222,2.1692314c2.1327686,0,3.7721539-2.2490788,3.7721539-5.4950771	c0-2.8730774-2.0639992-4.8821545-5.0118465-4.8821545c-3.4139996,0-5.4180002,2.5610771-5.4180002,5.2080002	c0,1.0310764,0.396924,2.1369228,0.8930769,2.7387676c0.097846,0.1190777,0.112154,0.2229252,0.0830774,0.3438454	c-0.0909233,0.3789234-0.2930775,1.1949234-0.3330765,1.3569231c-0.0529232,0.2178459-0.1709213,0.264,0.1260777,0.1601543	c0.6040001-0.2519226,1.4680777-0.956923,1.9418468-1.4590769c0.3310776-0.3438454,0.5249214-0.4738464,0.9431534-0.4738464	c0.2659988,0.0059233,0.5329208,0.0489235,0.7980003,0.0489235c1.6347694,0,2.7040787-1.5070782,2.7040787-3.5040779	c0-2.4421539-1.8929253-4.2849236-4.4820766-4.2849236c-2.3721538,0-4.4060783,1.7369237-4.4060783,4.0539236	c0,0.7490768,0.1970763,1.4018459,0.4789238,2.0579233c0.0219231,0.0479231,0.0319996,0.1019211,0.0339222,0.1569233	c0.0158453,0.1618462-0.0809231,0.3239231-0.2120008,0.4038467c-0.2400002,0.1418457-0.4931536,0.3209229-0.7789221,0.3628463	c-0.2069244,0.0319233-0.3629227-0.0459995-0.4628468-0.2099233c-0.5770769-0.9690781-0.9018469-2.2099228-0.9018469-3.4319992	c0-2.6738453,1.6479225-4.8410769,3.9280005-5.7658463c2.339077-0.936923,5.3079233-0.916,7.6470766,0.047924c2.2890778,0.943923	4.0160007,3.2010765,4.0160007,5.7970772c0,3.497076-1.6709213,6.4220772-4.170001,7.2580757	c-0.8290787,0.2880001-1.5499239,0.193922-2.3520002,0.202c-0.2180004,0.0020781-0.3939981,0.101922-0.5719995,0.2178459	c-0.5940781,0.3878455-1.2210007,0.7819214-1.872,1.0800009c-0.0929232,0.0419235-0.1789227,0.0879221-0.3248467,0.1550772	C12.9670763,24.0423088,14.4469223,24.6047707,16,24.6047707c6.6267691,0,12-5.3732309,12-12C28,9.3732309,22.6267691,4,16,4z"></path>
        </svg>
      </li>
    </ul>
  </div>
</footer>



    </div>
  );
}
