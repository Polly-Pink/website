"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import type { ReactNode } from "react";
import { fontDisplay } from "#lib/fonts";
import styles from "./TabbedCard.module.scss";

export interface TabbedCardTab {
  /** Unique key used for React reconciliation. */
  key: string;
  /** Label text shown in the tab button. */
  label: string;
  /** Shortened label shown on xs screens (e.g. `"ABS"`). Falls back to `label` if omitted. */
  shortLabel?: string;
  /** Optional icon rendered before the label. */
  icon?: ReactNode;
  /** Content rendered in the panel when this tab is active. */
  content: ReactNode;
}

export interface TabbedCardProps {
  /** Tab definitions. */
  tabs: TabbedCardTab[];
  /**
   * Extra class merged onto every panel element.
   * Use this to add padding and layout without overriding the card chrome.
   */
  panelClassName?: string;
  /** Extra class merged onto the root element. */
  className?: string;
  /** Controlled selected tab index. Omit for uncontrolled behaviour. */
  selectedIndex?: number;
  /** Called with the newly selected index whenever the tab changes. */
  onTabChange?: (index: number) => void;
}

/**
 * Card with a compact tab selector on top and a content panel below.
 * The tab list shrinks to fit its buttons; the panel fills the card width.
 *
 * Pass content per tab via the `tabs` prop. Use `panelClassName` to add
 * padding or layout styles to the panel without affecting the card chrome.
 *
 * @example
 * <TabbedCard
 *   tabs={[
 *     { key: "sol", label: "Solana", icon: <img … />, content: <Buttons /> },
 *     { key: "abs", label: "Abstract", icon: <img … />, content: <Buttons /> },
 *   ]}
 *   panelClassName={styles.panel}
 * />
 */
export function TabbedCard({
  tabs,
  panelClassName,
  className,
  selectedIndex,
  onTabChange,
}: TabbedCardProps) {
  return (
    <TabGroup
      className={clsx(styles["tabbed-card"], className)}
      selectedIndex={selectedIndex}
      onChange={onTabChange}
    >
      <TabList className={styles["tabbed-card__tab-list"]}>
        {tabs.map((tab) => (
          <Tab key={tab.key} className={styles["tabbed-card__tab"]}>
            {tab.icon && (
              <span
                className={styles["tabbed-card__tab-icon"]}
                style={{ pointerEvents: "none" }}
              >
                {tab.icon}
              </span>
            )}
            {tab.shortLabel && (
              <span
                className={clsx(
                  styles["tabbed-card__tab-label"],
                  styles["tabbed-card__tab-label--xs"],
                  fontDisplay.className,
                )}
                style={{ pointerEvents: "none" }}
              >
                {tab.shortLabel}
              </span>
            )}
            <span
              className={clsx(
                styles["tabbed-card__tab-label"],
                tab.shortLabel && styles["tabbed-card__tab-label--full"],
                fontDisplay.className,
              )}
              style={{ pointerEvents: "none" }}
            >
              {tab.label}
            </span>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel
            key={tab.key}
            className={clsx(styles["tabbed-card__panel"], panelClassName)}
          >
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
