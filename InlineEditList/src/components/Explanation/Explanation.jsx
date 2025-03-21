import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <ul className="ul__explanation">
        <LiExplanation
          step={1}
          desc="Init states for the list items and the input field."
          imgUrl="/images/initHooks.png"
          imgAlt="Code snippet for initializing states for the list items and the input field."
        />
      </ul>
    </section>
  )
}

export default Explanation
