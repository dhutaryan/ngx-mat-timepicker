# {{ NgDocPage.title }}

`ngx-mat-timepicker` supports both material 2 and material 3. Tokens API allows you to customize styles by easy way.

## Material 3

```scss
@use "@angular/material" as mat;
@use "@dhutaryan/ngx-mat-timepicker" as mat-timepicker;

$my-theme: mat.define-theme(...);

// timepicker uses these component
@include mat.form-field-theme($my-theme);
@include mat.input-theme($my-theme);
@include mat.button-theme($my-theme);
@include mat.fab-theme($my-theme);
@include mat.icon-button-theme($my-theme);
@include mat.divider-theme($my-theme);
// timepicker theme
@include mat-timepicker.timepicker-theme($my-theme);
// if you want to support color attribute in M3 add compatibility mixin
@include mat.color-variants-backwards-compatibility($my-theme)
```

Will be updated...

## Material 2

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

Will be updated...
