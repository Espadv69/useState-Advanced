import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <ul className="ul__explanation">
        <LiExplanation
          step={1}
          desc="Import the MOCK data from the API"
          imgUrl="/images/mockImport.png"
          imgAlt="Code snippet showing the import of the MOCK data"
        />
      </ul>
    </section>
  )
}

export default Explanation
