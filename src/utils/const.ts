import { v4 as uuidv4 } from 'uuid';
import { CSSProperties } from 'react';
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
} from '@ant-design/icons';
import { IBaseTrees, PropsToForms, TTextType } from './interface';

const commonDefaultProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // position and x,y
  position: 'static',
  left: '0',
  top: '0',
  right: '0',
};

const textDefaultProps = {
  // basic props - font styles
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps,
  width: '318px',
};

const canvasLeftTextLists: (CSSProperties & {
  tag: TTextType;
  text: string;
})[] = [
  {
    text: '大标题',
    fontSize: '30px',
    fontWeight: 'bold',
    tag: 'h2',
  },
  {
    text: '楷体副标题',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: '"KaiTi","STKaiti"',
    tag: 'h2',
  },
  {
    text: '正文内容',
    tag: 'p',
  },
  {
    text: '宋体正文内容',
    tag: 'p',
    fontFamily: '"SimSun","STSong"',
  },
  {
    text: 'Arial style',
    tag: 'p',
    fontFamily: '"Arial", sans-serif',
  },
  {
    text: 'Comic Sans',
    tag: 'p',
    fontFamily: '"Comic Sans MS"',
  },
  {
    text: 'Courier New',
    tag: 'p',
    fontFamily: '"Courier New", monospace',
  },
  {
    text: 'Times New Roman',
    tag: 'p',
    fontFamily: '"Times New Roman", serif',
  },
  {
    text: '链接内容',
    color: '#1890ff',
    textDecoration: 'underline',
    tag: 'p',
  },
  {
    text: '按钮内容',
    color: '#ffffff',
    backgroundColor: '#1890ff',
    borderWidth: '1px',
    borderColor: '#1890ff',
    borderStyle: 'solid',
    borderRadius: '2px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    width: '100px',
    tag: 'button',
    // textAlign: 'center',
  },
];

const canvasDefaultTextLists = canvasLeftTextLists.map((prop) => ({
  name: 's-text',
  id: uuidv4(),
  props: {
    ...(textDefaultProps as CSSProperties),
    ...prop,
    ...{
      fontSize: '14px',
      width: '125px',
      height: '36px',
      left: `${320 / 2 - 125 / 2}px`,
      top: `${500 / 2 - 36 / 2}px`,
    },
  },
}));

// right - 默认字体定义
const defaultFontFamily = [
  { id: 0, text: '无', value: '' },
  { id: 1, text: '宋体', value: '"SimSun","STSong"' },
  { id: 2, text: '黑体', value: '"SimHei","STHeiti"' },
  { id: 3, text: '楷体', value: '"KaiTi","STKaiti"' },
  { id: 4, text: '仿宋', value: '"FangSong","STFangsong"' },
  { id: 5, text: 'Arial', value: '"Arial", sans-serif' },
  { id: 6, text: 'Arial Black', value: '"Arial Black", sans-serif' },
  { id: 7, text: 'Comic Sans MS', value: '"Comic Sans MS"' },
  { id: 8, text: 'Courier New', value: '"Courier New", monospace' },
  { id: 9, text: 'Georgia', value: '"Georgia", serif' },
  { id: 10, text: 'Times New Roman', value: '"Times New Roman", serif' },
];

// right - 属性设置
const baseAttributeTrees: IBaseTrees[] = [
  {
    id: 1,
    title: '文本:',
    type: 'TextArea',
    attribute: 'text',
  },
  {
    id: 2,
    title: '字号:',
    type: 'Input',
    attribute: 'fontSize',
  },
  {
    id: 3,
    title: '字体:',
    type: 'SelectAndRadio',
    attribute: 'fontFamily',
    attributeOptions: defaultFontFamily,
  },
  {
    id: '3-1',
    title: '',
    type: 'ButtonTip',
    attribute: 'fontWeight',
    ExtraOptions: {
      IconName: BoldOutlined,
      tip: '加粗',
      value: 'bold',
    },
  },
  {
    id: '3-2',
    title: '',
    type: 'ButtonTip',
    attribute: 'fontStyle',
    ExtraOptions: {
      IconName: ItalicOutlined,
      tip: '斜体',
      value: 'italic',
    },
  },
  {
    id: '3-4',
    title: '',
    type: 'ButtonTip',
    attribute: 'textDecoration',
    ExtraOptions: {
      IconName: UnderlineOutlined,
      tip: '下划线',
      value: 'underline',
    },
  },
  {
    id: 4,
    title: '行高:',
    type: 'Slider',
    attribute: 'lineHeight',
    attributeRange: {
      min: 0,
      max: 3,
      step: 0.1,
    },
  },
  {
    id: 5,
    title: '对齐:',
    type: 'Radio',
    attribute: 'textAlign',
    attributeOptions: [
      { id: 1, value: 'left', text: '左' },
      { id: 2, value: 'center', text: '中' },
      { id: 3, value: 'right', text: '右' },
    ],
  },
  {
    id: 6,
    title: '文字颜色:',
    type: 'ColorPick',
    attribute: 'color',
  },
  {
    id: 7,
    title: '背景颜色:',
    type: 'ColorPick',
    attribute: 'backgroundColor',
  },
];
const baseAttrTrees: PropsToForms = {
  text: {
    title: '文本:',
    component: 'TextArea',
    value: '',
  },
  fontSize: {
    title: '字号:',
    component: 'Input',
    value: '',
    initalTransform: (v: string) => v.split('px')?.[0],
    onChangeTransform: (v: string) => `${v}px`,
  },
};

export {
  commonDefaultProps,
  textDefaultProps,
  canvasDefaultTextLists,
  baseAttributeTrees,
  baseAttrTrees,
};
