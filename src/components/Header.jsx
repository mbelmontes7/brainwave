import { brainwave } from "../assets"; //Do not forget to import everytime you want to display something on the browser
import { navigation } from '../constants';

const Header = () =>
{
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
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-n-6 lg:bg-n-8/90
    lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          { /* This code is used to render an image to the browser. 
    If the image is wrapped in an 'a' tag with a valid 'href', 
    it will also serve as a clickable link. */ }
          <img src={brainwave} width={190} height={40}
            alt="brainwave" />
        </a>
        {/* //This is the navigation bar */}
        <nav className="fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex
     lg:mx-auto lg:bg-transparent ">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a key={item.id} href={item.url} className={`block relative font-code text-2xl upercase
              text-n-1 transition-colors hover:text-color-1`}>
                { /* This is a link element. Each link is assigned a unique key using 'item.id'. 
              The 'href' attribute is set to 'item.url', making the link navigate to the URL when clicked. 
              The link has several CSS classes applied for styling.
             The 'hover:text-color-1' class changes the text color when the link is hovered over. */ }

                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;


{ /* LINE 31 this is a link element. Each link is assigned a unique key using 'item.id' for efficient re-rendering.
 The 'href' attribute is set to 'item.url', making the link navigate to the URL when clicked. 
 The link has several CSS classes applied for styling and is set to display as a block-level element. 
The text inside the link is styled to be uppercase and of font size '2xl'. */ }