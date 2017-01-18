import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { PostComponent } from './post/index';
import { AboutComponent } from './about/index';
import { TeamComponent } from './team/index';
import { BlogComponent } from './blog/index';
import { ContactComponent } from './contact/index';
import { DashboardComponent } from './dashboard/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [

	/** Normal sections */
    { path: '', component: HomeComponent },
    { path: 'nosotros', component: TeamComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'acerca-de', component: AboutComponent },
    { path: 'contactenos', component: ContactComponent },

    /** Login and registration */
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },

    /** Login required sections */
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/posts', component: PostComponent, canActivate: [AuthGuard] },

    /** Otherwise redirect to home */
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);