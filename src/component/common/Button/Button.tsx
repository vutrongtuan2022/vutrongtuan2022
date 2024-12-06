import Link from "next/link";
import clsx from "clsx";
import styles from "./Button.module.scss";
import { useStyleClass } from "@/common/hooks/useStyleClass";

interface props {
  onClick?: (e?: any) => void;
  children?: React.ReactNode;
  href?: any;
  div?: boolean;
  icon?: React.ReactNode;
  [props: string]: any;
}

function Button({
  children,
  onClick,
  icon,
  href,
  className,
  target,
  div,
  ...props
}: props): JSX.Element {
  const styleClass = useStyleClass(props, styles);

  let onClickHandler: any = null;

  let Wapper: any = onClick ? "div" : "button";
  let Comp: any = "div";

  if (href) {
    Wapper = Link;
    Comp = "div";
  }

  const handleClick = (e: any) => {
    if (props.disable) {
      e.preventDefault();
    }

    if (!props.disable && onClick) {
      onClick(e);
    }
  };

  if (!href) {
    onClickHandler = {
      onClick: handleClick,
    };
  }

  return (
    <Wapper
      className={clsx(styles.container, {
        [styles.maxContent]: props.maxContent,
        [styles.maxHeight]: props.maxHeight,
      })}
      href={href as string}
      {...onClickHandler}
    >
      <Comp className={clsx(styleClass, styles.btn, className)}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <div className={styles.text}>{children}</div>
      </Comp>
    </Wapper>
  );
}

export default Button;
