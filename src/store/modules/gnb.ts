export interface GnbInfo {
  gnbNo: number;
  name: string;
  iconNm: string;
  sub: Object | null;
}

interface State {
  gnbList: GnbInfo[];
}

export const state: State = {
  gnbList: [
    {
      gnbNo : 0,
      name : 'vue.js',
      iconNm : 'fab fa-vuejs',
      sub : true,
    },
  ],
};
