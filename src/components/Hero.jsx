import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";


const Hero = () =>
{
    return (
        <Section
            //how the image is far from the header 
            className="pt-[1rem] -mt-[5.35]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="Hero"
        >
            <div className="container relative">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                </div>
                {/* // Button component is rendered in the browser because it's rendered within the Hero component. */}
                <h1 className="h1 mb-6">
                    Explore the Possibilities

                    <span className="inline-block relative">
                        Brainwave{" "}
                        <img
                            src={curve}
                            className="absolute top-full left-0 w-full xl:-mt-2"
                            width={624}
                            height={28}
                            alt="Curve"
                        />
                    </span>
                </h1>
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                    Unleash the power of AI within Brainwave. Upgrade your productivity
                    with Brainwave, the open AI chat app.
                </p>
                {/* Center the Button component */}
                <div className="flex justify-center m-10">
                    <Button href="/pricing" white>
                        Get started
                    </Button>
                </div>

                {/* //container for the gradient for the rest of the code this is the code for the line hardcore code */}
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
                        {/* //this is the code for the gradient box that is going to contain the image of the robot */}
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                            {/* //this is the code for the gradient box that is going to contain the image of the robot aspect ratio this would make it look good for all devices and screen sizes*/}
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <img
                                    src={robot}
                                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                                    width={1024}
                                    height={490}
                                    alt="AI"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Background image behind the robot image play around it with it later beceause this thing is too confusing 
                                keep in note the The z-index CSS property sets the z-order of a positioned element and its 
                                descendants or 
                                flex items. Overlapping elements with a larger z-index cover those with a smaller one.
                                that is what it should be like: 
                                          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">

                                */}
                    <div className="absolute inset-y-0.25   ">
                        <img
                            src={heroBackground}
                            className="w-full"
                            width={1440}
                            height={1800}
                            alt="Hero background"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
