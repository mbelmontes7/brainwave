import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
    <Section className="overflow-hidden" id="roadmap">
        {/* //this is the container of the cards  */}
        <div className="container md:pb-10">
            <Heading tag="Ready to get started" title="What we’re working on" />
            {/* gap-6: Adds spacing between grid items. */}
            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {roadmap.map((item) =>
                {
                    const status = item.status === "done" ? "Done" : "In progress";

                    return (
                        <div
                            // A conic gradient is a gradient where the colors transition around a center point, creating a cone-like effect. It's different from linear or radial gradients. On the cards around
                            // Sets the card to use flexbox layout on medium screens and above.
                            // Sets the card to use flexbox layout on medium screens and above.
                            // class applies a vertical shift to every even card, moving it down by 7rem on medium screens and above. This creates a staggered effect, making the layout more dynamic and visually interesting.
                            className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-1"
                                }`}
                            key={item.id}
                        >
                            {/* <!--
  .relative: Sets the positioning of the element to relative, allowing absolute positioning on its children.
  .p-8: Applies padding of 2rem (32px) on all sides of the element.
  .bg-n-8: Sets the background color to a custom color defined in the Tailwind CSS configuration.
  .rounded-[2.4375rem]: Rounds the corners of the element with a border-radius of 2.4375rem (39px).
  .overflow-hidden: Hides any content that overflows the bounds of the element.
  .xl:p-15: Applies pa  dding of 3.75rem (60px) on all sides when the screen size is extra-large (xl) or larger.
  --> */}                      <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <img
                                        className="w-full"
                                        src={grid}
                                        width={550}
                                        height={550}
                                        alt="Grid"
                                    />
                                </div>
                                {/* Each card is created within a div with the class md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem]. */}
                                <div className="relative z-1">
                                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                        {/* // class applies a vertical shift to every even card, moving it down by 7rem on medium screens and above. This creates a staggered effect, making the layout more dynamic and visually interesting. */}
                                        <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                            <img
                                                className="mr-2.5"
                                                src={item.status === "done" ? check2 : loading1}
                                                width={16}
                                                height={16}
                                                alt={status}
                                            />
                                            <div className="tagline">{status}</div>
                                        </div>
                                    </div>
                                    {/* Applies a margin-bottom to the element. 
                                    -my-10:Purpose: Applies a negative margin on the top and bottom of the element.
                                    -mx-15:Purpose: Applies a negative margin on the left and right of the element.

                                    */}
                                    <div className="mb-10 -my-10 -mx-15">
                                        <img
                                            className="w-full"
                                            //this is where the images are located at inside the cards 
                                            src={item.imageUrl}
                                            width={628}
                                            height={426}
                                            alt={item.title}
                                        />
                                    </div>
                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <p className="body-2 text-n-4">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <Gradient />
            </div>

            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                <Button href="/roadmap">Our roadmap</Button>
            </div>
        </div>
    </Section>
);

export default Roadmap;