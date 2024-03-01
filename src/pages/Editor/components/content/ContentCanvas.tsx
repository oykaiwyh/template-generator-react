import { useEditorStore } from '@/store';
import SText from '@/components/SText';
import { CSSProperties } from 'react';
import styles from './index.module.scss';

const computedComp = <T extends CSSProperties>(name: string, props: T) => {
  switch (name) {
    case 's-text':
      return <SText {...props}></SText>;
    default:
      return <div></div>;
  }
};

const ContentCanvas = () => {
  const components = useEditorStore((state) => state.components);

  return (
    <div className={styles['center-canvas-container']}>
      {components.map((item) =>
        computedComp<typeof item.props>(item.name, { ...item.props }),
      )}
    </div>
  );
};

export default ContentCanvas;
