import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleCopy = () => {
    navigator.clipboard.writeText("eissa0383@gmail.com");

    setHasCopied(true);
    showAlert({
      show: true,
      text: "Email copied to clipboard!",
      type: "success",
    });

    setTimeout(() => {
      setHasCopied(false);
      hideAlert(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div className="">
              {/* <h2 className="text-3xl font-bold text-gray-900">About Us</h2> */}
              <p className="grid-headText">Hi, I&apos;m Omar</p>

              <p className="grid-subText">
                With 12 years of experience, I have honed my skills in frontend
                and backend development, with a focus on animated 3D websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div className="">
              <p className="grid-headText">Tech Stack</p>

              <p className="grid-subText">
                I specialize in JavaScript/TypeScript with a focus on React and
                Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // labelsData={[
                //   {
                //     lat: 40,
                //     lng: -100,
                //     text: "I'm here",
                //     color: "white",
                //     size: 20,
                //   },
                // ]}
              />
            </div>
            <div className="">
              <p className="grid-headText">
                I work remotely across most timezones.
              </p>

              <p className="grid-subText">
                I&apos;m based in Croatia, with remote work available.
              </p>

              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass={"w-full mt-10"}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div className="">
              <p className="grid-headText">My Passion for Coding</p>
              <p className="grid-subText">
                I love solving problem and building things through code. Coding
                isn&apos;t just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2 md:col-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full xl:h-[126px] md:h-[326px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              {alert.show && <Alert {...alert} />}
              <p className="grid-subText text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />

                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  eissa0383@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
