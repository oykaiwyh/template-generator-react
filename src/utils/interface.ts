import { CSSProperties } from 'react';

// editor现支持dom元素类型
export type TTextType = 'h2' | 'p' | 'button';

export type TTextProps = Partial<
  CSSProperties & {
    tag: TTextType;
    text: string;
    actionType: string;
    url: string;
  }
>;
