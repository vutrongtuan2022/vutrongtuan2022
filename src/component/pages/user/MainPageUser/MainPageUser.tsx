import React from "react";
import { PropsMainPageUser } from "./interface";
import styles from "./MainPageUser.module.scss";
import Search from "@/component/common/Search";
import FilterCustom from "@/component/common/FilterCustom";
function MainPageUser({}: PropsMainPageUser) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.main_search}>
          <div className={styles.search}>
            <Search
              keyName="_keyword"
              placeholder="Tìm kiếm theo tên dự án, ID"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageUser;
