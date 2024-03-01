import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import {
  BuildOutlined,
  FieldStringOutlined,
  FileImageOutlined,
} from '@ant-design/icons';
import { canvasDefaultTextLists } from '@/utils/const';
import SText from '@/components/SText';
import { useEditorStore } from '@/store';
import { v4 as uuidv4 } from 'uuid';
import { IComponentProps } from '@/store/state';
import styles from './index.module.scss';

const TextItems = () => {
  const dispatch = useEditorStore((state) => state.useDispatch);
  return (
    <div>
      {canvasDefaultTextLists.map((compAttribute) => (
        <div
          key={`${compAttribute.id}`}
          onClick={() =>
            dispatch<IComponentProps>({
              type: 'add',
              payload: {
                ...compAttribute,
                id: uuidv4(),
              },
            })
          }
          role="none"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <SText {...compAttribute.props} position="static" />
        </div>
      ))}
    </div>
  );
};

const ContentLeft = () => (
  <div className={styles['content-left-container']}>
    <Tabs centered>
      <TabPane
        tab={
          <span>
            <FieldStringOutlined />
            文本
          </span>
        }
        key="text"
      >
        <TextItems />
      </TabPane>
      <TabPane
        tab={
          <span>
            <FileImageOutlined />
            图片
          </span>
        }
        key="img"
      >
        图片
      </TabPane>
      <TabPane
        tab={
          <span>
            <BuildOutlined />
            形状
          </span>
        }
        key="shap"
      >
        形状
      </TabPane>
    </Tabs>
  </div>
);

export default ContentLeft;
