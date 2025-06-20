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
            <Hero />
            <Promos />
            <Steps />
            <Features />
            <Instagram />
            <Footer />
        </div>
    );
}

export default HomePage;
