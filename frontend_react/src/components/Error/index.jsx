import './styles.css';

export default function Error({ msg }) {
  return (
    <div className='error-container'>
      <span>{msg}</span>
    </div>
  )
}
