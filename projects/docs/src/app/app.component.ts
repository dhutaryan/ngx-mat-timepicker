import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgDocThemeService, NgDocTheme, NG_DOC_NIGHT_THEME } from '@ng-doc/app';

@Component({
  selector: 'docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private themeService = inject(NgDocThemeService);
  private document = inject(DOCUMENT);

  constructor() {
    this.handleTheme(this.themeService.currentTheme);
    this.themeService.themeChanges().subscribe(theme=>{
      this.handleTheme(theme);
    })
  }

  private handleTheme(theme: NgDocTheme | undefined) {
    if (theme?.id === NG_DOC_NIGHT_THEME.id) {
      this.document.documentElement.classList.add("dark-theme");
    } else {
      this.document.documentElement.classList.remove("dark-theme");
    }
  }

  toggleMaterialDesign() {
    this.document.documentElement.classList.toggle("m2");
  }
}
