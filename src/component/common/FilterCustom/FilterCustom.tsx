import { BiCheck } from "react-icons/bi";
import { PropsFilterCustom } from "./interfaces";
import TippyHeadless from "@tippyjs/react/headless";
import clsx from "clsx";
import styles from "./FilterCustom.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { removeVietnameseTones } from "@/common/funcs/optionConvert";
import { GrSearch } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

function FilterCustom({
  listFilter,
  name,
  query = "_query",
  isSearch,
  disabled = false,
  data,
  onSetData,
}: PropsFilterCustom) {
  const router = useRouter();
  const { [query]: queryStr, ...rest } = router.query;

  const [open, setOpen] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  function getNameMethod(
    arr: { id: number | string; name: string }[],
    id: number | string
  ) {
    const item = arr?.find((v) => v.id == id) || null;
    return item?.name || "Tất cả";
  }

  return (
    <TippyHeadless
      maxWidth={"100%"}
      interactive
      visible={open}
      onClickOutside={() => setOpen(false)}
      placement="bottom-start"
      render={(attrs: any) => (
        <div className={styles.mainOption}>
          {isSearch ? (
            <div className={clsx(styles.main_search)}>
              <div className={styles.icon}>
                <GrSearch color="#005994" size={20} />
              </div>
              <input
                placeholder="Tìm kiếm..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          ) : null}
          <div className={styles.overflow}>
            <div
              className={clsx(styles.option, {
                [styles.option_active]: data == null && !queryStr,
              })}
              onClick={() => {
                setOpen(false);
                if (onSetData) {
                  return onSetData(null);
                } else {
                  return router.replace(
                    {
                      query: {
                        ...rest,
                      },
                    },
                    undefined,
                    {
                      scroll: false,
                    }
                  );
                }
              }}
            >
              <p>{"Tất cả"}</p>
              {data == null && !queryStr ? (
                <div className={styles.icon_check}>
                  <BiCheck fontSize={18} fontWeight={600} />
                </div>
              ) : null}
            </div>
            {listFilter
              ?.filter((v) =>
                removeVietnameseTones(v.name)?.includes(
                  keyword ? removeVietnameseTones(keyword) : ""
                )
              )
              ?.map((v, i) => (
                <div
                  key={i}
                  className={clsx(styles.option, {
                    [styles.option_active]:
                      data == v.id || (queryStr as string) == v.id,
                  })}
                  onClick={() => {
                    setOpen(false);
                    if (onSetData) {
                      return onSetData(v?.id);
                    } else {
                      return router.replace(
                        {
                          ...router,
                          query: {
                            ...router.query,
                            [query]: v.id,
                          },
                        },
                        undefined,
                        { scroll: false }
                      );
                    }
                  }}
                >
                  <p>{v.name}</p>
                  {data == v.id || (queryStr as string) == v.id ? (
                    <div className={styles.icon_check}>
                      <BiCheck fontSize={20} fontWeight={600} />
                    </div>
                  ) : null}
                </div>
              ))}
          </div>
        </div>
      )}
    >
      <div
        className={clsx(styles.dealer, {
          [styles.active]: open,
          [styles.disabled]: disabled,
        })}
        onClick={() => {
          if (disabled) {
            setOpen(false);
            return;
          } else {
            setOpen(!open);
          }
        }}
      >
        <div className={styles.value}>
          <p className={styles.name}>{name && `${name}:`}</p>
          <p className={styles.text}>
            {getNameMethod(
              listFilter,
              data != null ? data : (queryStr as string)
            )}
          </p>
        </div>
        <div className={styles.icon_arrow}>
          <IoIosArrowDown size={16} />
        </div>
      </div>
    </TippyHeadless>
  );
}

export default FilterCustom;
