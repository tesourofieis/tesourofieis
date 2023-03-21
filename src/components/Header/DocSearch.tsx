import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react';
import { createPortal } from 'preact/compat';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

export default function Search() {
	const [isOpen, setIsOpen] = useState(false);
	const searchButtonRef = useRef(document.getElementById('docsearch-search-button'));
	const [initialQuery, setInitialQuery] = useState<string>();

	const onOpen = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	const onInput = useCallback(
		(e: KeyboardEvent) => {
			setIsOpen(true);
			setInitialQuery(e.key);
		},
		[setIsOpen, setInitialQuery]
	);

	useEffect(() => {
		searchButtonRef.current?.addEventListener('click', onOpen);
		return () => searchButtonRef.current?.removeEventListener('click', onOpen);
	}, [searchButtonRef.current, onOpen]);

	useDocSearchKeyboardEvents({
		isOpen,
		onOpen,
		onClose,
		onInput,
		searchButtonRef,
	});

	if (!isOpen) return null;

	return createPortal(
		<DocSearchModal
			initialQuery={initialQuery}
			initialScrollY={window.scrollY}
			onClose={onClose}
			indexName="astro"
			appId="7AFBU8EPJU"
			apiKey="4440670147c44d744fd8da35ff652518"
			transformItems={(items) => {
				return items.map((item) => {
					// We transform the absolute URL into a relative URL to
					// work better on localhost, preview URLS.
					const url = new URL(item.url);
					if (url.hash === '#overview') url.hash = '';
					return {
						...item,
						url: url.href.replace(url.origin, ''),
					};
				});
			}}
			placeholder={'Search docs'}
			resultsFooterComponent={() => (
				<div style={{ marginBlock: '2em' }}>
					<ul style={{ display: 'flex', gap: '1em', marginBlock: '0.5em', flexWrap: 'wrap' }}>
						<li>
							<a href="https://astro.build/chat">Join us on Discord</a>
						</li>
					</ul>
				</div>
			)}
		/>,
		document.body
	);
}
