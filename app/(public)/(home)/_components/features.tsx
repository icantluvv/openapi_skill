import Feature from '@/_shared/feature/feature';
import featuresArray from '@/_shared/feature/features-array';

function Features() {
    return (
        <section
            className="container flex flex-col gap-[40px] py-[16px] md:py-[80px] xl:w-[860px] xl:py-[105px]"
            id={'about'}
        >
            {featuresArray.map((feature, index) => (
                <Feature
                    align={index % 2 === 0 ? 'left' : 'right'}
                    description={feature.description}
                    key={feature.id}
                    title={feature.title}
                    url={feature.url}
                ></Feature>
            ))}
        </section>
    );
}

export default Features;
