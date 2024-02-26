import { Layout as AntdLayout } from 'antd';
import { FC, ReactNode } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from './index.module.scss';

interface ILayouts {
  children: ReactNode;
}

const {
  Header: AntdHeader,
  Footer: AntdFooter,
  Content: AntdContent,
} = AntdLayout;

const Layouts: FC<ILayouts> = ({ children }) => (
  <div className={styles['layouts-container']}>
    <AntdLayout>
      <AntdHeader>
        <Header />
      </AntdHeader>
      <AntdContent>{children}</AntdContent>
      <AntdFooter className={styles['footer-wrapper']}>
        <Footer />
      </AntdFooter>
    </AntdLayout>
  </div>
);

export default Layouts;
