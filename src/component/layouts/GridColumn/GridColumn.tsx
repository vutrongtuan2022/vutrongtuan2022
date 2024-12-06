import React from "react";
import styles from "./GridColumn.module.scss";
import { clsx } from "clsx";
import { useStyleClass } from "@/common/hooks/useStyleClass";
function GridColumn({ children, ...props }: any) {
  const styleClass = useStyleClass(props, styles);
  return <div className={clsx(styles.container, styleClass)}>{children}</div>;
}

export default GridColumn;
