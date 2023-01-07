import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessAtom = atom({
  key: "access",
  default: true,
  effects_UNSTABLE: [persistAtom],
});
