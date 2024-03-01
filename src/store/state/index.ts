import testImg from '@/assets/images/Home/test.png';
import { TTextProps } from '@/utils/interface';
import { v4 as uuidv4 } from 'uuid';

export interface IUserProps {
  isLogin: boolean;
  userName?: string;
}

export interface ITemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

export interface IGlobalDataProps {
  user: IUserProps;
  templates: ITemplateProps[];
}

export interface IComponentProps {
  id: string;
  name: string;
  // props中包含了所以的css属性和文本节点的类型tag和内容text
  props: TTextProps;
}
export interface IEditorProps {
  currentComponentID: string | null;
  components: IComponentProps[];
}
const initTemplatesState = {
  template: [
    {
      id: 1,
      title: '这是测试模版海报信息',
      coverImg: testImg,
      author: 'XXX',
      copiedCount: 1,
    },
    {
      id: 2,
      title: '这是测试模版海报信息',
      coverImg: testImg,
      copiedCount: 1,
      author: 'XXX',
    },
    {
      id: 3,
      title: '这是测试模版海报信息',
      coverImg: testImg,
      copiedCount: 1,
      author: 'XXX',
    },
    {
      id: 4,
      title: '这是测试模版海报信息',
      coverImg: testImg,
      copiedCount: 1,
      author: 'XXX',
    },
  ],
};

const initUserState: IUserProps = {
  isLogin: false,
};

const initEditorState: IEditorProps = {
  currentComponentID: null,
  components: [
    {
      name: 's-text',
      id: uuidv4(),
      props: {
        tag: 'button',
        color: '#000000',
        text: 'hello3',
        fontSize: '30px',
        fontFamily: '"SimSun","STSong"',
      },
    },
    {
      name: 's-text',
      id: uuidv4(),
      props: {
        color: '#000000',
        text: 'hello4',
        fontSize: '30px',
        fontFamily: '',
        actionType: 'url',
        url: 'www.baidu.com',
      },
    },
  ],
};

export { initTemplatesState, initUserState, initEditorState };
