import { CSSProperties } from 'react';

// editor现支持dom元素类型
export type TTextType = 'h2' | 'p' | 'button';

type TPositionType = Pick<CSSProperties, 'position'>;
type TTextAlignType = Pick<CSSProperties, 'textAlign'>;

type TBaseTreesTypes =
  | 'TextArea'
  | 'Input'
  | 'Select'
  | 'SelectAndRadio'
  | 'Slider'
  | 'Radio'
  | 'ButtonTip'
  | 'ColorPick';

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

export interface PropToForm {
  component: TBaseTreesTypes;
  subComponent?: string;
  value: string;
  extraProps?: { [key: string]: any };
  title?: string;
  options?: { text: string; value: any }[];
  // NOTE: 怎么把 initalTransform 改为范型
  initalTransform?: (v: any) => typeof v; // 做数据的转换 number -> string, value加上px等
  onChangeTransform?: (v: any) => typeof v;
  valueProp?: string; // 组件改变数据不是value
}

export type PropsToForms = {
  [P in keyof IETextDefaultProps]?: PropToForm;
};

// left - 属性设置
export interface IBaseTrees {
  id: number | string;
  title: string;
  type: TBaseTreesTypes;
  attribute: keyof (CSSProperties & { text: string });
  value?: unknown;
  attributeOptions?: unknown;
  ExtraOptions?: unknown;
  attributeRange?: {
    min: number;
    max: number;
    step: number;
  };
}
