export interface GnbInfo {
  gnbNo: number;
  name: string;
  iconNm: string;
  isSub: boolean;
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
      isSub : true,
    },
  ],
};
