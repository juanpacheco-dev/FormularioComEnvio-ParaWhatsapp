import { useState } from 'react';

const WHATSAPP_NUMBER = '5541999999999';

const MODALIDADES = [
    { value: 'volei', label: 'Vôlei' },
    { value: 'futsal', label: 'Futsal' },
    { value: 'fut7', label: 'Futebol 7' },
    { value: 'suico', label: 'Suíço' },
    { value: 'outro', label: 'Outro' },
];

function Contato() {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        modalidade: '',
        modalidadeCustom: '',
        sobre: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const modalidadeEscolhida =
            form.modalidade === 'outro'
                ? form.modalidadeCustom || 'Não especificada'
                : MODALIDADES.find((m) => m.value === form.modalidade)?.label || 'Não informada';

        const mensagem =
            `Olá! Quero ser parceiro da ARP Assessoria Esportiva.\n\n` +
            `*Nome:* ${form.nome}\n` +
            `*Email:* ${form.email}\n` +
            `*Modalidade:* ${modalidadeEscolhida}\n` +
            `*Sobre o site/empresa:* ${form.sobre}`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <section id='contato' className='section'>
            <h2>Contrate nossos serviços</h2>
            <form onSubmit={handleSubmit} className='panel'>
                <div className='form-group'>
                    <label htmlFor='nome'>Nome</label>
                    <input
                        id='nome'
                        name='nome'
                        type='text'
                        placeholder='Digite seu nome'
                        value={form.nome}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Digite seu melhor Email'
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='modalidade'>Escolha a modalidade</label>
                    <select
                        id='modalidade'
                        name='modalidade'
                        value={form.modalidade}
                        onChange={handleChange}
                        required
                    >
                        <option value=''>Selecione uma opção</option>
                        {MODALIDADES.map((m) => (
                            <option key={m.value} value={m.value}>
                                {m.label}
                            </option>
                        ))}
                    </select>
                    <label htmlFor='modalidadeCustom'>
                        Não encontrou a modalidade desejada? Descreva-a abaixo.
                    </label>
                    <input
                        id='modalidadeCustom'
                        name='modalidadeCustom'
                        type='text'
                        placeholder='Digite aqui qual seja sua modalidade'
                        value={form.modalidadeCustom}
                        onChange={handleChange}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='sobre'>Comente aqui sobre seu campeonato</label>
                    <input
                        id='sobre'
                        name='sobre'
                        type='text'
                        placeholder='Fale um pouco sobre'
                        value={form.sobre}
                        onChange={handleChange}
                    />
                </div>

                <button type='submit'>Enviar</button>
            </form>
        </section>
    );
}

export default Contato;