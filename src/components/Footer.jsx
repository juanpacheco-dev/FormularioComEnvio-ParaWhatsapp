import logoArp from './logo-arp.png';

function Footer() {
    const ano = new Date().getFullYear();

    return (
        <footer className='site-footer'>
            <div className='footer-top'>
                <a href='#topo' className='footer-brand'>
                    <img src={logoArp} alt='ARP Assessoria Esportiva' className='footer-logo' />
                </a>
                <nav className='footer-links'>
                    <a href='#sobre'>Sobre</a>
                    <a href='#como-funciona'>Como funciona</a>
                    <a href='#faq'>FAQ</a>
                    <a href='#contato'>Contato</a>
                </nav>
            </div>
            <p className='footer-copy'>
                &copy; {ano} ARP Assessoria Esportiva LTDA. Todos os direitos reservados.
            </p>
        </footer>
    );
}

export default Footer;