import logoArp from './logo-arp.png';

function Header() {
    return (
        <header className='site-header'>
            <a href='#topo' className='brand'>
                <img src={logoArp} alt='ARP Assessoria Esportiva' className='brand-logo' />
            </a>
            <nav className='nav-links'>
                <a href='#sobre'>Sobre</a>
                <a href='#como-funciona'>Como funciona</a>
                <a href='#faq'>FAQ</a>
                <a href='#contato' className='nav-cta'>
                    Solicitar arbitragem
                </a>
            </nav>
        </header>
    );
}

export default Header;