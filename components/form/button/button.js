const button = ({ className, text, onClick,submit }) => {
  return (
    <button
      className={className}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
export default button
