import React from "react"; // Import the React library
import Section from "./Section"; // Import the Section component
import { socials } from "../constants"; // Import the socials array from the constants file

const Footer = () =>
{ // Define the Footer component
    return (
        // Render the Section component with custom padding you put the ! to say no change it this is how is going to go 
        <Section crosses className="!px-0 !py-10">
            {/* Container div for the footer content */}
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                {/* Paragraph for the copyright notice */}
                <p className="caption text-n-4 lg:block">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>

                {/* Unordered list for the social media icons */}
                <ul className="flex gap-5 flex-wrap">
                    {/* Map through the socials array to create a list item for each social link */}
                    {socials.map((item) => (
                        <a
                            key={item.id} // Unique key for each social link
                            href={item.url} // URL for the social link
                            target="_blank" // Open link in a new tab
                            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6" // Styling for the social link
                        >
                            {/* Image for the social icon */}
                            <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                        </a>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Footer; // Export the Footer component as the default export
