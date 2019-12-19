export const namespaced = true;

export interface GnbInfo {
  depth: number;
  id: string;
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
      id: '0',
      name: 'vue.js',
      iconNm: 'fab fa-vuejs',
      link: '/vue/preferences',
      sub: [
        {
          depth: 1,
          id: '0_0',
          name: 'vue.js 환경설정',
          iconNm: 'fab fa-vuejs',
          link: '',
          sub: [
            {
              depth: 2,
              id: '0_0_0',
              name: 'vue CLI 3',
              iconNm: 'fab fa-vuejs',
              link: '/vue/preferences',
              sub: [
                {
                  depth: 3,
                  id: '0_0_0_0',
                  name: 'vue aaa',
                  iconNm: 'fab fa-vuejs',
                  link: '/vue/preferences/aa',
                  sub: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      depth: 0,
      id: '1',
      name: 'react.js',
      iconNm: 'fab fa-react',
      link: '',
      sub: null,
    },
    {
      depth: 0,
      id: '2',
      name: 'javascript',
      iconNm: 'fab fa-js',
      link: '',
      sub: null,
    },
  ],
};
