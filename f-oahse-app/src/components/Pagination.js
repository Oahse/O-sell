import {React} from './all_imports';

import IconButton from './Iconbutton';

import './Pagination.css';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevPage = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  return (
    <div className="pagination m-2 align-items-center justify-content-center">
        <IconButton text='Previous' onClick={handlePrevPage} color='warning' disabled={currentPage === 1}/>
        <span className='page-details'> Current Page {currentPage} of {totalPages}</span>
        <IconButton text='Next' onClick={handleNextPage} color='warning' disabled={currentPage === totalPages}/>
    </div>
  );
};

export default Pagination;
