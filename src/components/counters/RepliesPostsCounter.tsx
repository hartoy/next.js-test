import React from 'react'

type RepliesCounterProps = {
  count: number
  onClick?: () => void
}

const RepliesCounter = ({ count, onClick }: RepliesCounterProps) => {
  if (!count || count == 0) {
    return (
      <div className="link-primary" onClick={onClick}>
        Se el primer en responder
      </div>
    )
  }

  const label = count > 1 ? 'respuestas' : 'respuesta'

  return (
    <div className="link-primary" onClick={onClick}>
      {count} {label}
    </div>
  )
}

export default RepliesCounter
