import { User } from "iconsax-react";
import { TYPE_DATE } from "./enum";
export enum PATH {
  Any = "any",
  Home = "/",
  user = "/user",
}
export const Menu: {
  title: string;
  path: string;
  pathActive?: string;
  icon: any;
}[] = [
  {
    title: "Quản lý nhân viên",
    path: PATH.user,
    pathActive: "/user",
    icon: User,
  },
];

export const KEY_STORE = "quan-ly-loai";

export const ListOptionTimePicker: {
  name: string;
  value: number;
}[] = [
  {
    name: "Hôm nay",
    value: TYPE_DATE.TODAY,
  },
  {
    name: "Tuần này",
    value: TYPE_DATE.THIS_WEEK,
  },
  {
    name: "Tuần trước",
    value: TYPE_DATE.LAST_WEEK,
  },
  {
    name: "Tháng này",
    value: TYPE_DATE.THIS_MONTH,
  },
  {
    name: "Tháng trước",
    value: TYPE_DATE.LAST_MONTH,
  },
  {
    name: "Năm này",
    value: TYPE_DATE.THIS_YEAR,
  },
  {
    name: "Lựa chọn",
    value: TYPE_DATE.LUA_CHON,
  },
];
