import './styles.css';

export default function Enter() {
  return (
    <div className='enter-container'>
      <h1>Criar conta ou entrar</h1>
      <p>Faça login ou crie sua conta abaixo</p>
      <div className='inputs-container'>

        <div className='inputs-register'>

          <div className='usual-style-inputs'>
            <span>Seu e-mail</span>
            <input type="email" name="email-register"/>
          </div>

          <div className='usual-style-inputs'>
            <span>Sua senha</span>
            <input type="password" name="password-register"/>
          </div>

          <button>Criar minha conta</button>
          
        </div>

        <div className='inputs-login'>

          <div className='usual-style-inputs'>
            <span>Seu e-mail</span>
            <input type="email" name="email-login"/>
          </div>

          <div>
            <span className='usual-style-inputs'>Sua senha</span>
            <input type="password" name="password-login"/>
          </div>

          <button>Entrar</button>

        </div>

      </div>
    </div>
  )
}