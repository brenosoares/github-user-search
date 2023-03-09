import loadingIcon from '../../assets/loading.svg'
import { LoadingContent } from './style'

export const Loading = () => {

  return (
    <LoadingContent>
        <img src={loadingIcon} alt="loading"/>
    </LoadingContent>
  )
}