import CartModal from '@/_shared/cart/cart-modal';
import Catalog from '@/(public)/(home)/_components/catalog';
import Features from '@/(public)/(home)/_components/features';
import Footer from '@/(public)/(home)/_components/footer';
import Header from '@/(public)/(home)/_components/header';
import Hero from '@/(public)/(home)/_components/hero';
import Instagram from '@/(public)/(home)/_components/instagram-gallery';
import Promos from '@/(public)/(home)/_components/promos';
import Steps from '@/(public)/(home)/_components/steps';

function HomePage() {
    return (
        <div className="flex w-full flex-col items-center bg-background">
            <Header />
            <CartModal />
            <Hero />
            <Promos />
            <Catalog />
            <Steps />
            <Features />
            <Instagram />
            <Footer />
        </div>
    );
}

export default HomePage;
