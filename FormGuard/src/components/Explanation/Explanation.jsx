import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <h2>How it works</h2>

      <ul className="ul__explanation">
        <LiExplanation
          step={1}
          desc="Initialize states for the form fields and error messages."
          imgUrl="/images/initHooks.png"
          imgAlt="Code snippet for initializing states."
        />
      </ul>
    </section>
  )
}

export default Explanation
