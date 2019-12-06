import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: '', component: ContentComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'login', component: LoginComponent    },
  { path: 'product', component: ProductComponent    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
