import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <h2>How to build</h2>
      <ul className="ul__explanation">
        <LiExplanation
          step={1}
          description="Make initial states for the timer."
          imgUrl="/images/initHooks.png"
          imgAlt="Code snippet for initial states."
        />

        <LiExplanation
          step={2}
          description="Create useEffect to update the timer."
          imgUrl="/images/timer.png"
          imgAlt="Code snippet for useEffect."
        />
      </ul>
    </section>
  )
}

export default Explanation
