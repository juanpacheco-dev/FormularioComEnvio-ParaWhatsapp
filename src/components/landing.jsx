import './landing.css';
import Header from './Header';
import Hero from './Hero';
import Sobre from './Sobre';
import ComoFunciona from './ComoFunciona';
import Faq from './Faq';
import Contato from './Contato';
import Footer from './Footer';

function Landing() {
    return (
        <div className='page'>
            <div className='texture-overlay' aria-hidden='true' />
            <Header />
            <Hero />
            <Sobre />
            <ComoFunciona />
            <Faq />
            <Contato />
            <Footer />
        </div>
    );
}

export default Landing;