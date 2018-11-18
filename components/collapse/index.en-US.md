---
category: Components
type: Data Display
title: Collapse
cols: 1
---

A content area which can be collapsed and expanded.

## When To Use

- Can be used to group or hide complex regions to keep the page clean.
- `Accordion` is a special kind of `Collapse`, which allows only one panel to be expanded at a time.

## API

### Collapse

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| accordion | If `true`, `Collapse` renders as `Accordion` | boolean | `false` |
| activeKey | Key of the active panel | string\[]\|string | No default value. In `accordion` mode, it's the key of the first panel. |
| bordered | Toggles rendering of the border around the collapse block | boolean | `true` |
| defaultActiveKey | Key of the initial active panel | string | - |
| onChange | Callback function executed when active panel is changed | Function | - |
| destroyInactivePanel | Destroy Inactive Panel | boolean | `false` |

### Collapse.Panel

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| disabled | If `true`, panel cannot be opened or closed | boolean | `false` |
| forceRender | Forced render of content on panel, instead of lazy rending after clicking on header | boolean | `false` |
| header | Title of the panel | string\|ReactNode | - |
| key | Unique key identifying the panel from among its siblings | string | - |
| showArrow | If `false`, panel will not show arrow icon | boolean | `true` |
