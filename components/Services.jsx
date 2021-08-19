import ServiceCard from "./ServiceCard";

const Services = ({ services, title, text }) => {
    console.log(services);
    return (
        <div className="flex flex-col items-center">
            <div className="text-center px-4 lg:px-16 lg:py-4 text-white md:w-4/6 w-full">
                <h4 className="mb-4">{title}</h4>
                <p>{text}</p>
            </div>
            <div className="flex flex-col lg:flex-row text-center px-0 lg:px-16 lg:py-8 text-white w-full">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        imgUrl={service.image.url}
                        link={service.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
