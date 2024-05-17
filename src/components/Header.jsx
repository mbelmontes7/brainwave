import {brainwave} from "../assets"; //Do not forget to import everytime you want to display something on the browser


const Header = () => {
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
    <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4"></div>
    <a>
    { /* This code is used to render an image to the browser. 
    If the image is wrapped in an 'a' tag with a valid 'href', 
    it will also serve as a clickable link. */ }
        <img src={brainwave}/>
    </a>
    
</div>
  )
}

export default Header