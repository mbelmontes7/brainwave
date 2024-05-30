import ButtonGradient from "./assets/svg/ButtonGradient"; //always check the import bro fucking shit 
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";


const App = () =>
{
  return (
    <>

      <div className="pt-[4.75rem] lg:pt[5.25rem]
      overflow-hidden">
        {/* The Header component is displayed in the browser because 
      The Header component is displayed because it's rendered within App, the root component.*/}
        <Header />
        <Hero />
        <Benefits/>

      </div>
      <ButtonGradient />
    </>
  )
}

export default App;
