import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessAtom = atom({
  key: "access",
  default: {
    accessAllowed: false,
    accessTokens: ["1212", "winnah", "password"],
  },
  effects_UNSTABLE: [persistAtom],
});
