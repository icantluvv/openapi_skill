import Feature from '@/(public)/(home)/_components/shared/feature/feature';
import featuresArray from '@/(public)/(home)/_components/shared/feature/features-array';

function Features() {
    return (
        <section className="flex w-[874px] flex-col gap-[30px] md:py-[80px] xl:py-[105px]">
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
