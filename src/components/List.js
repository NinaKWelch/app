import React from 'react'
import PropTypes from 'prop-types'

const List = ({ content }) => <li>{content}</li>

List.propTypes = {
  content: PropTypes.string.isRequired
}
export default List
