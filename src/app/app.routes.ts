import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MemberGuard } from './guards/auth/auth.guard';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        canActivate: [MemberGuard]
    },
    {
        path: "account/register",
        component: RegisterComponent,
    },
    {
        path: "account/login",
        component: LoginComponent // Componente para a nova rota
    }
];