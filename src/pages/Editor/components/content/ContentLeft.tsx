import { Tabs, TabsProps } from 'antd';
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

const ContentLeft = () => {
  const items: TabsProps['items'] = [
    {
      key: 'text',
      label: (
        <span>
          <FieldStringOutlined />
          文本
        </span>
      ),
      children: <TextItems />,
    },
    {
      key: 'img',
      label: (
        <span>
          <FileImageOutlined />
          图片
        </span>
      ),
      children: '图片',
    },
    {
      key: 'shap',
      label: (
        <span>
          <BuildOutlined />
          形状
        </span>
      ),
      children: '形状',
    },
  ];

  return (
    <div className={styles['content-left-container']}>
      <Tabs centered items={items} />
    </div>
  );
};

export default ContentLeft;
