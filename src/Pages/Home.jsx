import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import about from "../assets/about.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaHeart } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container text-center space-y-4 mx-auto overflow-hidden">
        <section>
          <Banner></Banner>
        </section>

        {/* about section */}
        <section data-aos="fade-right">
          <div className="hero bg-base-200 min-h-screen rounded-2xl">
            <div className="hero-content flex-col md:flex-row">
              <img
                src={about}
                className="w-[90%] md:w-5/12 rounded-lg shadow-2xl"
              />
              <div className="md:w-7/12">
                <h1 className="text-5xl text-center font-black md:text-justify">
                  About
                </h1>
                <p className="py-6 text-justify">
                  A crowdfunding web application serves as a digital platform
                  that empowers individuals, creators, and entrepreneurs to
                  raise funds for various projects, ideas, or causes. It enables
                  users to share their vision, whether it’s a personal need like
                  medical expenses, a creative endeavor such as a film or app,
                  or a startup aiming to launch a groundbreaking product.
                  Contributors from around the world can support these
                  initiatives financially, often in exchange for rewards,
                  equity, or simply the satisfaction of helping a cause. The
                  platform bridges the gap between innovative thinkers and a
                  global community of backers, fostering collaboration and
                  support. By streamlining the fundraising process, crowdfunding
                  applications turn aspirations into reality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* how it works section */}
        <section data-aos="fade-left">
          <div className="max-w-6xl mx-auto rounded-2xl px-4 py-16 space-y-6">
            <h1 className="font-bold text-4xl">How it Works</h1>
            <p className="text-gray-600">
              A crowdfunding web application works by allowing users to create
              campaign pages that showcase their projects, set funding goals,
              and invite people to contribute financially, often incentivizing
              support through rewards or equity offerings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto">
              {/* card -1 */}
              <div className="card bg-base-100 shadow-2xl p-6">
                <div className="card-body items-center space-y-2">
                  <h2 className="card-title">Donation Instructions</h2>
                  <p className="text-justify text-gray-500">
                    Create a Campaign
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>

              {/* card -2 */}
              <div className="card bg-base-100 shadow-2xl p-6">
                <div className="card-body items-center space-y-2">
                  <h2 className="card-title">Share with the Community</h2>
                  <p className="text-justify text-gray-500">
                    Spread the word through social media and email to attract
                    backers and amplify your reach.
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>

              {/* card -3 */}
              <div className="card bg-base-100 shadow-2xl p-6">
                <div className="card-body items-center space-y-2">
                  <h2 className="card-title">Receive Support</h2>
                  <p className="text-justify text-gray-500">
                    Collect contributions from backers to reach your funding
                    goal and bring your project to life.
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
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
                  <h2 className="card-title">Spread Warmth</h2>
                  <p>Help those in need stay warm during the coldest months.</p>
                </div>
              </div>

              {/* card -2 */}
              <div className="card bg-base-100 p-6 shadow-2xl">
                <div className="card-body items-center space-y-2 text-center">
                  <FaHeart className="text-2xl" />
                  <h2 className="card-title">Reduce Waste</h2>
                  <p>
                    Rehome your gently used clothes and reduce landfill waste.
                  </p>
                </div>
              </div>

              {/* card -3 */}
              <div className="card bg-base-100 p-6 shadow-2xl">
                <div className="card-body items-center space-y-2 text-center">
                  <FaEarthAmericas className="text-2xl" />
                  <h2 className="card-title">Empower Communities</h2>
                  <p>
                    Show support and foster hope within your local community.
                  </p>
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
