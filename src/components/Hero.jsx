function Hero() {
    return (
        <section id='topo' className='hero'>
            <h1>Arbitragem que garante ordem, justiça e agilidade em cada partida</h1>
            <p className='hero-subtitle'>
                Equipe de árbitros, mesários e cronometristas prontos para atuar em vôlei,
                futsal, futebol 7 e torneios suíços — do apito inicial à súmula final.
            </p>
            <a href='#contato' className='hero-cta'>
                Solicitar arbitragem
            </a>

            <div className='hero-stats'>
                <div className='hero-stat'>
                    <strong>8+</strong>
                    <span>anos de experiência</span>
                </div>
                <div className='hero-stat'>
                    <strong>300+</strong>
                    <span>partidas apitadas</span>
                </div>
                <div className='hero-stat'>
                    <strong>4</strong>
                    <span>modalidades atendidas</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;