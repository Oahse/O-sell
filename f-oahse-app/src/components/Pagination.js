import React from 'react';
import { Pagination as Pg} from 'antd';

const Pagination = ({ currentPage, pageSize, totallength,onChange }) => {
  
  return (
    <Pg
      current={currentPage}
      pageSize={pageSize}
      total={totallength}
      onChange={onChange}
      align='center'
      style={{ marginTop: 18}}
    />
  );
};

export default Pagination;