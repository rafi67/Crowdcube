import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaHeart } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Running Campaign",
      "See who's posting campaign",
      "Learn how business works by connecting with people",
    ],
    loop: 0,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const campaign = useLoaderData();

  return (
    <>
      <div className="container text-center space-y-4 mx-auto overflow-hidden">
        <section>
          <Banner></Banner>
        </section>

        {/* Running Campaign */}
        <section data-aos="fade-right" className="space-y-4">
          <h1 className="text-4xl font-bold">{text}<Cursor/></h1>
          <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {campaign.map((campaign) => (
              <div key={campaign._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-full h-[311px]"
                    src={campaign.photo}
                    alt={campaign.title}
                  />
                </figure>
                <div className="card-body text-left">
                  <h2 className="card-title">{campaign.title}</h2>
                  <p>Type: {campaign.type}</p>
                  <p>Donated Amount: {campaign.amount}</p>
                  <Link
                    className="btn btn-neutral"
                    to={`/details/${campaign._id}`}
                  >
                    See more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why donate section */}
        <section data-aos="fade-right">
          <div className="py-10 max-w-6xl mx-auto space-y-5 rounded-2xl">
            <h1 className="text-xl font-bold">Why Donate?</h1>
            <p className="text-gray-500">
              Your contribution has the power to make a real difference. Support
              meaningful causes, help innovators bring ideas to life, and
              provide aid where it's needed the most. Every donation counts
              towards creating a better world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:space-x-4 space-y-4 xl:space-y-0 items-center justify-center">
              {/* card -1 */}
              <div className="card bg-base-100 p-6 shadow-2xl">
                <div className="card-body items-center space-y-2 text-center">
                  <FaLightbulb className="text-2xl" />
                  <h2 className="card-title">Power Dreams</h2>
                  <p>
                    Support ideas and innovations that can change the world.
                  </p>
                </div>
              </div>

              {/* card -2 */}
              <div className="card bg-base-100 p-6 shadow-2xl">
                <div className="card-body items-center space-y-2 text-center">
                  <FaHeart className="text-2xl" />
                  <h2 className="card-title">Be the Spark</h2>
                  <p>Your donation ignites change and inspires success.</p>
                </div>
              </div>

              {/* card -3 */}
              <div className="card bg-base-100 p-6 shadow-2xl">
                <div className="card-body items-center space-y-2 text-center">
                  <FaEarthAmericas className="text-2xl" />
                  <h2 className="card-title">Build Futures</h2>
                  <p>Help creators and entrepreneurs achieve their goals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Contribute */}
        <section data-aos="fade-left" className="py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              How to Contribute
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
              {/* card-1 */}
              <div className="text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <span className="text-yellow-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mt-4">
                  Discover a Campaign
                </h3>
                <p className="text-gray-600">
                  Browse through projects and causes that align with your
                  interests and values.
                </p>
              </div>
              {/* card-2 */}
              <div className="text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <span className="text-yellow-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mt-4">Choose an Amount</h3>
                <p className="text-gray-600">
                  Decide how much you’d like to contribute and support the
                  campaign of your choice.
                </p>
              </div>
              {/* card-3 */}
              <div className="text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <span className="text-yellow-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mt-4">
                  Make a Difference
                </h3>
                <p className="text-gray-600">
                  Complete your contribution securely and help turn dreams into
                  reality!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
