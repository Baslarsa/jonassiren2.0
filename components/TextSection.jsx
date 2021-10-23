import { Button } from '@material-ui/core'
import classNames from 'classnames'
import { gql } from 'graphql-request'

export const TextSectionFragment = gql`
  fragment TextSectionFragment on TextSectionRecord {
    id
    title
    text
    textAlign
  }
`

const TextSection = ({ title, text, textAlign }) => {
  return (
    <div className="text-coal bg-white">
      <div className="max-w-3xl mx-auto py-8">
        <div
          className={classNames('py-10 w-auto px-8 md:px-16 xl:px-0', {
            'text-center': textAlign === 'Center',
            'text-left': textAlign === 'Left',
            'text-right': textAlign === 'Right',
          })}
        >
          <h2 className="md:w-full text-6xl">{title}</h2>
          <p
            className={classNames('text-lg', {
              'text-center': textAlign === 'Center',
              'text-left': textAlign === 'Left',
              'text-right': textAlign === 'Right',
            })}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TextSection
