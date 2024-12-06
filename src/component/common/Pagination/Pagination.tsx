import React, {Fragment, useEffect, useMemo, useState} from 'react';

import {PropsPagination} from './interfaces';
import styles from './Pagination.module.scss';
import clsx from 'clsx';
import TippyHeadless from '@tippyjs/react/headless';
import {useRouter} from 'next/router';
import {IoArrowBackOutline, IoArrowForwardOutline} from 'react-icons/io5';
import {MdArrowDropDown} from 'react-icons/md';

function Pagination({total, pageSize, currentPage, onSetPage, onSetpageSize, dependencies = []}: PropsPagination) {
	const router = useRouter();

	const pageSizes: number[] = [10, 20, 50, 100];

	const [openLimit, setOpenLimit] = useState<boolean>(false);
	const [firstLoad, setFirstLoad] = useState<boolean>(true);

	// Render list page
	const items = useMemo(() => {
		const items: React.ReactNode[] = [];
		const max = Math.ceil(total / Number(pageSize));

		for (let i = 1; i <= max; i++) {
			if (i === currentPage - 1 || i === currentPage + 1 || i === currentPage || i === 1 || i === max) {
				items.push(
					<li
						key={i}
						className={clsx([styles.item, {[styles.active]: currentPage === i}])}
						onClick={() => {
							if (!!onSetPage) {
								onSetPage(i);
							} else {
								router.replace(
									{
										...router,
										query: {
											...router.query,
											_page: i,
										},
									},
									undefined,
									{scroll: false}
								);
							}
						}}
					>
						{i}
					</li>
				);
			}

			if ((i === currentPage - 2 && currentPage >= 4) || (i === currentPage + 2 && i < max)) {
				items.push(
					<li key={i} className={clsx([styles.item, {[styles.active]: currentPage === i}])}>
						...
					</li>
				);
			}
		}
		return items;
	}, [total, pageSize, currentPage, onSetPage]);

	// Set pageSize
	const handleSetPageSize = (limit: number) => {
		setOpenLimit(false);

		if (!!onSetpageSize) {
			onSetpageSize(limit);
		} else {
			router.replace(
				{
					...router,
					query: {
						...router.query,
						_pageSize: limit,
					},
				},
				undefined,
				{scroll: false}
			);
		}
	};

	const handlePrev = () => {
		if (currentPage > 1) {
			if (!!onSetPage) {
				onSetPage((prev: any) => prev - 1);
			} else {
				router.replace(
					{
						...router,
						query: {
							...router.query,
							_page: currentPage - 1,
						},
					},
					undefined,
					{scroll: false}
				);
			}
		}
	};

	const handleNext = () => {
		if (currentPage < Math.ceil(total / Number(pageSize))) {
			if (!!onSetPage) {
				onSetPage((prev: any) => prev + 1);
			} else {
				router.replace(
					{
						...router,
						query: {
							...router.query,
							_page: currentPage + 1,
						},
					},
					undefined,
					{scroll: false}
				);
			}
		}
	};

	useEffect(() => {
		const handleStop = () => {
			setFirstLoad(false);
		};
		router.events.on('routeChangeStart', handleStop);

		return () => {
			router.events.off('routeChangeStart', handleStop);
		};
	}, []);

	useEffect(() => {
		// if (!!onSetpageSize) {
		// 	onSetpageSize(() => 20);
		// } else {
		// 	if (!firstLoad) {
		// 		if (Object.keys(router.query).length > 0) {
		// 			router.replace(
		// 				{
		// 					...router,
		// 					query: {
		// 						...router.query,
		// 						_pageSize: 20,
		// 					},
		// 				},
		// 				undefined,
		// 				{scroll: false}
		// 			);
		// 		}
		// 	}
		// }

		if (!!onSetPage) {
			onSetPage(() => 1);
		} else {
			if (!firstLoad) {
				if (Object.keys(router.query).length > 0) {
					router.replace(
						{
							...router,
							query: {
								...router.query,
								_page: 1,
							},
						},
						undefined,
						{scroll: false}
					);
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies);

	return (
		<Fragment>
			{total > 0 && (
				<div className={styles.container}>
					<div className={styles.left}>
						<p className={styles.text}>Hiển thị </p>
						<TippyHeadless
							maxWidth={'100%'}
							interactive
							visible={openLimit}
							onClickOutside={() => setOpenLimit(false)}
							placement='bottom-end'
							render={(attrs: any) => (
								<div className={styles.list_limit}>
									{pageSizes.map((v, i) => (
										<div
											key={i}
											className={clsx(styles.item_limit, {
												[styles.activeItemLimit]: pageSize == v,
											})}
											onClick={() => handleSetPageSize(v)}
										>
											{v}
										</div>
									))}
								</div>
							)}
						>
							<div
								className={clsx(styles.limit, {
									[styles.activeLimit]: openLimit,
								})}
								onClick={() => setOpenLimit(!openLimit)}
							>
								<span>{pageSize}</span>
								<div className={styles.icon_arrow}>
									<MdArrowDropDown size={20} />
								</div>
							</div>
						</TippyHeadless>
						<p className={styles.text}>
							trong tổng <span style={{fontWeight: '600'}}>{total}</span> kết quả
						</p>
					</div>
					<div className={styles.pages}>
						{currentPage > 1 && (
							<button className={clsx([styles.btn, styles.left])} onClick={handlePrev}>
								<span className={styles.icon}>
									<IoArrowBackOutline />
								</span>
							</button>
						)}
						{items}
						{currentPage < Math.ceil(total / Number(pageSize)) && (
							<button className={clsx([styles.btn, styles.right])} onClick={handleNext}>
								<span className={styles.icon}>
									<IoArrowForwardOutline />
								</span>
							</button>
						)}
					</div>
				</div>
			)}
		</Fragment>
	);
}

export default Pagination;
