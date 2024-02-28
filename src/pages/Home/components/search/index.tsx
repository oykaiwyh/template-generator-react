import { Input } from 'antd';
import styles from './index.module.scss';

const { Search } = Input;

const HomeSearch = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <span datatype="title">海量精彩设计 一键生成</span>
      <Search
        placeholder="搜索一下，快速找模版"
        onSearch={() => {
          console.log('search');
        }}
        enterButton
      />
    </div>
  </div>
);

export default HomeSearch;
