import * as React from 'react';
import { Ellipsis, Item, Next, Pagination, Prev } from './style';
import prevIcon from '../../assets/angle-small-left.svg';
import nextIcon from '../../assets/angle-small-right.svg';

interface INavigationProps {
    perPage: number;
    currentPage: number,
    totalItems: number,
    onPageChanged: (page: number) => void

}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  
  const { perPage, currentPage, totalItems, onPageChanged } = props;

  if(totalItems >= perPage)
  return (
    <Pagination>
        <Prev disabled={currentPage <= 1} onClick={() => currentPage <= 1 ? 1 : onPageChanged(currentPage-1)}>
          <img src={prevIcon} alt="prev icon" />
        </Prev>
        <Item onClick={() => onPageChanged(1)} active={currentPage === 1}>{1}</Item>
        {currentPage > 2 && <Ellipsis>...</Ellipsis>}
        {[...Array(Math.ceil(totalItems / perPage))].map((_, i) => {
          if(i === 0){
            return <></>
          }
          if (i+1 >= currentPage - 2 && i+1 <= currentPage + 2) {
            return <Item key={i} active={i === currentPage - 1} onClick={() => onPageChanged(i + 1)}>
              {i + 1}
            </Item>
          }
          return <></>
        }
        )}
        {currentPage < Math.round((totalItems/perPage) - 3) && <Ellipsis>...</Ellipsis>}
        {currentPage < Math.round((totalItems/perPage) - 2) && <Item onClick={() => onPageChanged(Math.round(totalItems/perPage))}>{Math.round(totalItems/perPage)}</Item>}
        
        <Next disabled={currentPage >= totalItems/perPage} onClick={() => currentPage >= totalItems/perPage ? Math.round(totalItems/perPage) : onPageChanged(currentPage+1)}>
          <img src={nextIcon} alt="next icon" />
        </Next>
    </Pagination>
  )
  return <></>;
};

export default Navigation;

