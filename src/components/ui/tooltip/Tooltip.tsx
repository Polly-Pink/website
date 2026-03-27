"use client";

import { Transition } from "@headlessui/react";
import type { ReactNode } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  /** Text shown in the tooltip bubble. */
  label: string;
  /** Whether the tooltip is visible. */
  visible: boolean;
  children: ReactNode;
}

/**
 * Wraps children with a transient tooltip bubble above them.
 * Control visibility externally via `visible`.
 *
 * @example
 * <Tooltip label="Copied!" visible={copied}>
 *   <Button>Copy</Button>
 * </Tooltip>
 */
export function Tooltip({ label, visible, children }: TooltipProps) {
  return (
    <div className={styles.tooltip}>
      {children}
      <Transition show={visible}>
        <span className={styles["tooltip__label"]}>{label}</span>
      </Transition>
    </div>
  );
}
