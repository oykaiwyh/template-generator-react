import { BuildTwoTone, BulbTwoTone, Html5TwoTone } from '@ant-design/icons';
import { Col, Row } from 'antd';
import styles from './index.module.scss';

const HomeIconInfo = () => (
  <div className={styles['icon-container']}>
    <Row justify="center" style={{ textAlign: 'center' }}>
      <Col span={6}>
        <Html5TwoTone />
        <h3>专注H5 始终如一</h3>
        <p>三年保持行业领先</p>
      </Col>
      <Col span={6}>
        <BuildTwoTone />
        <h3>海量 H5 模版</h3>
        <p>一键生成，一分钟轻松制作</p>
      </Col>
      <Col span={6}>
        <BulbTwoTone />
        <h3>极致体验</h3>
        <p>用户的一致选择</p>
      </Col>
    </Row>
  </div>
);

export default HomeIconInfo;
