import { useEditorStore } from '@/store';
import { Collapse, CollapseProps, Empty } from 'antd';
import { useShallow } from 'zustand/react/shallow';
import { Fragment } from 'react';
import { useHandlePropsToListForm } from './hooks';
import MemoRenderAdapterComp from './common';

const BaseAttribute = () => {
  const { showBaseAttributeTrees, handleEditComponentsAttr } =
    useHandlePropsToListForm();

  return (
    <div>
      {showBaseAttributeTrees.map((item, index) => (
        <Fragment key={index}>
          <MemoRenderAdapterComp
            {...item}
            onChange={handleEditComponentsAttr}
          />
          {/* {RenderAdapterComp({
            ...item,
            onChange: (value: CSSProperties) =>
              dispatch({ type: 'change', payload: value }),
          })} */}
        </Fragment>
      ))}
    </div>
  );
};

const AttributeSetting = () => {
  const { currentComponentID } = useEditorStore(
    useShallow((state) => ({
      currentComponentID: state.currentComponentID,
    })),
  );

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '基本属性',
      children: <BaseAttribute />,
    },
    {
      key: '2',
      label: '尺寸',
      children: <p>{2}</p>,
    },
    {
      key: '3',
      label: '边框',
      children: <p>{3}</p>,
    },
    {
      key: '4',
      label: '阴影与透明度',
      children: <p>{4}</p>,
    },
    {
      key: '5',
      label: '位置',
      children: <p>{4}</p>,
    },
    {
      key: '6',
      label: '事件功能',
      children: <p>{6}</p>,
    },
  ];

  return (
    <div>
      {currentComponentID ? (
        <Collapse items={items} defaultActiveKey={['1']} />
      ) : (
        <Empty description="暂无数据" />
      )}
    </div>
  );
};

export default AttributeSetting;
