import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBellConcierge,
  faCrutch,
  faHeart,
  faBus,
} from "@fortawesome/free-solid-svg-icons";
export type MeunKey = "Care" | "Devices" | "Transportation";
export const Levels = ["2級", "3級", "4級", "5級", "6級", "7級", "8級"];
interface I_LTCMeun {
  key: string;
  name: string;
  icon: IconDefinition;
  color: string;
}
interface I_LTCData {
  Care: I_Level;
}
interface I_Level {
  Name: string;
  Quota: number;
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
    icon: faBellConcierge,
    color: "",
  },
  {
    key: "FoodServices",
    name: "營養餐飲服務",
    icon: faBellConcierge,
    color: "",
  },
];
const LTCData = {
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
      },
      {
        id: "BA02",
        name: "基本日常照顧",
        price: 195,
      },
      {
        id: "BA03",
        name: "測量生命徵象",
        price: 35,
      },
      {
        id: "BA04",
        name: "協助餵食或灌食",
        price: 130,
      },
      {
        id: "BA05",
        name: "餐食照顧",
        price: 310,
      },
      {
        id: "BA07",
        name: "協助沐浴及洗頭",
        price: 325,
      },
      {
        id: "BA08",
        name: "足護護理",
        price: 500,
      },
      {
        id: "BA09",
        name: "到宅沐浴車服務--第1型",
        price: 2200,
      },
      {
        id: "BA09a",
        name: "到宅沐浴車服務--第2型(有管路)",
        price: 2500,
      },
      {
        id: "BA10",
        name: "翻身拍背",
        price: 155,
      },
      {
        id: "BA11",
        name: "肢體關節活動",
        price: 195,
      },
      {
        id: "BA12",
        name: "協助上下樓梯",
        price: 130,
      },
      {
        id: "BA13",
        name: "陪同外出",
        price: 195,
      },
      {
        id: "BA14",
        name: "陪同就醫",
        price: 685,
      },
      {
        id: "BA15",
        name: "家務協助",
        price: 195,
      },
      {
        id: "BA15-2",
        name: "家務協助(共用)",
        price: 97.5,
      },
      {
        id: "BA16",
        name: "代購或代領或代送服務",
        price: 130,
      },
      {
        id: "BA16-2",
        name: "代購或代領或代送服務(共用)",
        price: 65,
      },
      {
        id: "BA17a",
        name: "人工氣道管(非氣管內管)分泌物抽吸",
        price: 75,
      },
      {
        id: "BA17b",
        name: "口腔內分泌物抽吸",
        price: 65,
      },
      {
        id: "BA17c",
        name: "尿管及鼻胃管之清潔與固定",
        price: 50,
      },
      {
        id: "BA17d1",
        name: "血糖機驗血糖",
        price: 50,
      },
      {
        id: "BA17d2",
        name: "甘油球通便",
        price: 50,
      },
      {
        id: "BA17e",
        name: "依指示置入藥盒",
        price: 50,
      },
      {
        id: "BA18",
        name: "安全看視",
        price: 200,
      },
      {
        id: "BA20",
        name: "陪伴服務",
        price: 175,
      },
      {
        id: "BA22",
        name: "巡視服務",
        price: 130,
      },
      {
        id: "BA23",
        name: "協助洗頭",
        price: 200,
      },
      {
        id: "BA24",
        name: "協助排泄",
        price: 220,
      },
      {
        id: "BB01",
        name: "日間照顧（全日）--第1型",
        price: 675,
      },
      {
        id: "BB02",
        name: "日間照顧（半日）--第1型",
        price: 340,
      },
      {
        id: "BB03",
        name: "日間照顧（全日）--第2型",
        price: 840,
      },
      {
        id: "BB04",
        name: "日間照顧（半日）--第2型",
        price: 420,
      },
      {
        id: "BB05",
        name: "日間照顧（全日）--第3型",
        price: 920,
      },
      {
        id: "BB06",
        name: "日間照顧（半日）--第3型",
        price: 460,
      },
      {
        id: "BB07",
        name: "日間照顧（全日）--第4型",
        price: 1045,
      },
      {
        id: "BB08",
        name: "日間照顧（半日）--第4型",
        price: 525,
      },
      {
        id: "BB09",
        name: "日間照顧（全日）--第5型",
        price: 1130,
      },
      {
        id: "BB10",
        name: "日間照顧（半日）--第5型",
        price: 565,
      },
      {
        id: "BB11",
        name: "日間照顧（全日）--第6型",
        price: 1210,
      },
      {
        id: "BB12",
        name: "日間照顧（半日）--第6型",
        price: 605,
      },
      {
        id: "BB13",
        name: "日間照顧（全日）--第7型",
        price: 1285,
      },
      {
        id: "BB14",
        name: "日間照顧（半日）--第7型",
        price: 645,
      },
      {
        id: "BC01",
        name: "家庭托顧（全日）--第1型",
        price: 625,
      },
      {
        id: "BC02",
        name: "家庭托顧（半日）--第1型",
        price: 315,
      },
      {
        id: "BC03",
        name: "家庭托顧（全日）--第2型",
        price: 760,
      },
      {
        id: "BC04",
        name: "家庭托顧（半日）--第2型",
        price: 380,
      },
      {
        id: "BC05",
        name: "家庭托顧（全日）--第3型",
        price: 785,
      },
      {
        id: "BC06",
        name: "家庭托顧（半日）--第3型",
        price: 395,
      },
      {
        id: "BC07",
        name: "家庭托顧（全日）--第4型",
        price: 880,
      },
      {
        id: "BC08",
        name: "家庭托顧（半日）--第4型",
        price: 440,
      },
      {
        id: "BC09",
        name: "家庭托顧（全日）--第5型",
        price: 960,
      },
      {
        id: "BC10",
        name: "家庭托顧（半日）--第5型",
        price: 480,
      },
      {
        id: "BC11",
        name: "家庭托顧（全日）--第6型",
        price: 980,
      },
      {
        id: "BC12",
        name: "家庭托顧（半日）--第6型",
        price: 490,
      },
      {
        id: "BC13",
        name: "家庭托顧（全日）--第7型",
        price: 1040,
      },
      {
        id: "BC14",
        name: "家庭托顧（半日）--第7型",
        price: 520,
      },
      {
        id: "BD01",
        name: "社區式協助沐浴",
        price: 200,
      },
      {
        id: "BD02",
        name: "社區式晚餐",
        price: 150,
      },
      {
        id: "BD03",
        name: "社區式服務交通接送",
        price: 100,
      },
      {
        id: "CA07",
        name: "IADLs復能、ADLs復能照護(1組3次)",
        price: 4500,
      },
      {
        id: "CA08",
        name: "「個別化服務計畫(ISP)擬定與執行」(1組4次)",
        price: 6000,
      },
      {
        id: "CB01",
        name: "營養照護(1組4次)",
        price: 4000,
      },
      {
        id: "CB02",
        name: "進食與吞嚥照護(1組6次)",
        price: 9000,
      },
      {
        id: "CB03",
        name: "困擾行為照護(1組3次)",
        price: 4500,
      },
      {
        id: "CB04",
        name: "臥床或長期活動受限照護(1組6次)",
        price: 9000,
      },
      {
        id: "CC01",
        name: "居家環境安全或無障礙空間規劃",
        price: 2000,
      },
      {
        id: "CD02",
        name: "居家護理指導與諮詢(1組4次)",
        price: 6000,
      },
    ],
    Burden: {
      Normal: 0.16,
      Low: 0.05,
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
      Low: 0.09,
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
      Low: 0.1,
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
      },
      {
        id: "GA04",
        name: "日照喘息(半日)",
        price: 625,
      },
      {
        id: "GA05",
        name: "機構住宿式24小時喘息",
        price: 2310,
      },
      {
        id: "GA06",
        name: "小規模多機能夜間喘息",
        price: 2000,
      },
      {
        id: "GA07",
        name: "巷弄長照站喘息",
        price: 170,
      },
      {
        id: "GA09",
        name: "居家喘息(2小時)",
        price: 770,
      },
    ],
    Burden: {
      Normal: 0.16,
      Low: 0.05,
    },
  },
  ShortServices: {
    Level: [
      {
        Name: "Normal",
        Quota: 1840,
      },
    ],
    Item: [],
    Burden: {
      Normal: 0.27,
      Low: 0.09,
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
        price: "100",
      },
    ],
    Burden: {
      Normal: 0.27,
      Low: 0.09,
    },
  },
};

export default LTCData;
