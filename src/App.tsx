/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import EstiloGlobal, { Chamada, Corpo, FormularioContato, Introducao, SetaComponent } from "./styles"
import setaDireita from './assets/turn-up-right-direction-round-2-svgrepo-com.svg'
import setaEsquerda from './assets/turn-up-left-direction-round-2-svgrepo-com (1).svg'
import setaBaixo from './assets/cursor-down-2-svgrepo-com.svg'
import emailjs from 'emailjs-com'

function App() {

  const enviarEmail = (e:any) => {
    e.preventDefault();
    emailjs.sendForm('service_49ahv4i', 'template_qz8uf6o', e.target, 'XL9fCxd3mkzCpVVBJ')
        .then((_result) => {
            alert('Mensagem enviada com sucesso')
        }, (error) => {
            alert(error.message)
        });
        e.target.reset();
};

  return (
    <>
      <EstiloGlobal />
      <div className="container">
        <SetaComponent src={setaEsquerda} alt="" />
        <Introducao>
          <div>
            <h1>O seu corpo virtual</h1>
            <p>
              Muito mais que um domínio qualquer, o seu site/sua landing page
              é o seu rosto no mundo digital.
            </p>
          </div>
          <img src={setaDireita} alt="" />
        </Introducao>
        <Corpo>
          <div>
          <h1>Moderno e responsivo</h1>
          <p>
            Na Macash usamos as melhores tecnologias, garantindo ao nosso cliente
            um design que chame a atenção do seu público alvo, além de garantir sua portabilidade
            para todos os dispositivos.
          </p>
          </div>
        </Corpo>
        <Chamada>
          <img src={setaBaixo} alt="" />
          <h1>Interessado?</h1>
          <h2>Entre em contato e adquira hoje mesmo seu site próprio!</h2>
          <FormularioContato onSubmit={enviarEmail}>
            <label htmlFor="nome">Seu nome / Seu negócio</label>
            <input name="name" id="nome" type="text" />
            <label htmlFor="email">Seu e-mail</label>
            <input name="email" id="email" type="text" />
            <label htmlFor="mensagem">Sua mensagem</label>
            <textarea name="message" id="mensagem" />
            <button type="submit">Enviar mensagem</button>
            </FormularioContato>
        </Chamada>
      </div>
    </>
  )
}

export default App
