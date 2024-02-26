import { Col, Row } from 'antd';
import styles from './index.module.scss';

const lists = [
  {
    title: '购买课程',
    content: ['购买课程', '作业和打卡', '开源仓库', '帮助'],
  },
  {
    title: '作业和打卡',
    content: ['购买课程2', '作业和打卡2', '开源仓库2', '帮助2'],
  },
  {
    title: '开源仓库',
    content: ['购买课程3', '作业和打卡3', '开源仓库3', '帮助3'],
  },
  {
    title: '帮助',
    content: ['购买课程4', '作业和打卡4', '开源仓库4', '帮助4'],
  },
];
const ContactInfo = () => (
  <Row>
    {lists.map((list) => (
      <Col span={6} key={list.title}>
        <ul style={{ listStyle: 'none' }}>
          <h2 style={{ color: '#fff' }}>{list.title}</h2>
          {list.content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Col>
    ))}
  </Row>
);
const PropertyInfo = () => (
  <div style={{ textAlign: 'center' }}>
    © 慕课网（imooc.com）版权所有 | 津ICP备20000929号-2 购买课程 作业和打卡
    开源仓库 帮助
  </div>
);

const Footer = () => (
  <div className={styles['footer-container']}>
    <ContactInfo />
    <PropertyInfo />
  </div>
);

export default Footer;
