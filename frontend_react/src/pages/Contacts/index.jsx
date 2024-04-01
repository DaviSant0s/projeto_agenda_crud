import './styles.css';
import Success from '../../components/Success';

export default function Contacts() {
  return (
    <div className='contacts-container'>
      <h1>Agenda</h1>
      <p>Seus contatos estão abaixo</p>


      <div className='contacts-content'>
      <Success 
        msg={'Contato Excluído com sucesso!'}
        style={{marginBottom: '30px'}}
      
      />
        <div className='contact'>
          <div className='contact-name-lastName'><p>Davi Santos</p></div>
          <div className='contact-phone'><p>53999322366</p></div>
          <div className='contact-email'><p>daviir17@gmail.com</p></div>
          <div className='contact-edit'>Editar</div>
          <div className='contact-delete'>Excluir</div>
        </div>

        <div className='contact'>
          <div className='contact-name-lastName'><p>Suélen Rios</p></div>
          <div className='contact-phone'><p>53999322366</p></div>
          <div className='contact-email'><p>rios@gmail.com</p></div>
          <div className='contact-edit'>Editar</div>
          <div className='contact-delete'>Excluir</div>
        </div>

        <div className='contact'>
          <div className='contact-name-lastName'><p>Antonio Davi</p></div>
          <div className='contact-phone'><p>53999322366</p></div>
          <div className='contact-email'><p>daviir17777@gmail.com</p></div>
          <div className='contact-edit'>Editar</div>
          <div className='contact-delete'>Excluir</div>
        </div>
      </div>
    </div>
  );
}
