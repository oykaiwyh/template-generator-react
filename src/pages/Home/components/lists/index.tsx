import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import testImg from '@/assets/images/Home/test.png';
import { Button, Card, Row, Col } from 'antd';
import styles from './index.module.scss';

const { Meta } = Card;

const ListTitle = () => (
  <div className={styles.title}>
    <span datatype="title">热门海报</span>
    <span datatype="desc">只需替换文字和图片，一键自动生成H5</span>
  </div>
);

const ListInfo = () => {
  const [hover, setHover] = useState<number | null>(null);
  const lists = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={styles['list-info']}>
      <Row gutter={24} style={{ width: '100%' }} justify="space-between">
        {lists.map((item, index) => (
          <Col
            key={item}
            style={{ marginBottom: '40px' }}
            span={6}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <Card
              className={styles['list-antd-card']}
              hoverable
              cover={
                <div className={styles['list-cover-container']}>
                  <img
                    src={testImg}
                    alt=""
                    className={
                      hover !== null && index === hover
                        ? styles['hover-img']
                        : ''
                    }
                  />
                  {hover !== null && index === hover ? (
                    <div className={styles.mantle}>
                      <Button type="primary" shape="round">
                        使用该模版创建
                      </Button>
                    </div>
                  ) : null}
                </div>
              }
            >
              {/* 底部信息 */}
              <Meta
                style={{ width: '100%' }}
                title={<div className={styles['bottom-title']}>每日分享</div>}
                description={
                  <div className={styles['bottom-content']}>
                    <span>作者：Miss</span>
                    <span datatype="person">
                      <UserOutlined /> 3000
                    </span>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const HomeLists = () => (
  <div className={styles.container}>
    <ListTitle />
    <ListInfo />
  </div>
);

export default HomeLists;
