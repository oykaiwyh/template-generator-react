import testImg from '@/assets/images/Home/test.png';

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

export { initTemplatesState, initUserState };
