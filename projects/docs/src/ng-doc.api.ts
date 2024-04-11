import { NgDocApi } from '@ng-doc/core';

const Api: NgDocApi = {
  title: 'API',
  scopes: [
    {
      name: 'ngx-mat-timepicker',
      route: 'api',
      include: 'projects/mat-timepicker/src/lib/**/*.ts',
      exclude: [
        'projects/mat-timepicker/src/lib/**/*.spec.ts',
        'projects/mat-timepicker/src/lib/clock-size.ts',
      ],
    },
  ],
};

export default Api;
