import React from 'react'
import PropTypes from 'prop-types'
import {
  LanguagesChip,
  ApplicationChip,
  FrameworksChip,
  LibrariesChip,
  MarkupChip,
  ToolsChip,
  ApiChip,
  ValidatorsChip,
  TestingChip,
  DefaultChip
} from './LabelStyles'

const Label = ({ category, skills }) => {
  switch (category) {
    case 'languages':
      return skills.map(skill => <LanguagesChip label={skill} key={skill} />)
    case 'application':
      return skills.map(skill => <ApplicationChip label={skill} key={skill} />)
    case 'frameworks':
      return skills.map(skill => <FrameworksChip label={skill} key={skill} />)
    case 'libraries':
      return skills.map(skill => <LibrariesChip label={skill} key={skill} />)
    case 'markup':
      return skills.map(skill => <MarkupChip label={skill} key={skill} />)
    case 'tools':
      return skills.map(skill => <ToolsChip label={skill} key={skill} />)
    case 'api':
      return skills.map(skill => <ApiChip label={skill} key={skill} />)
    case 'validators':
      return skills.map(skill => <ValidatorsChip label={skill} key={skill} />)
    case 'testing':
      return skills.map(skill => <TestingChip label={skill} key={skill} />)
    default:
      return skills.map(skill => <DefaultChip label={skill} key={skill} />)
  }
}

Label.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  category: PropTypes.string
}

export default Label
