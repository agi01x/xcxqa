---
category: Components
type: Data Entry
cols: 1
title: Form
---

Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.

## Form

You can align the controls of a `form` using the `layout` prop：

- `horizontal`：to horizontally align the `label`s and controls of the fields. (Default)
- `vertical`：to vertically align the `label`s and controls of the fields.
- `inline`：to render form fields in one line.

## Form fields

A form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more.
A form field is defined using `<Form.Item />`.

```jsx
<Form.Item {...props}>
  {children}
</Form.Item>
```

## API

### Form

**more example [rc-form](http://react-component.github.io/form/)**。

| Property | Description | Type | Default Value |
| -------- | ----------- | ---- | ------------- |
| form | Decorated by `Form.create()` will be automatically set `this.props.form` property | object | n/a |
| hideRequiredMark | Hide required mark of all form items | Boolean | false |
| layout | Define form layout | 'horizontal'\|'vertical'\|'inline' | 'horizontal' |
| onSubmit | Defines a function will be called if form data validation is successful. | Function(e:Event) |  |

### Form.create(options)

How to use：

```jsx
class CustomizedForm extends React.Component {}

CustomizedForm = Form.create({})(CustomizedForm);
```

The following `options` are available:

| Property | Description | Type |
| -------- | ----------- | ---- |
| mapPropsToFields | Convert props to field value(e.g. reading the values from Redux store). And you must mark returned fields with [`Form.createFormField`](#Form.createFormField) | (props) => ({ \[fieldName\]: FormField { value } }) |
| validateMessages | Default validate message. And its format is similar with [newMessages](https://github.com/yiminghe/async-validator/blob/master/src/messages.js)'s returned value | Object { [nested.path]&#x3A; String } |
| onFieldsChange | Specify a function that will be called when the value a `Form.Item` gets changed. Usage example: saving the field's value to Redux store. | Function(props, fields) |
| onValuesChange | A handler while value of any field is changed | (props, changedValues, allValues) => void |

If you want to get `ref` after `Form.create`, you can use `wrappedComponentRef` provided by `rc-form`，[details can be viewed here](https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140).

```jsx
class CustomizedForm extends React.Component { ... }

// use wrappedComponentRef
const EnhancedForm =  Form.create()(CustomizedForm);
<EnhancedForm wrappedComponentRef={(form) => this.form = form} />
this.form // => The instance of CustomizedForm
```

If the form has been decorated by `Form.create` then it has `this.props.form` property. `this.props.form` provides some APIs as follows:

> Note: Before using `getFieldsValue` `getFieldValue` `setFieldsValue` and so on, please make sure that corresponding field had been registered with `getFieldDecorator`.

| Method | Description | Type |
| ------ | ----------- | ---- |
| getFieldDecorator | Two-way binding for form, please read below for details. |  |
| getFieldError | Get the error of a field. | Function(name) |
| getFieldsError | Get the specified fields' error. If you don't specify a parameter, you will get all fields' error. | Function(\[names: string\[]]) |
| getFieldsValue | Get the specified fields' values. If you don't specify a parameter, you will get all fields' values. | Function(\[fieldNames: string\[]]) |
| getFieldValue | Get the value of a field. | Function(fieldName: string) |
| isFieldsTouched | Check whether any of fields is touched by `getFieldDecorator`'s `options.trigger` event | (names?: string\[]) => boolean |
| isFieldTouched | Check whether a field is touched by `getFieldDecorator`'s `options.trigger` event | (name: string) => boolean |
| isFieldValidating | Check if the specified field is being validated. | Function(name) |
| resetFields | Reset the specified fields' value(to `initialValue`) and status. If you don't specify a parameter, all the fields will be reset. | Function(\[names: string\[]]) |
| setFields | Set the value and error of a field. [Code Sample](https://github.com/react-component/form/blob/3b9959b57ab30b41d8890ff30c79a7e7c383cad3/examples/server-validate.js#L74-L79) | Function({ [fieldName]&#x3A; { value: any, errors: [Error] } }) |
| setFields | Set value and error state of fields | ({<br />&nbsp;&nbsp;\[fieldName\]: {value: any, errors: \[Error\] }<br />}) => void |
| setFieldsValue | Set the value of a field. (Note: please don't use it in `componentWillReceiveProps`, otherwise, it will cause an endless loop, [reason](https://github.com/ant-design/ant-design/issues/2985)) | ({ \[fieldName\]&#x3A; value }) => void |
| validateFields | Validate the specified fields and get theirs values and errors. If you don't specify the parameter of fieldNames, you will validate all fields. | (<br />&nbsp;&nbsp;\[fieldNames: string\[]],<br />&nbsp;&nbsp;\[options: object\],<br />&nbsp;&nbsp;callback(errors, values)<br />) => void |
| validateFieldsAndScroll | This function is similar to `validateFields`, but after validation, if the target field is not in visible area of form, form will be automatically scrolled to the target field area. | same as `validateFields` |

### validateFields/validateFieldsAndScroll

```jsx
const { form: { validateFields } } = this.props;
validateFields((errors, values) => {
  // ...
});
validateFields(['field1', 'field2'], (errors, values) => {
  // ...
});
validateFields(['field1', 'field2'], options, (errors, values) => {
  // ...
});
```

| Method | Description | Type | Default |
| ------ | ----------- | ---- | ------- |
| options.first | If `true`, every field will stop validation at first failed rule | boolean | false |
| options.firstFields | Those fields will stop validation at first failed rule | String\[] | \[] |
| options.force | Should validate validated field again when `validateTrigger` is been triggered again | boolean | false |
| options.scroll | Config scroll behavior of `validateFieldsAndScroll`, more: [dom-scroll-into-view's config](https://github.com/yiminghe/dom-scroll-into-view#function-parameter) | Object | {} |

#### Callback arguments example of validateFields

- `errors`:

   ```js
   {
     "userName": {
       "errors": [
         {
           "message": "Please input your username!",
           "field": "userName"
         }
       ]
     },
     "password": {
       "errors": [
         {
           "message": "Please input your Password!",
           "field": "password"
         }
       ]
     }
   }
   ```

- `values`:

   ```js
   {
     "userName": "username",
     "password": "password",
   }
   ```

### Form.createFormField

To mark the returned fields data in `mapPropsToFields`, [demo](#components-form-demo-global-state).

### this.props.form.getFieldDecorator(id, options)

After wrapped by `getFieldDecorator`, `value`(or other property defined by `valuePropName`) `onChange`(or other property defined by `trigger`) props will be added to form controls，the flow of form data will be handled by Form which will cause:

1. You shouldn't use `onChange` to collect data, but you still can listen to `onChange`(and so on) events.
2. You cannot set value of form control via `value` `defaultValue` prop, and you should set default value with `initialValue` in `getFieldDecorator` instead.
3. You shouldn't call `setState` manually, please use `this.props.form.setFieldsValue` to change value programmatically.

#### Special attention

1. `getFieldDecorator` can not be used to decorate stateless component.
2. If you use `react@<15.3.0`, then, you can't use `getFieldDecorator` in stateless component: <https://github.com/facebook/react/pull/6534>

#### getFieldDecorator(id, options) parameters

| Property | Description | Type | Default Value |
| -------- | ----------- | ---- | ------------- |
| id | The unique identifier is required. support [nested fields format](https://github.com/react-component/form/pull/48). | string |  |
| options.getValueFromEvent | Specify how to get value from event or other onChange arguments | function(..args) | [reference](https://github.com/react-component/form#option-object) |
| options.getValueProps | Get the component props according to field value. | function(value): any | [reference](https://github.com/react-component/form#option-object)
| options.initialValue | You can specify initial value, type, optional value of children node. (Note: Because `Form` will test equality with `===` internally, we recommend to use variable as `initialValue`, instead of literal) |  | n/a |
| options.normalize | Normalize value to form component, [a select-all example](https://codepen.io/afc163/pen/JJVXzG?editors=001) | function(value, prevValue, allValues): any | - |
| options.rules | Includes validation rules. Please refer to "Validation Rules" part for details. | object\[] | n/a |
| options.trigger | When to collect the value of children node | string | 'onChange' |
| options.validateFirst | Whether stop validate on first rule of error for this field. | boolean | false |
| options.validateTrigger | When to validate the value of children node. | string\|string\[] | 'onChange' |
| options.valuePropName | Props of children node, for example, the prop of Switch is 'checked'. | string | 'value' |

More option at [rc-form option](https://github.com/react-component/form#option-object)。

### Form.Item

Note: if Form.Item has multiple children that had been decorated by `getFieldDecorator`, `help` and `required` and `validateStatus` can't be generated automatically.

| Property | Description | Type | Default Value |
| -------- | ----------- | ---- | ------------- |
| colon | Used with `label`, whether to display `:` after label text. | boolean | true |
| extra | The extra prompt message. It is similar to help. Usage example: to display error message and prompt message at the same time. | string\|ReactNode |  |
| hasFeedback | Used with `validateStatus`, this option specifies the validation status icon. Recommended to be used only with `Input`. | boolean | false |
| help | The prompt message. If not provided, the prompt message will be generated by the validation rule. | string\|ReactNode |  |
| label | Label text | string\|ReactNode |  |
| labelCol | The layout of label. You can set `span` `offset` to something like `{span: 3, offset: 12}` or `sm: {span: 3, offset: 12}` same as with `<Col>` | [object](https://ant.design/components/grid/#Col) |  |
| required | Whether provided or not, it will be generated by the validation rule. | boolean | false |
| validateStatus | The validation status. If not provided, it will be generated by validation rule. options: 'success' 'warning' 'error' 'validating' | string |  |
| wrapperCol | The layout for input controls, same as `labelCol` | [object](https://ant.design/components/grid/#Col) |  |

### Validation Rules

| Property | Description | Type | Default Value |
| -------- | ----------- | ---- | ------------- |
| enum | validate a value from a list of possible values | string | - |
| len | validate an exact length of a field | number | - |
| max | validate a max length of a field | number | - |
| message | validation error message | string\|ReactNode | - |
| min | validate a min length of a field | number | - |
| pattern | validate from a regular expression | RegExp | - |
| required | indicates whether field is required | boolean | `false` |
| transform | transform a value before validation | function(value) => transformedValue:any | - |
| type | built-in validation type, [available options](https://github.com/yiminghe/async-validator#type) | string | 'string' |
| validator | custom validate function (Note: [callback must be called](https://github.com/ant-design/ant-design/issues/5155)) | function(rule, value, callback) | - |
| whitespace | treat required fields that only contain whitespace as errors | boolean | `false` |

See more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).

## Using in TypeScript

```jsx
import { Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

interface UserFormProps extends FormComponentProps {
  age: number;
  name: string;
}

class UserForm extends React.Component<UserFormProps, any> {
  // ...
}
```

<style>
.code-box-demo .ant-form:not(.ant-form-inline):not(.ant-form-vertical) {
  max-width: 600px;
}
.markdown.api-container table td:last-child {
  white-space: nowrap;
  word-wrap: break-word;
}
</style>
