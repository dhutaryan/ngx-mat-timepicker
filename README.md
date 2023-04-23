**It's a beta version. Don't use it in production till major version release.**

# ngx-timepicker

[![npm](https://img.shields.io/npm/v/dgutoryan/ngx-timepicker.svg)](https://www.npmjs.com/package/ngx-timepicker)
[![code factor](https://img.shields.io/codefactor/grade/github/dgutoryan/ngx-timepicker)](https://www.codefactor.io/repository/github/dgutoryan/ngx-timepicker)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dgutoryan/ngx-timepicker/blob/master/LICENSE)

The timepicker module using Angular material.

## Installation

You have to install the Angular Material and set it up. [Learn more about the setup](https://material.angular.io/guide/getting-started).

Install the library:

```bash
$ npm install --save ngx-timepicker
```

or

```bash
$ yarn add ngx-timepicker
```

## Getting started

Import `MatTimepickerModule` to your project.

```typescript
import { MatTimepickerModule } from "ngx-timepicker";

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
import { MatNativeDateTimeModule, MatTimepickerModule } from "mat-timepicker";

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
import { MatTimepickerModule } from "mat-timepicker";

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
@use "ngx-timepicker" as mat-timepicker;

@include mat-timepicker.timepicker-theme($theme);
```

## License

MIT
