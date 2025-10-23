import { Routes } from '@angular/router';
import path from 'node:path';
import { PushTest } from './push-test/push-test';
import { App } from './app';
import { Home } from './home/home';

export const routes: Routes = [
  {path:'', component: App},
  {path:'pushTest', component: PushTest},
  {path:'home',component:Home}
];
