import Feature from '@/_shared/feature/feature';
import featuresArray from '@/_shared/feature/features-array';

function Features() {
    return (
        <section
            className="container flex scroll-mt-[15vh] flex-col gap-[20px] py-[20px] md:py-[82px] lg:w-[860px] xl:gap-[40px] xl:py-[105px]"
            id={'about'}
        >
            {featuresArray.map((feature, index) => (
                <Feature
                    align={index % 2 === 0 ? 'left' : 'right'}
                    description={feature.description}
                    index={index}
                    key={feature.id}
                    title={feature.title}
                    url={feature.url}
                />
            ))}
        </section>
    );
}

export default Features;
