const LiExplanation = ({ step, desc, imgUrl, imgAlt }) => {
  return (
    <li className="li__explanation">
      <p>
        <strong>{step}.</strong> {desc}
      </p>
      <img src={imgUrl} alt={imgAlt} />
    </li>
  )
}

export default LiExplanation
