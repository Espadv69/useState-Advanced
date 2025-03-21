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

        <LiExplanation
          step={2}
          desc="Function to handle adding a new item to the list."
          imgUrl="/images/handleAddItem.png"
          imgAlt="Code snippet for the function to handle adding a new item to the list."
        />

        <LiExplanation
          step={3}
          desc="Function to handle editing an item in the list."
          imgUrl="/images/handleEditItem.png"
          imgAlt="Code snippet for the function to handle editing an item in the list."
        />
      </ul>
    </section>
  )
}

export default Explanation
