import {useEffect, useState} from 'react';

import {PropsSearch} from './interfaces';
import {GrSearch} from 'react-icons/gr';
import clsx from 'clsx';
import styles from './Search.module.scss';
import {useRouter} from 'next/router';

function Search({data, onSetData, placeholder = 'Nhập từ khoá tìm kiếm', keyName = '_q'}: PropsSearch) {
	const router = useRouter();
	const [keyword, setKeyword] = useState<string>('');
	const [isFocus, setIsfocus] = useState<boolean>(false);

	const {[keyName]: keyQuery, ...rest} = router.query;

	useEffect(() => {
		if (!!keyQuery) setKeyword(keyQuery as string);
	}, [keyQuery]);

	useEffect(() => {
		const handler = setTimeout(() => {
			setType(keyName, keyword);
		}, 500);
		return () => clearTimeout(handler);
	}, [keyword]);

	const setType = (key: string, value: any) => {
		if (!!value) {
			router.replace(
				{
					pathname: router.pathname,
					query: {
						...router.query,
						[key]: value,
					},
				},
				undefined,
				{shallow: true, scroll: false}
			);
		} else {
			if (Object.keys(router.query).length > 0) {
				router.replace(
					{
						pathname: router.pathname,
						query: {
							...rest,
						},
					},
					undefined,
					{shallow: true, scroll: false}
				);
			}
		}
	};

	return (
		<div className={clsx(styles.container, {[styles.focus]: isFocus})}>
			<div className={styles.icon}>
				<GrSearch color='#005994' size={20} />
			</div>
			<input
				value={data || keyword}
				placeholder={placeholder}
				onFocus={() => setIsfocus(true)}
				onBlur={() => setIsfocus(false)}
				onChange={(e) => {
					if (onSetData) {
						return onSetData(e.target.value || '');
					} else {
						return setKeyword(e.target.value);
					}
				}}
			/>
		</div>
	);
}

export default Search;
