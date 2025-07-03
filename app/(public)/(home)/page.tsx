import CartModal from '@/(public)/(home)/_components/cart-modal';
import Header from '@/(public)/(home)/_components/header';
import Hero from '@/(public)/(home)/_components/hero';
import InstagramGallery from '@/(public)/(home)/_components/instagram-gallery';
import Promos from '@/(public)/(home)/_components/promos';
import Steps from '@/(public)/(home)/_components/steps';

import Catalog from './_components/catalog';
import Features from './_components/features';
import Footer from './_components/footer';

function HomePage() {
    return (
        <div className="flex w-full flex-col items-center bg-background">
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
