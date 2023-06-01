import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  const onClickDenomination = () => {
    updateBalance(value)
  }
  return (
    <li className="denominationItem">
      <button
        type="button"
        className="denominationButton"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
