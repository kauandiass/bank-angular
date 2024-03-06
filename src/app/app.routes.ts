import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
    {
        path: "",
        component: RegisterComponent
    },
    {
        path: "account/login",
        component: LoginComponent // Componente para a nova rota
    }
];