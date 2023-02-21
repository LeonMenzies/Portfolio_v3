import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessAtom = atom({
  key: "access",
  default: {
    accessAllowed: false,
    accessTokens: [
      "cbfad02f9ed2a8d1e08d8f74f5303e9eb93637d47f82ab6f1c15871cf8dd0481",
      "8f5173a89b0e27756f5dd114091c5c9afdda4d9d0f46130865c9108ad08f0c79",
      "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
      "a1ad8efda9efe271ba3478d6374dfb3d0f152617b03e26f97f63487a7bef7f8c",
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
