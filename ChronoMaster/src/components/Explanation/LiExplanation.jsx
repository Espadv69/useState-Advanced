const LiExplanation = ({ step, description, imgUrl, imgAlt }) => {
  return (
    <li className="li__explanation">
      <p>
        <strong>{step}.</strong> {description}
      </p>
      <img src={imgUrl} alt={imgAlt} />
    </li>
  )
}

export default LiExplanation
