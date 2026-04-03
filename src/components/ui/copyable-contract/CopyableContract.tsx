"use client";

import { Copy } from "lucide-react";
import { useState } from "react";
import { Tooltip } from "#ui/tooltip";
import styles from "./CopyableContract.module.scss";

export interface CopyableContractProps {
  /** Chain or network label, e.g. "Abstract". */
  label: string;
  /** Full contract / program address. */
  address: string;
}

/**
 * Displays a chain label and contract address with a copy-to-clipboard button.
 * Shows a "Copied!" tooltip for 2 seconds after copying.
 *
 * @example
 * <CopyableContract label="Solana" address="3JgH..." />
 */
export function CopyableContract({ label, address }: CopyableContractProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Tooltip label="Copied!" visible={copied}>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${label} contract address`}
        className={styles["copyable-contract"]}
      >
        <span className={styles["copyable-contract__label"]}>{label}:</span>
        <span className={styles["copyable-contract__address"]}>{address}</span>
        <Copy size={14} aria-hidden={true} />
      </button>
    </Tooltip>
  );
}
