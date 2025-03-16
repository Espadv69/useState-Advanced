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

        <LiExplanation
          step={3}
          description="Create a function to reset the timer."
          imgUrl="/images/handleReset.png"
          imgAlt="Code snippet for reset function."
        />

        <LiExplanation
          step={4}
          description="Create a function to handle the start and stop of the timer."
          imgUrl="/images/handleIsActive.png"
          imgAlt="Code snippet for start/stop function."
        />

        <LiExplanation
          step={5}
          description="Render the timer."
          imgUrl="/images/htmlStructure.png"
          imgAlt="Code snippet for HTML structure."
        />
      </ul>
    </section>
  )
}

export default Explanation
