import './styles.css';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='agenda-name'>Agenda</div>
      <div className='btn-rigth'>
        <div className='register-contact'>Cadastrar contato</div>
        <div className='enter'>Entrar</div>
      </div>
    </div>
  )
}
