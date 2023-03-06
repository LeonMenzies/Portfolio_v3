import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessAtom = atom({
  key: "access",
  default: {
    accessAllowed: false,
    accessTokens: [
      "5950acec6e7bf6f55b899ef02dcaac5fec3a9967f2db2907313aa026d5c4f6dc",
      "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
