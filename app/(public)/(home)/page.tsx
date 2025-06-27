import CartModal from '@/(public)/(home)/_components/cart-modal';
import Catalog from '@/(public)/(home)/_components/catalog';
import Features from '@/(public)/(home)/_components/features';
import Footer from '@/(public)/(home)/_components/footer';
import Header from '@/(public)/(home)/_components/header';
import Hero from '@/(public)/(home)/_components/hero';
import InstagramGallery from '@/(public)/(home)/_components/instagram-gallery';
import Promos from '@/(public)/(home)/_components/promos';

import Steps from './_components/steps';

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
