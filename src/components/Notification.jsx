import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) =>
{
    return (
        <div
        //dynamic empty string 
            className={`${className || ""
            //backdrop to make it feel like is grass Asi como que se ve hace 
                } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
        >
            <img
                src={notification1}
                width={62}
                height={62}
                alt="image"
                className="rounded-xl"
            />

            <div className="flex-1">
            {/* //the title of the notification is how you pass a parent component to a child is an example of   */}
                <h6 className="mb-1 font-semibold text-base">{title}</h6>
                <div className="flex items-center justify-between">
                    <ul className="flex -m-0.5">
                        {/* //this is the notification image that is going to be displayed in the notification */}
                        {notificationImages.map((item, index) => (
                            <li
                                key={index}
                                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
                            >
                                <img
                                    src={item}
                                    className="w-full"
                                    width={20}
                                    height={20}
                                    alt={item}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="body-2 text-n-13">1m ago</div>
                </div>
            </div>
        </div>
    );
};

export default Notification;