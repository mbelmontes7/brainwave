import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) =>
{
    return (
        <div className={className}>
            {/* note check tomorrow why not all the images are appearing on the page is just two logos it should be four  */}
            <h5 className="tagline mb-6 text-center text-n-1/50">
                Helping people create beautiful content at
            </h5>
            <ul className="flex">
                {companyLogos.map((logo, index) => (
                    <li
                        className="flex items-center justify-center flex-1 h-[8.5rem]"
                        key={index}
                    >
                        <img src={logo} width={134} height={28} alt={logo} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyLogos;

