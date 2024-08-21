import { Routes } from '@angular/router';
import { ForLoopPageComponent } from './examples/pages/for-loop-page/for-loop-page.component';
import { IfPageComponent } from './examples/pages/if-page/if-page.component';
import { FormPageComponent } from './examples/pages/form-page/form-page.component';

export const routes: Routes = [
    { path: "examples/if", component: IfPageComponent },
    { path: 'examples/for-loop', component: ForLoopPageComponent },
    { path: 'examples/form', component: FormPageComponent },
];
