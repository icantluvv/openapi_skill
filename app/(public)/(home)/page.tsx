import Features from '@/(public)/(home)/_components/features';
import Footer from '@/(public)/(home)/_components/footer';
import Header from '@/(public)/(home)/_components/header';
import { Hero } from '@/(public)/(home)/_components/hero';
import Instagram from '@/(public)/(home)/_components/instagram-gallery';
import Promo from '@/(public)/(home)/_components/promo';
import Steps from '@/(public)/(home)/_components/steps';

export default function HomePage() {
    return (
        <div className="flex w-full flex-col items-center bg-background">
            <Header />
            <Hero />
            <Promo />
            <Steps />
            <Features />
            <Instagram />
            <Footer />
        </div>
    );
}
