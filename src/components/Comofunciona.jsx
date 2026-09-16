const PASSOS = [
    {
        titulo: 'Preencha o formulário',
        texto: 'Conte a modalidade, a data e um pouco sobre o seu campeonato.',
    },
    {
        titulo: 'Nossa equipe entra em contato',
        texto: 'Alinhamos detalhes, valores e a disponibilidade da equipe pelo WhatsApp.',
    },
    {
        titulo: 'Confirmamos a equipe',
        texto: 'Definimos árbitros, mesários e cronometristas para o seu jogo.',
    },
    {
        titulo: 'Partida apitada com tranquilidade',
        texto: 'Você foca no campeonato, a gente cuida da arbitragem do início ao fim.',
    },
];

function ComoFunciona() {
    return (
        <section id='como-funciona' className='section'>
            <h2>Como funciona</h2>
            <div className='steps-grid'>
                {PASSOS.map((passo, index) => (
                    <div className='step-card' key={passo.titulo}>
                        <span className='step-number'>{index + 1}</span>
                        <h3>{passo.titulo}</h3>
                        <p>{passo.texto}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ComoFunciona;