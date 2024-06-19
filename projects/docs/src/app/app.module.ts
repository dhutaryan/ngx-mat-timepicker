import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgDocButtonIconComponent, NgDocIconComponent } from '@ng-doc/ui-kit';
import {
  NgDocRootComponent,
  NgDocNavbarComponent,
  NgDocSidebarComponent,
  provideNgDocApp,
  provideSearchEngine,
  NgDocDefaultSearchEngine,
  providePageSkeleton,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  provideMainPageProcessor,
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  NgDocThemeToggleComponent,
} from '@ng-doc/app';

import { NG_DOC_ROUTING, provideNgDocContext } from '@ng-doc/generated';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [...NG_DOC_ROUTING, { path: '**', redirectTo: 'what-is' }],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 70],
        useHash: true,
      }
    ),
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
    NgDocButtonIconComponent,
    NgDocIconComponent,
    NgDocThemeToggleComponent,
  ],
  providers: [
    provideNgDocContext(),
    provideNgDocApp({
      uiKit: {
        assetsPath: 'assets/ng-doc/ui-kit',
        customIconsPath: 'assets/icons',
      },
    }),
    provideSearchEngine(NgDocDefaultSearchEngine),
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
