import { Tabs, TabsProps } from 'antd';
import styles from './index.module.scss';
import AttributeSetting from '../contentLeftSetting/AttributeSetting';

const ContentRight = () => {
  const items: TabsProps['items'] = [
    {
      label: '属性设置',
      key: 'attribute',
      children: <AttributeSetting />,
    },
    {
      label: '图层设置',
      key: 'pageLevel',
      children: '图层设置',
    },
    {
      label: '页面设置',
      key: 'pageSetting',
      children: '页面设置',
    },
  ];

  return (
    <div className={styles['content-right-container']}>
      <Tabs defaultActiveKey="attribute" type="card" items={items}></Tabs>
    </div>
  );
};

export default ContentRight;
