import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsLight';
import styled from 'styled-components';

const StyledPre = styled.pre`
	padding: var(--size-24);
	background-color: var(--gray-100) !important;
	border-radius: var(--size-6);
	border: 1px solid var(--gray-200);
	margin: var(--size-24) var(--size-0);
	white-space: normal !important;
	word-break: break-word !important;
`;

export default function Code(props) {
	const { children } = props;

	const className = children.props.className || '';
	const matches = className.match(/language-(?<lang>.*)/);

	return (
		<Highlight
			{...defaultProps}
			code={children.props.children.trim()}
			language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
			theme={theme}
		>
			{({ style, tokens, getLineProps, getTokenProps }) => (
				<StyledPre style={{ ...style }}>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</StyledPre>
			)}
		</Highlight>
	);
}
