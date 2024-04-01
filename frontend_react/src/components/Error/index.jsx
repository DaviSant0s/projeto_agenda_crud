import './styles.css';

export default function Error({ msg, style={} }) {
  return (
    <div style={style} className='error-container'>
      <span>{msg}</span>
    </div>
  )
}
