import Parallax from '@/_shared/ParallaxItem';
import MobileSlider from '@/_shared/promo/mobile-slider';
import Promo from '@/_shared/promo/promo';
import getPromo from '~/lib/services/products/get-all-promo';

async function Promos() {
    const promos = await getPromo();

    return (
        <section className="bg-background mb-[60px] mt-[60px] w-full md:mb-[85px] md:mt-[0px] xl:mb-[105px]">
            <Parallax offset={-200}>
                <div className="no-scrollbar container transform-gpu overflow-x-auto will-change-transform">
                    <div className="hidden w-max gap-[32px] md:flex md:w-full">
                        {promos.map(promo => (
                            <Promo
                                description={promo.description}
                                key={promo.id}
                                src={promo.image}
                                title={promo.title}
                            />
                        ))}
                    </div>
                </div>
            </Parallax>
            <MobileSlider items={promos} />
        </section>
    );
}

export default Promos;
