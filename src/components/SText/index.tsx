import { TTextProps } from '@/utils/interface';
import styles from './index.module.scss';

export type IETextProps = TTextProps & {
  onClick?: (e?: any) => {
    //
  };
};

const EText = ({
  text,
  tag: Tag = 'p',
  onClick,
  ...styleProps
}: IETextProps) => {
  console.log('--EText--', text);

  return (
    <Tag
      className={styles.container}
      style={{ ...styleProps }}
      onClick={onClick}
    >
      {text}
    </Tag>
  );
};

EText.defaultProps = {
  onClick: () => {
    //
  },
};

export default EText;
