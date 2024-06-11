import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () =>
{
  return (
    // A div container with flexbox layout, spacing between items of 1rem,
    // and wrapping of items when the screen size is below the "lg" breakpoint
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {/* // Mapping over the pricing array to create a new div for each item */}
      {pricing.map((item) => (
        // A div for each pricing item with specific styles:
        // width of 19rem, full width on screens smaller than "lg",
        // full height, padding on x-axis of 6, background color of n-8,
        // border color of n-6, rounded corners of 2rem,
        // additional styles for large screens, and different padding and margin for even/odd items
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          {/* // A header element (h4) displaying the title of the pricing item,
      // with specific margin at the bottom and class for styling */}
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            //this is giving the button the margin bottom and what is stands on
            className="w-full mb-6"
            // The URL the button links to:
            // If item.price exists, it links to the "/pricing" page
            // Otherwise, it opens an email client to send an email to contact@jsmastery.pro
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;