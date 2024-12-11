import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { NgDocThemeService } from '@ng-doc/app/services/theme';

@Component({
  selector: 'docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly _themeService: NgDocThemeService,
  ) {}

  ngOnInit() {
    this._themeService.set('auto');
  }

  toggleMaterialDesign() {
    this.document.documentElement.classList.toggle('m2');
  }

  hasM2Class(): boolean {
    return this.document.documentElement.classList.contains('m2');
  }
}
