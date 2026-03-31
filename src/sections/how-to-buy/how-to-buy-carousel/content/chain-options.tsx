import Image from "next/image";
import { CHAINS } from "#config/chains";

export const CHAIN_OPTIONS = CHAINS.map((chain) => ({
  key: chain.id,
  label: chain.label,
  shortLabel: chain.shortLabel,
  icon: <Image src={chain.logo} alt="" width={20} height={20} />,
}));
