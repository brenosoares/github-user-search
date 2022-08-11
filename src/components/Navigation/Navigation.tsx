import * as React from 'react';
import Pagination from 'react-bootstrap/Pagination';


interface INavigationProps {
    perPage: number;
    currentPage: number,
    totalItems: number,
    onPageChanged: (page: number) => void

}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  
  const { perPage, currentPage, totalItems, onPageChanged } = props;

  return (
    <Pagination>
        <Pagination.Prev disabled={currentPage <= 1} onClick={() => onPageChanged(currentPage-1)}/>
        {currentPage > 3 && <Pagination.Item onClick={() => onPageChanged(1)}>{1}</Pagination.Item>}
        {currentPage > 4 && <Pagination.Ellipsis/>}
        {[...Array(Math.ceil(totalItems / perPage))].map((_, i) => {
          if (i+1 >= currentPage - 2 && i+1 <= currentPage + 2) {
            return <Pagination.Item key={i} active={i === currentPage - 1} onClick={() => onPageChanged(i + 1)}>
              {i + 1}
            </Pagination.Item>
          }
        }
        )}
        {currentPage < Math.round((totalItems/perPage) - 3) && <Pagination.Ellipsis/>}
        {currentPage < Math.round((totalItems/perPage) - 2) && <Pagination.Item onClick={() => onPageChanged(Math.round(totalItems/perPage))}>{Math.round(totalItems/perPage)}</Pagination.Item>}
        
        <Pagination.Next disabled={currentPage >= totalItems/perPage} onClick={() => onPageChanged(currentPage+1)}/>
    </Pagination>
  );
};

export default Navigation;

