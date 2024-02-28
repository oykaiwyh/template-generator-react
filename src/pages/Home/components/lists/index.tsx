import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import testImg from '@/assets/images/Home/test.png';
import { Button, Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useTemplateStore } from '@/store';
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
  const templates = useTemplateStore((state) => state.template);

  return (
    <div className={styles['list-info']}>
      <Row gutter={24} style={{ width: '100%' }} justify="space-between">
        {templates.map((item, index) => (
          <Col
            key={item.id}
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
                      <Link to={`/template/${item.id}`}>
                        <Button type="primary" shape="round">
                          使用该模版创建
                        </Button>
                      </Link>
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
                    <span>作者：{item.author}</span>
                    <span datatype="person">
                      <UserOutlined /> {item.copiedCount}
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
