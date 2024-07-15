import React from 'react';
import { Pagination as pagin} from 'antd';

const Pagination = ({ currentPage, pageSize, totallength,onChange }) => {
  
  return (
    <pagin
            current={currentPage}
            pageSize={pageSize}
            total={totallength}
            onChange={onChange}
            style={{ marginTop: 10, textAlign: 'center' }}
          />
  );
};

export default Pagination;