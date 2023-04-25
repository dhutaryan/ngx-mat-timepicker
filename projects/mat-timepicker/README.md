**It's a beta version. Don't use it in production till major version release.**

# mat-timepicker

[![npm](https://img.shields.io/npm/v/dgutoryan/ngx-timepicker.svg)](https://www.npmjs.com/package/ngx-timepicker)
[![code factor](https://img.shields.io/codefactor/grade/github/dgutoryan/ngx-timepicker)](https://www.codefactor.io/repository/github/dgutoryan/ngx-timepicker)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dgutoryan/ngx-timepicker/blob/master/LICENSE)

The timepicker module using Angular material.

## Installation

You have to install the Angular Material and set it up. [Learn more about the setup](https://material.angular.io/guide/getting-started).

Install the library:

```bash
$ npm install --save @dhutaryan/mat-timepicker
```

or

```bash
$ yarn add @dhutaryan/mat-timepicker
```

## Getting started

Import `MatTimepickerModule` to your project.

```typescript
import { MatTimepickerModule } from "@dhutaryan/mat-timepicker";

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
import { MatNativeDateTimeModule, MatTimepickerModule } from "@dhutaryan/mat-timepicker";

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
import { MatTimepickerModule } from "@dhutaryan/mat-timepicker";

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
@use "@dhutaryan/mat-timepicker" as mat-timepicker;

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

## License

MIT
