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

        <LiExplanation
          step={2}
          desc="Create a function to validate the name input."
          imgUrl="/images/validateName.png"
          imgAlt="Code snippet for validating name input."
        />

        <LiExplanation
          step={3}
          desc="Create a function to validate the email input."
          imgUrl="/images/validateEmail.png"
          imgAlt="Code snippet for validating email input."
        />

        <LiExplanation
          step={4}
          desc="Handle changes in form inputs."
          imgUrl="/images/handleChange.png"
          imgAlt="Code snippet for handling changes in form inputs."
        />

        <LiExplanation
          step={5}
          desc="Check if the form is valid."
          imgUrl="/images/isFormValid.png"
          imgAlt="Code snippet for checking if the form is valid."
        />

        <LiExplanation
          step={6}
          desc="Render the form and the rest of the HTML elements."
          imgUrl="/images/htmlStructure.png"
          imgAlt="Code snippet for rendering the form and the rest of the HTML elements."
        />
      </ul>
    </section>
  )
}

export default Explanation
