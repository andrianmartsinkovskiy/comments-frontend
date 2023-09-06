import { Oval } from 'react-loader-spinner'
import c from './style.module.css'

const LoaderDefault = () => {
  return (
    <div className={c.wrap}>
      <Oval
        height='80'
        width='80'
        color='blue'
        ariaLabel='loading'
        secondaryColor='grey'
      />
    </div>
  )
}

export {
  LoaderDefault
}
