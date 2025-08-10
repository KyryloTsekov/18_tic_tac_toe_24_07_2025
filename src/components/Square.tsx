import type { FC } from "react"

interface ISquareProps {
    value: string,
    move: () => void
}

const Square: FC<ISquareProps> = ({ value, move }) => {
  return (
    <button style={{width: '30%'}} onClick={move}>{value}</button>
  )
}

export default Square