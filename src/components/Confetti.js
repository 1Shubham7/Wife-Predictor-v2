
import ReactConfetti from 'react-confetti';

export const Confetti = () => {
  return (
    <div style={{position: 'relative'}}>
      <ReactConfetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={70}
      gravity={0.2}
      tweenDuration={5000}
    />

    </div>
  )
}
