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

`ngx-mat-timepicker` supports both, Material 2 (M2) and Material 3 (M3) designs.

### M2 Design Theme

```scss
@use "@angular/material" as mat;
@use "@dhutaryan/ngx-mat-timepicker" as mat-timepicker;

$my-theme: mat.m2-define-light-theme(...);

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

### M3 Design Theme

```scss
@use "@angular/material" as mat;
@use "@dhutaryan/ngx-mat-timepicker" as mat-timepicker;

$my-theme: mat.define-theme(...);

:root {
  // timepicker uses these component
  @include mat.form-field-theme($my-theme);
  @include mat.input-theme($my-theme);
  @include mat.button-theme($my-theme);
  @include mat.fab-theme($my-theme);
  @include mat.icon-button-theme($my-theme);
  @include mat.divider-theme($my-theme);
  // timepicker theme
  @include mat-timepicker.timepicker-theme($my-theme);
}

```

### Multiple themes

If you have multiple themes, you can use `timepicker-color` mixin for other themes to avoid generating duplicate styles.

```scss
@use "@angular/material" as mat;
@use "@dhutaryan/ngx-mat-timepicker" as mat-timepicker;

$my-light-theme: mat.define-theme();
$my-dark-theme: mat.define-theme(
  (
    color: (
      theme-type: dark,
    ),
  )
);

:root {
  // other needed components' themes

  // timepicker theme
  @include mat-timepicker.timepicker-theme($my-light-theme);

  &.dark-theme {
    // other needed components' colors

    // timepicker color
    @include mat-timepicker.timepicker-color($theme);
  }
}
```
