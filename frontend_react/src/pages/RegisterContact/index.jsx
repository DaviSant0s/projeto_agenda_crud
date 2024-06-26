import './styles.css';
import Success from '../../components/Success'

export default function RegisterContact() {
  return (
    <div className='registerContact-container'>
      <h1>Contato</h1>
      <p>Crie ou edite seu contato abaixo</p>

      <div className='inputs-container-RegisterContact'>
          <Success 
            msg={'Contato Excluído com sucesso!'}
            style={{marginBottom: '10px', width: '100%'}}
          
          />

          <div className='usual-style-inputs'>
            <span>Nome</span>
            <input type="text" name="name-registerContact"/>
          </div>

          <div className='usual-style-inputs'>
            <span>Sobrenome</span>
            <input type="text" name="lastName-registerContact"/>
          </div>

          <div className='usual-style-inputs'>
            <span>Email</span>
            <input type="email" name="email-registerContact"/>
          </div>

          <div className='usual-style-inputs'>
            <span>Telefone</span>
            <input type="tel" name="phone-registerContact"/>
          </div>

          <button>Salvar</button>

      </div>
    </div>
  )
}
