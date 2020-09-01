import React from 'react';
import { List } from 'antd';

const data = ['a','b','c'];

const ProductList = () => {
  return (
    <List
    size="small"
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    bordered
    dataSource={data}
    renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
};
  
export default ProductList;