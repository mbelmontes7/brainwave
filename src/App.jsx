import ButtonGradient from "./assets/svg/ButtonGradient"; //always check the import bro fucking shit 
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/services";


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
        <Benefits />
        <Collaboration />
        <Services/>

      </div>
      <ButtonGradient />
    </>
  )
}

export default App;
