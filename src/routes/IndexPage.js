import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import ProductList from '../components/ProductList';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Products</h1>
      <ProductList/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
