import Promo from '@/_shared/promo/promo';
import getPromo from '~/api/services/products/get-all-promo';

async function Promos() {
    const promos = await getPromo();

    return (
        <section className="mt-[60px] mb-[50px] w-full bg-background md:mt-[10px] xl:mb-[105px]">
            <div className="no-scrollbar container overflow-x-auto">
                <div className="flex w-max gap-[32px] md:w-full">
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
        </section>
    );
}

export default Promos;
