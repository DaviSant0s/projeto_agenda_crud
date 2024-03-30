import Success from '../../components/Success';
import './styles.css';

export default function Logged() {
  return (
    <div className='logged-containter'>
      <h1>Olá daviir17@gmail.com</h1>
      <p>Você precisa sair para criar outra conta</p>
      <Success msg={'Logado com sucesso!'}/>
    </div>
  )
}
