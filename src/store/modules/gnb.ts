export const namespaced = true;

export interface GnbInfo {
  depth: number;
  name: string;
  iconNm: string;
  link: string;
  sub: GnbInfo[] | null;
}
interface State {
  gnbList: GnbInfo[];
}

export const state: State = {
  gnbList: [
    {
      depth: 0,
      name: 'vue.js',
      iconNm: 'fab fa-vuejs',
      link: '',
      sub: [
        {
          depth: 1,
          name: 'vue.js 환경설정',
          iconNm: 'fab fa-vuejs',
          link: '',
          sub: null,
        },
      ],
    },
  ],
};
