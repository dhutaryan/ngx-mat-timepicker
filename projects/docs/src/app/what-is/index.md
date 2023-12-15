# {{ NgDocPage.title }}

ngx-mat-timepicker is a library which allow you to use timepicker for your Angular project. It's based on `@angular/material` and uses features from it.

## Motivation

While working on some projects I needed to add a field with time choosing. As I used `@angular/material` it should be compatible with that by functionality and design. Unfortunately, a lot of libraries were out of date, had not the best UI or thier functionality didn't suit my project, had some bugs. I could choose from literally 2 libraries and none of them satisfied me completelly.

I won't talk about exact libraries, some of them you might know. In my understanding, `ngx-mat-timepicker` should use `@angular/material` ecosystem, features and themization, suits [material design](https://m3.material.io/) as much as possible. It should give the impression that it's part of `@angular/material` but not a separate library. So, good UX and DX were the goal.

Hence, the desire to create a library that would correspond all these criterias above, with intuitive integration with the project and good customization.

## How does it work?

ngx-mat-timepicker contains module with all necessary components and another module with time adapter (uses native JS date under the hood). Adapter is used to unify the work with time. You can create your own adapter with any library to handle time.

You have to import both modules, add theme style and use it by the same way as you use `mat-datepicker`. That's it!
