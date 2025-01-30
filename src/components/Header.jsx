import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets"; //Do not forget to import everytime you want to display something on the browser
import { navigation } from '../constants';
import Button from "./Button";
import MenuSVG from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header"; //combine this to the menu
import { useState } from "react";

const Header = () =>
{
  const path = useLocation();
  const [openNavigation, setOpenNavigation] = useState
    (false);

  /**
   *The `toggleNavigation` function is used to switch the `openNavigation` state between `true` and `false`. 
  function for navigation checking if is going to open or close the navigation bar
   */
  const toggleNavigation = () =>
  {
    if (openNavigation)
    {
      setOpenNavigation(false);
      enablePageScroll();
    } else
    {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  //function for handling click when cliclking the navigation close automatically 
  const handleClick = () =>
  {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false); //when the navigation is open it will close automatically
  };


  return (
    /*
  This is the Header component. It returns a div that is styled to be a fixed header at the top of the page.
  The header has a z-index of 50, meaning it will appear on top of any other elements with a lower z-index.
  It has a background color of 'n-8' at 90% opacity and a small blur effect on anything behind it.
  It also has a border color of 'n-6'.
  These styles are applied at all screen sizes. At large (lg) screen sizes, the same background color and blur effect are applied.
  Inside the header, there's another div that uses Flexbox for layout. It aligns its children in a row (flex), centers them vertically (items-center), and adds horizontal padding (px-5 at regular screen sizes, px-7.5 at large screen sizes, and px-10 at extra large screen sizes).
  At screen sizes larger than 'lg', it also adds vertical padding (py-4).
  */
    //This is the navigation bar on the top of the screen (REMEMBER THAT)
    <div className={`fixed top-0 left-0 w-full z-50 border-b
     ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          { /* This code is used to render an image to the browser. 
    If the image is wrapped in an 'a' tag with a valid 'href', 
    it will also serve as a clickable link. */ }
          {/* <img src={brainwave} width={190} height={40} alt="Per" /> */}
        </a>
        {/* //This is the navigation bar The nav bar was incorrect at first */}
        <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>

          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl upercase
              text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile} ? "lg:hidden" : ""
             } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold item.url === pathname.hash
             ? "z-2 lg:text-n-1"
             : "lg:text-n-1/50 "
         } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
        <Button className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSVG openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};
export default Header;


{ /* LINE 31 this is a link element. Each link is assigned a unique key using 'item.id' for efficient re-rendering.
 The 'href' attribute is set to 'item.url', making the link navigate to the URL when clicked. 
 The link has several CSS classes applied for styling and is set to display as a block-level element. 
The text inside the link is styled to be uppercase and of font size '2xl'. */ }

{ /* This is a link element. Each link is assigned a unique key using 'item.id'. 
The 'href' attribute is set to 'item.url', making the link navigate to the URL when clicked. 
The link has several CSS classes applied for styling.
The 'hover:text-color-1' class changes the text color when the link is hovered over. */ }

{ /* The `item.onlyMobile` property in your code seems to be a boolean flag that indicates whether a particular navigation item should only be displayed on mobile devices.

In a responsive design, you might have certain navigation items that should only be visible when the user is viewing your app on a mobile device. This could be due to space constraints, or because some navigation items are more relevant to mobile users.

When rendering your navigation items, you could use this `item.onlyMobile` property to conditionally render navigation items based on the device type. For example:

```jsx
{navigation.map((item) => (
  (isMobile || !item.onlyMobile) && (
    <a key={item.id} href={item.url}>
      {item.title}
    </a>
  )
))}. */ }