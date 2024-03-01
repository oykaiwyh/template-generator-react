import { useEditorStore } from '@/store';
import SText from '@/components/SText';
import { CSSProperties, Fragment } from 'react';
import styles from './index.module.scss';

const RenderCustomComp = <T extends CSSProperties>(
  { id, name }: { id: string; name: string },
  props: T,
) => {
  const dispatch = useEditorStore((state) => state.useDispatch);

  switch (name) {
    case 's-text':
      return (
        <SText
          {...props}
          onClick={() =>
            dispatch({
              type: 'choose',
              payload: id,
            })
          }
        ></SText>
      );
    default:
      return <div>111</div>;
  }
};

const ContentCanvas = () => {
  const components = useEditorStore((state) => state.components);

  return (
    <div className={styles['center-canvas-container']}>
      {components.map((item) => (
        <Fragment key={item.id}>
          {RenderCustomComp<typeof item.props>(
            { id: item.id, name: item.name },
            { ...item.props },
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default ContentCanvas;
