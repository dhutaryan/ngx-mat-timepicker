import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NG_DOC_NIGHT_THEME, NgDocTheme, NgDocThemeService } from '@ng-doc/app';

@Component({
  selector: 'docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly themeService: NgDocThemeService,
    private readonly _destroyRef: DestroyRef,
    private readonly _renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.handleTheme(this.themeService.currentTheme);
    this.themeService
      .themeChanges()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((theme) => {
        this.handleTheme(theme);
      });
  }

  toggleMaterialDesign() {
    this.document.documentElement.classList.toggle('m2');
  }

  hasM2Class(): boolean {
    return this.document.documentElement.classList.contains('m2');
  }

  private handleTheme(theme: NgDocTheme | undefined) {
    if (theme?.id === NG_DOC_NIGHT_THEME.id) {
      this._renderer.addClass(this.document.documentElement, 'dark-theme');
    } else {
      this._renderer.removeClass(this.document.documentElement, 'dark-theme');
    }
  }
}
