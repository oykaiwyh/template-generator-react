import { Button, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import testImg from '@/assets/images/Home/test.png';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const RightContent = () => {
  console.log('-----RightContent----');

  return (
    <div className={styles['template-right-content-container']}>
      <div className={styles['info-wrapper']}>
        <span className={styles.title}>这是测试模版海报信息</span>
        <span className={styles['child-title']}>这是测试模版海报信息</span>
        <span className={styles.des}>该模版由XXX创建</span>
      </div>

      <div className={styles.qrcode}>扫一扫，手机预览</div>

      <div>
        <Link to={'/editor'}>
          <Button type="primary">使用模版</Button>
        </Link>

        <Button style={{ marginLeft: '10px' }}>下载模版海报</Button>
      </div>
    </div>
  );
};

const Template = () => (
  <div className={styles['template-container']}>
    <Layout>
      <Layout>
        <Content
          style={{
            textAlign: 'right',
            alignContent: 'center',
            marginRight: '10px',
          }}
        >
          <img src={testImg} alt="" width={'50%'} />
        </Content>
        <Sider
          width="50%"
          style={{ textAlign: 'left', background: 'none', marginLeft: '10px' }}
        >
          <RightContent />
        </Sider>
      </Layout>
    </Layout>
  </div>
);

export default Template;
