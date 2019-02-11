Control components are used to manage form inputs. There are several components for composing controls with the same look and feel.

## Control

A `Control` should be used to wrap individual form controls. The `orientation` prop has two possible values (`stacked` and `inline`) to control how to display the label in correlation to the control. This does not affect `Checkbox` and `RadioButton` controls individually because those labels should always appear next to their respective control. The `validationState` prop affects the coloring of elements within the `Control`. The possible values for `validationState` are `default`, `success`, `danger`, and `warning`.

The examples below use the `Control` component to demonstrate these various options.

## AdditionalHelp

An `AdditionalHelp` component can be used to provide more context for a control. It will inherit text color from its parent `Control` component.