# {{ NgDocPage.title }}

You have to install the Angular Material and set it up. [Learn more about the setup](https://material.angular.io/guide/getting-started).

Install the ngx-mat-timepicker:

```bash
$ npm install --save @dhutaryan/ngx-mat-timepicker
```

or

```bash
$ yarn add @dhutaryan/ngx-mat-timepicker
```

## Import module

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
import { MatTimepickerModule, provideNativeDateTimeAdapter } from "@dhutaryan/ngx-mat-timepicker";

@NgModule({
  imports: [
    // ...
    MatTimepickerModule,
    // ...
  ],
  providers: [provideNativeDateTimeAdapter()]
})
export class MyModule {}
```

or create and add your own

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

Then you have to define a theme. [More details about theming](https://material.angular.io/guide/theming). As ngx-mat-timepicker uses some material components, it's necessary to add theme for them.

```scss
@use "@angular/material" as mat;
@use "@dhutaryan/ngx-mat-timepicker" as mat-timepicker;

$my-theme: mat.define-light-theme(...);

// timepicker uses these component
@include mat.form-field-theme($my-theme);
@include mat.input-theme($my-theme);
@include mat.button-theme($my-theme);
@include mat.fab-theme($my-theme);
@include mat.icon-button-theme($my-theme);
@include mat.divider-theme($my-theme);
// timepicker theme
@include mat-timepicker.timepicker-theme($my-theme);
```
