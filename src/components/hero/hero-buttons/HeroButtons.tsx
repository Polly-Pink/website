"use client";

import Image from "next/image";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { CHAINS } from "#config/chains";
import { Button, TabbedCard, Tooltip } from "#ui";
import styles from "./HeroButtons.module.scss";

/**
 * Chain selector card for the hero section.
 * Pulls chains, contract addresses, and DEX links from the central chain config.
 *
 * Each tab shows the chain's logo + name. The panel offers a one-click
 * contract address copy plus Trade and Chart CTA links.
 *
 * @example
 * <HeroButtons />
 */
export function HeroButtons() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  return (
    <TabbedCard
      panelClassName={styles["buttons__panel"]}
      tabs={CHAINS.map((chain) => ({
        key: chain.id,
        label: chain.label,
        shortLabel: chain.shortLabel,
        icon: (
          <Image
            src={chain.logo}
            alt=""
            width={24}
            height={24}
            className={styles["buttons__logo"]}
          />
        ),
        content: (
          <>
            <Tooltip label="Copied!" visible={copiedId === chain.id}>
              <CopyToClipboard
                text={chain.address}
                onCopy={(_, success) => {
                  if (!success) return;
                  setCopiedId(chain.id);
                  setTimeout(
                    () =>
                      setCopiedId((prev) => (prev === chain.id ? null : prev)),
                    2000,
                  );
                }}
              >
                <Button variant="action" theme="secondary">
                  <span className={styles["buttons__contract-label"]}>
                    Contract
                  </span>
                  <span className={styles["buttons__contract-label--xs"]}>
                    CA
                  </span>
                </Button>
              </CopyToClipboard>
            </Tooltip>

            <Button variant="link" theme="primary" href={chain.tradeUrl}>
              Trade
            </Button>

            <Button variant="link" theme="primary" href={chain.chartUrl}>
              Chart
            </Button>
          </>
        ),
      }))}
    />
  );
}
