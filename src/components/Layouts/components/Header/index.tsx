// const Header = () => <div className={styles['header-container']}>Header</div>;

// export default Header;

import { Col, Row, Button } from 'antd';
import LogoImg from '@/assets/images/Home/logo.png';
import { useUserStore } from '@/store/store';
import styles from './index.module.scss';

const LoginComp = () => {
  const dispatch = useUserStore((state) => state.useDispatch);
  const isLogin = useUserStore((state) => state.isLogin);
  return (
    <div style={{ float: 'right' }}>
      {isLogin ? (
        <Button
          onClick={() =>
            dispatch({
              type: 'logout',
            })
          }
          role="none"
          type="primary"
          shape="round"
          size="middle"
        >
          登出
        </Button>
      ) : (
        <Button
          onClick={() =>
            dispatch({
              type: 'login',
            })
          }
          role="none"
          type="primary"
          shape="round"
          size="middle"
        >
          登陆
        </Button>
      )}
    </div>
  );
};

const Header = () => {
  console.log('--Header--');

  return (
    <div className={styles.container}>
      <Row>
        <Col span={12} style={{ display: 'flex', alignItems: 'center' }}>
          <img src={LogoImg} alt="" height="44" width="40" />
        </Col>
        <Col span={12}>
          <LoginComp />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
