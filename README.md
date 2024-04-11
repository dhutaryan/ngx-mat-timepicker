# ngx-mat-timepicker

[![npm](https://img.shields.io/npm/v/@dhutaryan/ngx-mat-timepicker.svg)](https://www.npmjs.com/package/@dhutaryan/ngx-mat-timepicker)
[![code factor](https://img.shields.io/codefactor/grade/github/dhutaryan/ngx-mat-timepicker)](https://www.codefactor.io/repository/github/dhutaryan/ngx-mat-timepicker)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dgutoryan/ngx-timepicker/blob/master/LICENSE)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40dhutaryan%2Fngx-mat-timepicker)

The timepicker module using Angular material.

### Versions

| mat-timepicker | Angular             |
| -------------- | ------------------- |
| 12.x.x         | >=12.0.0 && <15.0.0 |
| 13.x.x         | >=13.0.0 && <15.0.0 |
| 14.x.x         | ^14.0.0             |
| 15.x.x         | ^15.0.0             |
| 16.x.x         | ^16.0.0             |
| 17.x.x         | ^17.0.0             |

## Documentation

Check out the [documentation](https://dhutaryan.github.io/ngx-mat-timepicker/).

## Installation

You have to install the Angular Material and set it up. [Learn more about the setup](https://material.angular.io/guide/getting-started).

Install the library:

```bash
$ npm install --save @dhutaryan/ngx-mat-timepicker
```

or

```bash
$ yarn add @dhutaryan/ngx-mat-timepicker
```

## Getting started

Import `MatTimepickerModule` to your project.

```typescript
import { MatTimepickerModule } from "@dhutaryan/ngx-mat-timepicker";

@NgModule({
  imports: [
    // ...
    MatTimepickerModule,
    // ...
  ],
})
export class MyModule {}
```

## Adapter

Add a timepicker adapter.

```typescript
import { MatNativeDateTimeModule, MatTimepickerModule } from "@dhutaryan/ngx-mat-timepicker";

@NgModule({
  imports: [
    // ...
    MatTimepickerModule,
    MatNativeDateTimeModule,
    // ...
  ],
})
export class MyModule {}
```

or create your own

```typescript
import { MatTimepickerModule } from "@dhutaryan/ngx-mat-timepicker";

@NgModule({
  imports: [
    // ...
    MatTimepickerModule,
    // ...
  ],
  providers: [{ provide: TimeAdapter, useClass: MyTimeAdapter }],
})
export class MyModule {}
```

## Theming

Then you have to define a theme. [More details about theming](https://material.angular.io/guide/theming).

```scss
@use "@dhutaryan/ngx-mat-timepicker" as mat-timepicker;

// timepicker uses these component
@include mat.form-field-theme(theme.$ngx-mat-timepicker-theme);
@include mat.input-theme(theme.$ngx-mat-timepicker-theme);
@include mat.button-theme(theme.$ngx-mat-timepicker-theme);
@include mat.fab-theme(theme.$ngx-mat-timepicker-theme);
@include mat.icon-button-theme(theme.$ngx-mat-timepicker-theme);
@include mat.divider-theme(theme.$ngx-mat-timepicker-theme);

// timepicker theme
@include mat-timepicker.timepicker-theme($theme);
```

## Usage

```html
<mat-form-field>
  <input type="text" matInput [matTimepicker]="timepicker" />
  <mat-timepicker-toggle matSuffix [for]="timepicker"></mat-timepicker-toggle>
  <mat-timepicker #timepicker></mat-timepicker>
</mat-form-field>
```

## Locale

Default locale is `en-US`. You can set your locale as:

```typescript
import { LOCALE_ID, NgModule } from '@angular/core';

@NgModule({
  imports: [
    // ...
  ],
  providers: [{ provide: LOCALE_ID, useValue: "en-GB" }],
})
export class MyModule {}
```

## License

MIT
