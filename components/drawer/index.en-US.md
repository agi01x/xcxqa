---
type: Feedback
category: Components
subtitle:
title: Drawer
---

Panel slides from screen edge.

## When To Use

A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since that user can interact with the Drawer without leaving the current page, tasks can be achieved more efficient within the same context.

* Use a Form to create or edit a set of information.
* Processing subtasks. When subtasks are too heavy for Popover and we still want to keep the subtasks in the context of the main task, Drawer comes very handy.
* When a same Form is needed in multiple places.

## API

| Props | Description | Type | Default |
| --- | --- | --- | --- |
| closable | Whether a close (x) button is visible on top right of the Drawer dialog or not. | boolean | true |
| destroyOnClose | Whether to unmount child components on closing drawer or not. | boolean | false |
| getContainer | Return the mounted node for Drawer. | HTMLElement \| `() => HTMLElement` \| selectors   | 'body' |
| mask | Whether to show mask or not. | Boolean | true |
| maskClosable | Clicking on the mask (area outside the Drawer) to close the Drawer or not. | boolean | true |
| maskStyle | Style for Drawer's mask element. | object | {} |
| style | Style of floating layer, typically used for adjusting its position. | object | - |
| title | The title for Drawer. | string\|ReactNode | - |
| visible | Whether the Drawer dialog is visible or not. | boolean | false |
| width | Width of the Drawer dialog. | string\|number | 256 |
| height | placement is `top` or `bottom`, height of the Drawer dialog. | string\|number | - |
| className | The class name of the container of the Drawer dialog. | string | - |
| zIndex | The `z-index` of the Drawer. | Number | 1000 |
| placement | The placement of the Drawer. | 'top'  \| 'right' \| 'bottom' \| 'left' | 'right' |
| onClose | Specify a callback that will be called when a user clicks mask, close button or Cancel button. | function(e) | - |

<style>
#_hj_feedback_container {
  display: none;
}
</style>
