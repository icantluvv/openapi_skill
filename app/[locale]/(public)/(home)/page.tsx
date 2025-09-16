import CartModal from '@/[locale]/(public)/(home)/_components/cart-modal';
import Header from '@/[locale]/(public)/(home)/_components/header';
import Hero from '@/[locale]/(public)/(home)/_components/hero';
import InstagramGallery from '@/[locale]/(public)/(home)/_components/instagram-gallery';
import Promos from '@/[locale]/(public)/(home)/_components/promos';
import Steps from '@/[locale]/(public)/(home)/_components/steps';

import Catalog from './_components/catalog';
import Features from './_components/features';
import Footer from './_components/footer';

function HomePage() {
    return (
        <div className="bg-background flex w-full flex-col items-center">
            {/*<LoaderLayer />*/}
            <Header />
            <CartModal />
            <Hero />
            <Promos />
            <Catalog />
            <Steps />
            <Features />
            <InstagramGallery />
            <Footer />
        </div>
    );
}

export default HomePage;
