import React from 'react'

const Button: React.FC = () => {
  const handleClick = () => {
    console.log('click click')
  }

  return (
    <button onClick={handleClick}> hello module federation </button>
  )
}

export default Button
