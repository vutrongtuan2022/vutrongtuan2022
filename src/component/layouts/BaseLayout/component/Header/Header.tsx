// import { ContextBaseLayout } from "../../BaseLayout";
// import { PropsHeader } from "./interfaces";

import { useRouter } from "next/router";
import { PropsHeader } from "./interfaces";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import clsx from "clsx";
import styles from "./Header.module.scss";
import ImageFill from "@/component/common/ImageFill";
import icons from "@/constants/images/icons";
import { useContext, useState } from "react";
import { TContextBaseLayout } from "../../interface";
import { ContextBaseLayout } from "../../BaseLayout";
import Image from "next/image";
import TippyHeadless from "@tippyjs/react/headless";

// import { TContextBaseLayout } from "../../interfaces";
// import ImageFill from "@/components/common/ImageFill";
// import icons from "@/constants/images/icons";
// import { useContext, useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import clsx from "clsx";
import MenuTab from "../MenuTab";
import BoxMenuProfile from "../BoxMenuProfile";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import BoxNoti from "../BoxNoti";
// import { useQuery } from "@tanstack/react-query";
// import { QUERY_KEY } from "@/constants/config/enum";
// import { httpRequest } from "@/services";
// import notifyServices from "@/services/notifyServices";

function Header({ title }: PropsHeader) {
  const router = useRouter();

  // const { infoUser } = useSelector((state: RootState) => state.user);
  const context = useContext<TContextBaseLayout>(ContextBaseLayout);

  const [open, setOpen] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [openNoti, setOpenNoti] = useState<boolean>(false);

  // useEffect(() => {
  //   if (open) {
  //     document.body.style.overflowY = "hidden";
  //   } else {
  //     document.body.style.overflowY = "overlay";
  //   }
  // }, [open]);

  // useEffect(() => {
  //   if (open) {
  //     setOpen(false);
  //   }
  // }, [router]);

  // const { data: countUnSeenNoti } = useQuery<{ count: number }>(
  //   [QUERY_KEY.count_unseen_noti],
  //   {
  //     queryFn: () =>
  //       httpRequest({
  //         http: notifyServices.countUnseenNotify({}),
  //       }),
  //     select(data) {
  //       return data;
  //     },
  //   }
  // );

  return (
    <div className={clsx(styles.container)}>
      <div className={styles.left}>
        <div className={styles.top}>
          <div
            className={styles.box_icon}
            onClick={() => context?.setShowFull!(!context?.showFull)}
          >
            <ImageFill
              src={icons.IconHum}
              alt="icon show hide"
              className={styles.icon}
            />
          </div>
          <div className={styles.box_icon_mobile} onClick={() => setOpen(true)}>
            <ImageFill
              src={icons.IconHum}
              alt="icon show hide"
              className={styles.icon}
            />
          </div>
          <h4 className={styles.title}>{title}</h4>
        </div>
        <div className={styles.main_action}></div>
      </div>
      <div className={styles.right}>
        {/* <TippyHeadless
          maxWidth={"100%"}
          interactive
          visible={openNoti}
          onClickOutside={() => setOpenNoti(false)}
          placement="bottom-end"
          render={(attrs: any) => (
            <BoxNoti
              countUnSeenNoti={countUnSeenNoti?.count || 0}
              onClose={() => setOpenNoti(false)}
            />
          )}
        >
          <div
            className={styles.box_noti}
            onClick={() => setOpenNoti(!openNoti)}
          >
            <Image src={icons.bell} alt="icon bell" width={24} height={24} />
            {countUnSeenNoti?.count! > 0 && (
              <div className={styles.box_count}>
                <div className={styles.count}></div>
              </div>
            )}
          </div>
        </TippyHeadless> */}

        <TippyHeadless
          maxWidth={"100%"}
          interactive
          visible={openProfile}
          onClickOutside={() => setOpenProfile(false)}
          placement="bottom-end"
          render={(attrs: any) => (
            <BoxMenuProfile onClose={() => setOpenProfile(false)} />
          )}
        >
          <div
            className={styles.box_infor}
            onClick={() => setOpenProfile(!openProfile)}
          >
            <p className={styles.name}>Agribank</p>
            <div className={styles.box_avatar}>
              <Image
                src={icons.IconHum}
                alt="avatar default"
                className={styles.avatar}
                layout="fill"
              />
            </div>
          </div>
        </TippyHeadless>
      </div>

      {/* Responsive mobile */}
      <div
        className={clsx(styles.overlay, { [styles.close]: !open })}
        onClick={() => setOpen(false)}
      ></div>
      <div className={clsx(styles.main_mobile, { [styles.active]: open })}>
        <MenuTab />
      </div>
    </div>
  );
}

export default Header;
