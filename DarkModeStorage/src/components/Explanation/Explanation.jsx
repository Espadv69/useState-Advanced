import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <h2>How to build</h2>
      <ul className="ul__explanation">
        <LiExplanation
          step={1}
          description="Init darkMode state with the value stored in localStorage"
          imgUrl="/images/initHook.png"
          imgAlt="Code snippet to initialize darkMode state"
        />

        <LiExplanation
          step={2}
          description="Toggle darkMode state and store the new value in localStorage"
          imgUrl="/images/toggleMode.png"
          imgAlt="Code snippet to toggle darkMode state"
        />

        <LiExplanation
          step={3}
          description="Add dark mode class to the body element using useEffect"
          imgUrl="/images/applyMode.png"
          imgAlt="Code snippet to add dark mode class to the body element"
        />
      </ul>
    </section>
  )
}

export default Explanation
