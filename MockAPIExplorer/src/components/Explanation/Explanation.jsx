import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <h2>How to Build</h2>
      <ul className="ul__explanation">
        <LiExplanation
          step={1}
          desc="Import the MOCK data from the API"
          imgUrl="/images/mockImport.png"
          imgAlt="Code snippet showing the import of the MOCK data"
        />

        <LiExplanation
          step={2}
          desc="Init Hook to handle search input"
          imgUrl="/images/initHook.png"
          imgAlt="Code snippet showing the initialization of the Hook"
        />
      </ul>
    </section>
  )
}

export default Explanation
