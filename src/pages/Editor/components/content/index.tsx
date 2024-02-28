import { Col, Row } from 'antd';
// import styles from './index.module.scss';
import ContentCenter from './ContentCenter';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

const EditorContent = () => (
  <Row style={{ height: '100%' }}>
    <Col span={5}>
      <ContentLeft />
    </Col>
    <Col span={14}>
      <ContentCenter />
    </Col>
    <Col span={5}>
      <ContentRight />
    </Col>
  </Row>
);

export default EditorContent;
