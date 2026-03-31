import { create } from "zustand";
import { CHAINS, type ChainId } from "#config/chains";

export interface ChainStore {
  /** ID of the currently selected chain. */
  chainId: ChainId;
  /** Update the selected chain. */
  setChainId: (id: ChainId) => void;
}

export const useChainStore = create<ChainStore>((set) => ({
  chainId: CHAINS[0].id,
  setChainId: (id) => set({ chainId: id }),
}));
