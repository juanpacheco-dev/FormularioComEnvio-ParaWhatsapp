import { useState } from 'react';

const PERGUNTAS = [
    {
        pergunta: 'Com quanta antecedência preciso agendar a arbitragem?',
        resposta:
            'Recomendamos pelo menos 7 dias de antecedência para garantir disponibilidade da equipe, mas fale com a gente mesmo em cima da data — muitas vezes conseguimos encaixar.',
    },
    {
        pergunta: 'Vocês atendem finais de semana e feriados?',
        resposta:
            'Sim. A maior parte dos campeonatos acontece nesses dias, então nossa equipe está preparada para atuar em finais de semana e feriados.',
    },
    {
        pergunta: 'Quais documentos vocês entregam ao final do jogo?',
        resposta:
            'Entregamos a súmula da partida preenchida e, quando solicitado, um boletim com as principais ocorrências do jogo.',
    },
    {
        pergunta: 'Vocês atendem outras cidades além da região metropolitana?',
        resposta:
            'Atendemos campeonatos fora da nossa região com custo adicional de deslocamento. Fale com a gente pelo formulário e combinamos os detalhes.',
    },
    {
        pergunta: 'Como funciona o pagamento?',
        resposta:
            'O valor é combinado conforme a modalidade, quantidade de jogos e a equipe necessária. Fechamos os detalhes diretamente pelo WhatsApp antes da confirmação.',
    },
];

function Faq() {
    const [aberta, setAberta] = useState(null);

    function alternar(index) {
        setAberta((atual) => (atual === index ? null : index));
    }

    return (
        <section id='faq' className='section'>
            <h2>Perguntas frequentes</h2>
            <div className='faq-list'>
                {PERGUNTAS.map((item, index) => {
                    const estaAberta = aberta === index;
                    return (
                        <div className='faq-item' key={item.pergunta}>
                            <button
                                type='button'
                                className='faq-question'
                                aria-expanded={estaAberta}
                                onClick={() => alternar(index)}
                            >
                                {item.pergunta}
                                <span className={`faq-icon ${estaAberta ? 'is-open' : ''}`}>+</span>
                            </button>
                            {estaAberta && <p className='faq-answer'>{item.resposta}</p>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Faq;