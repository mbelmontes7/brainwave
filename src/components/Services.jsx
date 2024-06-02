import Section from "./Section"
import Heading from "./Heading"

const Services = () =>
{
    return (
        <Section id="how-to-use">
            <div className="container"></div>
            <Heading title="Generative AI made for creators"
                text="Brainwave unlocks the potential of AI-powered applications"
            />
            {/* //this is the box inside the div is called border is going to be useful to put little comps inside
                    this is creating space to put the components inside the box
                    */}
            <div className="relative">
                <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">


                </div>
            </div>

        </Section>
    )
}

export default Services