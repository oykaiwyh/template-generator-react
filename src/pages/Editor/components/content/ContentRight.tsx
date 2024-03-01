import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import styles from './index.module.scss';
import AttributeSetting from '../contentLeftSetting/AttributeSetting';

const ContentRight = () => (
  <div className={styles['content-right-container']}>
    <Tabs defaultActiveKey="1" type="card">
      <TabPane tab="属性设置" key="attribute">
        <AttributeSetting />
      </TabPane>
      <TabPane tab="图层设置" key="pageLevel">
        图层设置
      </TabPane>
      <TabPane tab="页面设置" key="pageSetting">
        页面设置
      </TabPane>
    </Tabs>
  </div>
);

export default ContentRight;
