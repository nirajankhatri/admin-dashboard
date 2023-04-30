import React from 'react'

const InfoCard = ({title, info}) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{info}</h4>
    </div>
  )
}

export default InfoCard