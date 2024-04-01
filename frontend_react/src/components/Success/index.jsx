import './styles.css';

export default function Success({ msg, style={} }) {
  return (
    <div style={style} className='sucess-container'>
      <span>{msg}</span>
    </div>
  )
}
