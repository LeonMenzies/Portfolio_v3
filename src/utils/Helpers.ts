import sjcl from "sjcl";

export const sha256 = (key: string) => {
  const myBitArray = sjcl.hash.sha256.hash(key);
  return sjcl.codec.hex.fromBits(myBitArray);
};
