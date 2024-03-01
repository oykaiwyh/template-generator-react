import { CSSProperties } from 'react';

// editor现支持dom元素类型
export type TTextType = 'h2' | 'p' | 'button';

type TPositionType = Pick<CSSProperties, 'position'>;
type TTextAlignType = Pick<CSSProperties, 'textAlign'>;

export type TTextProps = Partial<
  CSSProperties & {
    tag: TTextType;
    text: string;
    actionType: string;
    url: string;
  }
>;

interface IComponentsCommonProps {
  actionType: string; // actions
  url: string;
  height: string; // size
  width: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  borderStyle: string; // border type
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  boxShadow: string; // shadow and opacity
  opacity: number | string;
  position: TPositionType; // position and x,y
  left: string;
  top: string;
  right: string;
}

export interface IETextDefaultProps extends IComponentsCommonProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: TTextAlignType;
  color: string;
  backgroundColor: string;
}
