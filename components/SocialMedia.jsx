import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import classNames from 'classnames'

const SocialMedia = ({ className }) => {
  return (
    <div className={classNames('flex items-center justify-center', className)}>
      <div className="p-1">
        <a href="https://www.facebook.com/sirensoundfactory">
          <FacebookIcon className="fill-current text-coal" />
        </a>
      </div>
      <div className="p-1">
        <a href="https://www.instagram.com/sirensoundfactory/">
          <InstagramIcon className="fill-current text-coal" />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
