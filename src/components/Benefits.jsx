import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-1">
        {/* Creates an Element: For each item, it creates a new React element (like a piece of the webpage) */}
          {benefits.map((item) => (
            // This is the benefits component that is used to display the benefits of the product
            <div
            // bg-[length:100%_100%] sets the background image size to cover the entire width and height of the element it is applied to, without repeating.
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                //for each one of this card getting a diffrenct url for the background image
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {/* //if the item has a light gradient then it will render the gradient light component on every card 
              every time they click on */}
              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                // The clipPath property uses an SVG element with the id "benefits" to define a clipping region. Only the part of the element within this region will be visible.
                style={{ clipPath: "url(#benefits)" }}
              >
                {/* //if the item has an image url then it will render the image on every card  also that is how to hover 
                this is useful to know because the user when the user hover over it will be the image only while the user over*/}
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;