# {{ NgDocPage.title }}

## Basic

The timepicker allows users to enter a time either through text input, or by choosing a time from the dial or by inputs.

First, it will be checked if any time is selected, if so it will open pop-up with that time. Otherwise it will open pop-up with the current time.

{{ NgDocActions.demo("BasicComponent") }}

## Connecting a timepicker to an input

A timepicker is composed of a text input and a pop-up with `dial` or `inputs` view, connected via the `matTimepicker` property on the text input.

There is also an optional timepicker toggle button that gives the user an easy way to open the timepicker pop-up.

```
<input type="text" matInput [matTimepicker]="timepicker" />
<mat-timepicker-toggle matSuffix [for]="timepicker"></mat-timepicker-toggle>
<mat-timepicker #timepicker></mat-timepicker>
```

This works exactly the same with an input that is part of an `<mat-form-field>` and the toggle can easily be used as a prefix or suffix on the Material input:

```
<mat-form-field>
  <mat-label>Choose a time</mat-label>
  <input type="text" matInput [matTimepicker]="timepicker" />
  <mat-timepicker-toggle matSuffix [for]="timepicker"></mat-timepicker-toggle>
  <mat-timepicker #timepicker></mat-timepicker>
  <mat-hint>hh:mm</mat-hint>
</mat-form-field>
```

If you want to customize the icon that is rendered inside the mat-timepicker-toggle, you can do so by using the matTimepickerToggleIcon directive:

{{ NgDocActions.demo("CustomToggleIconComponent") }}

## Starting view

The `mode` property of `<mat-timepicker>` can be used to set the view that will show up when the pop-up first opens. It can be set to `dial` (default) and `input`.

{{ NgDocActions.demo("InputModeComponent") }}

The are two time formats `12h` and `24h`. The `format` property of `<mat-timepicker>` is used to set the format for the timepicker. `12h` is used by default.

{{ NgDocActions.demo("FormatComponent") }}

By default, the timepicker is opened as pop-up. Use `openAs` property with `dialog` value to open it as material dialog.

{{ NgDocActions.demo("DialogComponent") }}

There is an additional view for `dial` mode. You can use `orientation` property for `<mat-timepicker>` to set elements horizontally. It works for `dial` mode only.

{{ NgDocActions.demo("HorizontalComponent") }}

## Setting the selected time

The type of values that the timepicker expects depends on the type of TimeAdapter provided in your application. The `MatNativeDateTimeModule`, for example, works directly with plain JavaScript Date objects. This use of the adapter pattern allows the timepicker component to work with any arbitrary time representation with a custom `TimeAdapter`.

## Changing colors

The timepicker will automatically inherit the color palette (`primary`, `accent`, or `warn`) from the `mat-form-field` it is attached to. If you would like to specify a different palette for the timepicker you can do so by setting the color property on `mat-timepicker`.

{{ NgDocActions.demo("ColorPaletteComponent") }}

## Time validation

There are two properties to add time validation to the timepicker input - `min` and `max`. In addition to enforcing validation on the input, these properties will disable all hours and minutes on the timepicker before or after the respective values and prevent the user from choosing the time past the hours or minutes containing the min or max time.

{{ NgDocActions.demo("ValidationComponent") }}

There are different errors that can be checked:

- a value that violates the `min` property will have a `matTimepickerMin` error
- a value that violates the `max` property will have a `matTimepickerMax` error
- a value that can not be parsed will have a `matTimepickerParse` error

## Input and change events

The input's native `(input)` and `(change)` events will only trigger due to user interaction with the input element; they will not fire when the user selects a time from the timepicker popup. Therefore, the timepicker input also has support for `(timeInput)` and `(timeChange)` events. These trigger when the user interacts with either the input or the popup.

The `(timeInput)` event will fire whenever the value changes due to the user typing or selecting a time from the timepicker. The `(timeChange)` event will fire whenever the user finishes typing input (on `<input>` blur), or when the user chooses a time from the timepicker.

{{ NgDocActions.demo("EventsComponent") }}

## Disabling parts of the timepicker

As with any standard `<input>`, it is possible to disable the timepicker input by adding the disabled property. By default, the `<mat-timepicker>` and `<mat-timepicker-toggle>` will inherit their disabled state from the `<input>`, but this can be overridden by setting the disabled property on the timepicker or toggle elements. This can be useful if you want to disable text input but allow selection via the timepicker or vice-versa.

{{ NgDocActions.demo("DisablingComponent") }}

## Confirmation action buttons

By default, the timepicker uses "OK" and "Cancel" buttons. If you want to change default buttons, you can `<mat-timepicker-actions>` element inside `<mat-timepicker>` with with own buttons marked with the `matTimepickerCancel` and `matTimepickerApply` attributes respectively. Doing so will replace default buttons by yours.

{{ NgDocActions.demo("ActionButtonsComponent") }}

## Touch UI mode

The timepicker normally opens as a popup under the input. However this is not ideal for touch devices that don't have as much screen real estate and need bigger click targets. For this reason `<mat-timepicker>` has a touchUi property that can be set to true in order to enable a more touch friendly UI where the timepicker opens in a dialog and has a larger elements. Applied for dial mode only.

{{ NgDocActions.demo("TouchUiComponent") }}

## Manually open and close the timepicker

The timepicker popup can be programmatically controlled using the `open` and `close` methods on the `<mat-timepicker>`. It also has an opened property that reflects the status of the popup.

{{ NgDocActions.demo("ManuallyToggleComponent") }}

## Using inline style

If you want to allow the user to select a time from the timepicker that is inlined on the page rather than contained in a popup, you can use `<mat-clock-dials>` or `<mat-time-inputs>` directly.

{{ NgDocActions.demo("InlineComponent") }}

## Internationalization

By default, the `MAT_TIME_LOCALE` injection token will use the existing `LOCALE_ID` locale code from `@angular/core`. If you want to override it, you can provide a new value for the `MAT_TIME_LOCALE` token:

```
@NgModule({
  providers: [
    {provide: MAT_TIME_LOCALE, useValue: 'en-GB'},
  ],
})
export class MyApp {}
```

It's also possible to set the locale at runtime using the `setLocale` method of the `TimeAdapter`.

### Localizing labels and messages

The various text strings used by the timepicker are provided through MatTimepickerIntl. Localization of these messages can be done by providing a subclass with translated values in your application root module.

```
@NgModule({
  imports: [MatTimepickerModule, MatNativeDateTimeModule],
  providers: [
    {provide: MatTimepickerIntl, useClass: MyIntl},
  ],
})
export class MyApp {}
```
