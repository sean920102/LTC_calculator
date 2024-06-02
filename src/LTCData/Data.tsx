import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBellConcierge,
  faCrutch,
  faHeart,
  faBus,
  faCalendarDay,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";
export const LTCState = {
  Levels: ["2級", "3級", "4級", "5級", "6級", "7級", "8級"],
  Types: ["一般戶", "中低收入戶", "低收入戶"],
  Other: ["無", "有外籍看護", "有特別津貼"],
};
interface I_LTCMeun {
  key: string;
  name: string;
  icon: IconDefinition;
  color: string;
}
export const LTCMeun: I_LTCMeun[] = [
  { key: "Care", name: "照顧及專業服務", icon: faHeart, color: "" },
  { key: "Transportation", name: "交通接送", icon: faBus, color: "" },
  {
    key: "Devices",
    name: "輔具及無障礙環境改善服務",
    icon: faCrutch,
    color: "",
  },
  {
    key: "RespiteServices",
    name: "喘息服務",
    icon: faBellConcierge,
    color: "",
  },
  {
    key: "ShortServices",
    name: "短期替代照顧服務",
    icon: faCalendarDay,
    color: "",
  },
  {
    key: "FoodServices",
    name: "營養餐飲服務",
    icon: faBowlFood,
    color: "",
  },
];
export interface I_Item {
  id: string;
  name: string;
  price: number;
  otherService: boolean;
}
interface I_Burden {
  Normal: number;
  Mid: number;
}
interface I_Level {
  Name: string;
  Quota: number;
}
export interface I_DataNode {
  Level: I_Level[];
  Item: I_Item[];
  Burden: I_Burden;
}
interface I_LTCData {
  Care: I_DataNode;
  Transportation: I_DataNode;
  Devices: I_DataNode;
  RespiteServices: I_DataNode;
  ShortServices: I_DataNode;
  FoodServices: I_DataNode;
}
const LTCData: I_LTCData = {
  Care: {
    Level: [
      {
        Name: "2級",
        Quota: 10020,
      },
      {
        Name: "3級",
        Quota: 15460,
      },
      {
        Name: "4級",
        Quota: 18580,
      },
      {
        Name: "5級",
        Quota: 24100,
      },
      {
        Name: "6級",
        Quota: 28070,
      },
      {
        Name: "7級",
        Quota: 32090,
      },
      {
        Name: "8級",
        Quota: 36180,
      },
    ],
    Item: [
      {
        id: "BA01",
        name: "基本身體清潔",
        price: 260,
        otherService: false,
      },
      {
        id: "BA02",
        name: "基本日常照顧",
        price: 195,
        otherService: false,
      },
      {
        id: "BA03",
        name: "測量生命徵象",
        price: 35,
        otherService: false,
      },
      {
        id: "BA04",
        name: "協助餵食或灌食",
        price: 130,
        otherService: false,
      },
      {
        id: "BA05",
        name: "餐食照顧",
        price: 310,
        otherService: false,
      },
      {
        id: "BA07",
        name: "協助沐浴及洗頭",
        price: 325,
        otherService: false,
      },
      {
        id: "BA08",
        name: "足護護理",
        price: 500,
        otherService: false,
      },
      {
        id: "BA09",
        name: "到宅沐浴車服務--第1型",
        price: 2200,
        otherService: true,
      },
      {
        id: "BA09a",
        name: "到宅沐浴車服務--第2型(有管路)",
        price: 2500,
        otherService: true,
      },
      {
        id: "BA10",
        name: "翻身拍背",
        price: 155,
        otherService: false,
      },
      {
        id: "BA11",
        name: "肢體關節活動",
        price: 195,
        otherService: false,
      },
      {
        id: "BA12",
        name: "協助上下樓梯",
        price: 130,
        otherService: false,
      },
      {
        id: "BA13",
        name: "陪同外出",
        price: 195,
        otherService: false,
      },
      {
        id: "BA14",
        name: "陪同就醫",
        price: 685,
        otherService: false,
      },
      {
        id: "BA15",
        name: "家務協助",
        price: 195,
        otherService: false,
      },
      {
        id: "BA15-2",
        name: "家務協助(共用)",
        price: 97.5,
        otherService: false,
      },
      {
        id: "BA16",
        name: "代購或代領或代送服務",
        price: 130,
        otherService: false,
      },
      {
        id: "BA16-2",
        name: "代購或代領或代送服務(共用)",
        price: 65,
        otherService: false,
      },
      {
        id: "BA17a",
        name: "人工氣道管(非氣管內管)分泌物抽吸",
        price: 75,
        otherService: false,
      },
      {
        id: "BA17b",
        name: "口腔內分泌物抽吸",
        price: 65,
        otherService: false,
      },
      {
        id: "BA17c",
        name: "尿管及鼻胃管之清潔與固定",
        price: 50,
        otherService: false,
      },
      {
        id: "BA17d1",
        name: "血糖機驗血糖",
        price: 50,
        otherService: false,
      },
      {
        id: "BA17d2",
        name: "甘油球通便",
        price: 50,
        otherService: false,
      },
      {
        id: "BA17e",
        name: "依指示置入藥盒",
        price: 50,
        otherService: false,
      },
      {
        id: "BA18",
        name: "安全看視",
        price: 200,
        otherService: false,
      },
      {
        id: "BA20",
        name: "陪伴服務",
        price: 175,
        otherService: false,
      },
      {
        id: "BA22",
        name: "巡視服務",
        price: 130,
        otherService: false,
      },
      {
        id: "BA23",
        name: "協助洗頭",
        price: 200,
        otherService: false,
      },
      {
        id: "BA24",
        name: "協助排泄",
        price: 220,
        otherService: false,
      },
      {
        id: "BB01",
        name: "日間照顧（全日）--第1型",
        price: 675,
        otherService: false,
      },
      {
        id: "BB02",
        name: "日間照顧（半日）--第1型",
        price: 340,
        otherService: false,
      },
      {
        id: "BB03",
        name: "日間照顧（全日）--第2型",
        price: 840,
        otherService: false,
      },
      {
        id: "BB04",
        name: "日間照顧（半日）--第2型",
        price: 420,
        otherService: false,
      },
      {
        id: "BB05",
        name: "日間照顧（全日）--第3型",
        price: 920,
        otherService: false,
      },
      {
        id: "BB06",
        name: "日間照顧（半日）--第3型",
        price: 460,
        otherService: false,
      },
      {
        id: "BB07",
        name: "日間照顧（全日）--第4型",
        price: 1045,
        otherService: false,
      },
      {
        id: "BB08",
        name: "日間照顧（半日）--第4型",
        price: 525,
        otherService: false,
      },
      {
        id: "BB09",
        name: "日間照顧（全日）--第5型",
        price: 1130,
        otherService: false,
      },
      {
        id: "BB10",
        name: "日間照顧（半日）--第5型",
        price: 565,
        otherService: false,
      },
      {
        id: "BB11",
        name: "日間照顧（全日）--第6型",
        price: 1210,
        otherService: false,
      },
      {
        id: "BB12",
        name: "日間照顧（半日）--第6型",
        price: 605,
        otherService: false,
      },
      {
        id: "BB13",
        name: "日間照顧（全日）--第7型",
        price: 1285,
        otherService: false,
      },
      {
        id: "BB14",
        name: "日間照顧（半日）--第7型",
        price: 645,
        otherService: false,
      },
      {
        id: "BC01",
        name: "家庭托顧（全日）--第1型",
        price: 625,
        otherService: false,
      },
      {
        id: "BC02",
        name: "家庭托顧（半日）--第1型",
        price: 315,
        otherService: false,
      },
      {
        id: "BC03",
        name: "家庭托顧（全日）--第2型",
        price: 760,
        otherService: false,
      },
      {
        id: "BC04",
        name: "家庭托顧（半日）--第2型",
        price: 380,
        otherService: false,
      },
      {
        id: "BC05",
        name: "家庭托顧（全日）--第3型",
        price: 785,
        otherService: false,
      },
      {
        id: "BC06",
        name: "家庭托顧（半日）--第3型",
        price: 395,
        otherService: false,
      },
      {
        id: "BC07",
        name: "家庭托顧（全日）--第4型",
        price: 880,
        otherService: false,
      },
      {
        id: "BC08",
        name: "家庭托顧（半日）--第4型",
        price: 440,
        otherService: false,
      },
      {
        id: "BC09",
        name: "家庭托顧（全日）--第5型",
        price: 960,
        otherService: false,
      },
      {
        id: "BC10",
        name: "家庭托顧（半日）--第5型",
        price: 480,
        otherService: false,
      },
      {
        id: "BC11",
        name: "家庭托顧（全日）--第6型",
        price: 980,
        otherService: false,
      },
      {
        id: "BC12",
        name: "家庭托顧（半日）--第6型",
        price: 490,
        otherService: false,
      },
      {
        id: "BC13",
        name: "家庭托顧（全日）--第7型",
        price: 1040,
        otherService: false,
      },
      {
        id: "BC14",
        name: "家庭托顧（半日）--第7型",
        price: 520,
        otherService: false,
      },
      {
        id: "BD01",
        name: "社區式協助沐浴",
        price: 200,
        otherService: false,
      },
      {
        id: "BD02",
        name: "社區式晚餐",
        price: 150,
        otherService: false,
      },
      {
        id: "BD03",
        name: "社區式服務交通接送",
        price: 100,
        otherService: true,
      },
      {
        id: "CA07",
        name: "IADLs復能、ADLs復能照護(1組3次)",
        price: 4500,
        otherService: true,
      },
      {
        id: "CA08",
        name: "「個別化服務計畫(ISP)擬定與執行」(1組4次)",
        price: 6000,
        otherService: true,
      },
      {
        id: "CB01",
        name: "營養照護(1組4次)",
        price: 4000,
        otherService: true,
      },
      {
        id: "CB02",
        name: "進食與吞嚥照護(1組6次)",
        price: 9000,
        otherService: true,
      },
      {
        id: "CB03",
        name: "困擾行為照護(1組3次)",
        price: 4500,
        otherService: true,
      },
      {
        id: "CB04",
        name: "臥床或長期活動受限照護(1組6次)",
        price: 9000,
        otherService: true,
      },
      {
        id: "CC01",
        name: "居家環境安全或無障礙空間規劃",
        price: 2000,
        otherService: true,
      },
      {
        id: "CD02",
        name: "居家護理指導與諮詢(1組4次)",
        price: 6000,
        otherService: true,
      },
    ],
    Burden: {
      Normal: 0.16,
      Mid: 0.05,
    },
  },
  Transportation: {
    Level: [
      {
        Name: "Normal",
        Quota: 1840,
      },
    ],
    Item: [],
    Burden: {
      Normal: 0.27,
      Mid: 0.09,
    },
  },
  Devices: {
    Level: [
      {
        Name: "Normal",
        Quota: 40000,
      },
    ],
    Item: [],
    Burden: {
      Normal: 0.3,
      Mid: 0.1,
    },
  },
  RespiteServices: {
    Level: [
      {
        Name: "2級",
        Quota: 32340,
      },
      {
        Name: "3級",
        Quota: 32340,
      },
      {
        Name: "4級",
        Quota: 32340,
      },
      {
        Name: "5級",
        Quota: 32340,
      },
      {
        Name: "6級",
        Quota: 32340,
      },
      {
        Name: "7級",
        Quota: 48510,
      },
      {
        Name: "8級",
        Quota: 48510,
      },
    ],
    Item: [
      {
        id: "GA03",
        name: "日照喘息(全日)",
        price: 1250,
        otherService: true,
      },
      {
        id: "GA04",
        name: "日照喘息(半日)",
        price: 625,
        otherService: true,
      },
      {
        id: "GA05",
        name: "機構住宿式24小時喘息",
        price: 2310,
        otherService: true,
      },
      {
        id: "GA06",
        name: "小規模多機能夜間喘息",
        price: 2000,
        otherService: true,
      },
      {
        id: "GA07",
        name: "巷弄長照站喘息",
        price: 170,
        otherService: true,
      },
      {
        id: "GA09",
        name: "居家喘息(2小時)",
        price: 770,
        otherService: true,
      },
    ],
    Burden: {
      Normal: 0.16,
      Mid: 0.05,
    },
  },
  ShortServices: {
    Level: [
      {
        Name: "2級",
        Quota: 87780,
      },
      {
        Name: "3級",
        Quota: 87780,
      },
      {
        Name: "4級",
        Quota: 87780,
      },
      {
        Name: "5級",
        Quota: 87780,
      },
      {
        Name: "6級",
        Quota: 87780,
      },
      {
        Name: "7級",
        Quota: 71610,
      },
      {
        Name: "8級",
        Quota: 71610,
      },
    ],
    Item: [
      {
        id: "SC03",
        name: "日照喘息(全日)",
        price: 1250,
        otherService: true,
      },
      {
        id: "SC04",
        name: "日照喘息(半日)",
        price: 625,
        otherService: true,
      },
      {
        id: "SC05",
        name: "機構住宿式24小時喘息",
        price: 2310,
        otherService: true,
      },
      {
        id: "SC06",
        name: "小規模多機能夜間喘息",
        price: 2000,
        otherService: true,
      },
      {
        id: "SC07",
        name: "巷弄長照站喘息",
        price: 170,
        otherService: true,
      },
      {
        id: "SC09",
        name: "居家喘息(2小時)",
        price: 770,
        otherService: true,
      },
    ],
    Burden: {
      Normal: 0.16,
      Mid: 0.05,
    },
  },
  FoodServices: {
    Level: [
      {
        Name: "Normal",
        Quota: 1840,
      },
    ],
    Item: [
      {
        id: "OT01",
        name: "營養餐飲",
        price: 100,
        otherService: true,
      },
    ],
    Burden: {
      Normal: 0.27,
      Mid: 0.09,
    },
  },
};

export default LTCData;
