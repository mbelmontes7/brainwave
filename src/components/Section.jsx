import SectionSvg from "../assets/svg/SectionSvg";

/**
 * Section Component
 * 
 * This is a reusable section component that can be customized with various props.
 * 
 * Props:
 * - className: Allows custom CSS classes to be added to the component.
 * - id: Sets the HTML id attribute of the component, useful for CSS styling or JavaScript manipulation.
 * - crosses: Determines whether or not to render the crosses elements and apply certain CSS classes.
 * - crossesOffset: Used to apply a custom CSS class to the crosses element.
 * - customPaddings: Allows custom padding to be applied to the component.
 * - children: Contains the child elements of the Section component. This allows the Section component to wrap other elements and components.
 * 
 * The component also renders two vertical lines on larger screens (hidden on smaller screens) and, if the crosses prop is true, a horizontal line and the SectionSvg component.
 */

const Section = ({
    className,
    id,
    crosses,
    crossesOffset,
    customPaddings,
    children,
}) =>
{
    return (
        <div
            id={id}
            className={`
      relative 
      ${customPaddings || //logic for the custom padding operator 
                `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}` //if crosses is true then apply the padding
                } 
      ${className || ""}`}
        >
            {children}
            {/* //This is the section component that is used to wrap other components and elements. */}
            <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
            {/* //This is the vertical line on the left side of the screen */}
            <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

            {crosses && (
                //This is the horizontal line on the top of the screen
                //This is the section svg component that is used to render the crosses element
                <>
                    <div
                        //screen sizes larger than 'lg', it also adds vertical padding (py-4). and the background color is set to 'bg-stroke-1'
                        className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset
                            } pointer-events-none lg:block xl:left-10 right-10`}
                    />
                    <SectionSvg crossesOffset={crossesOffset} />
                </>
            )}
        </div>
    );
};

export default Section;