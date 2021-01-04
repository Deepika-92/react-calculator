import React, { useState } from 'react'

export default () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('+')
  const [total, setTotal] = useState('')
  const [error, setError] = useState('')
  const answer = () => {
    if (Number(num2) && Number(num2)) {
      if (error) setError('')
      switch (operator) {
        case '+':
          setTotal(Number(num1) + Number(num2))
          break

        case '-':
          setTotal(Number(num1) - Number(num2))
          break

        case '*':
          setTotal(Number(num1) * Number(num2))
          break

        case '/':
          setTotal(Number(num1) / Number(num2))
          break

        default:
      }
    } else {
      setTotal('')
      setError('Please provide a valid numbers for both operands')
    }
  }
  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <input className="num1" type="text" name="num1" onChange={event => setNum1(event.target.value)} />
      <select className="operator" onChange={event => setOperator(event.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input className="num2" type="text" name="num2" onChange={event => setNum2(event.target.value)} />
      <input className="answer" type="submit" value="=" onClick={answer} />
      <input className="total" type="text" name="total" defaultValue={total} />
      <div className="error">{error}</div>
    </div>
  )
}
