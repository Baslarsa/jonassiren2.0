import classNames from 'classnames'
import Image from 'next/image'

const Logo = ({ imageUrl, className }) => {
  return (
    <div className={classNames('relative', className)}>
      <Image src={imageUrl} layout="fill" objectFit="contain" />
    </div>
  )
}

export default Logo;
