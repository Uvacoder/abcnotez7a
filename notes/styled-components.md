---
title: Styled Components
tags:
  - react
emoji: 💅
---

## Dependencies

```bash
npm install --save styled-components babel-plugin-styled-components

yarn add styled-components babel-plugin-styled-components
```

### Gatsby

```shell
npm install gatsby-plugin-styled-components
```

```js
// gatsby-config.js

module.exports = {
    plugins: [`gatsby-plugin-styled-components`],
}
```

## Basic Component

```js
import styled from 'styled-components'

interface ComponentProps {}

export const Component = styled.div<ComponentProps>``
```

### Tip

[👆 Reference](https://twitter.com/NikkitaFTW/status/1262423045874089990) | You can get the props at the top of the component so you don't have to do it in every property that needs them, avoiding all the copy pasting.

```js
import styled, { css } from 'styled-components'

// 👎 instead ofgetting the props in every line:
const Post = styled.article`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.bodyText};
`

// 👍 get them once at the root to make your code cleaner
const Post = styled.article`
  ${({ theme }) =>
    css`
      font-size: ${theme.fontSizes.md};
      color: ${theme.colors.bodyText};
    `}
`
```

#### Even better version

```js
import styled, { css } from 'styled-components'

const Post = styled.article({ theme }) => css`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.bodyText};
`)
```
