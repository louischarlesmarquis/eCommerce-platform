import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Bienvenue chez CFMSysteme',
  description: 'Nous vendons et installons des produits liés à la ventilation de bâtiments d,élevage',
  keywords: 'ventilation, agricole',
}

export default Meta

