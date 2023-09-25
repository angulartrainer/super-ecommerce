import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductResolverService } from './services/product-resolver.service';
import { ProductReviewComponent } from './shared/product-review/product-review.component';
import { ProductDescriptionComponent } from './shared/product-description/product-description.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,
    resolve: {
      product: ProductResolverService,
    },
    children: [
      {
        path: 'review',
        component: ProductReviewComponent,
      },
      {
        path: 'description',
        component: ProductDescriptionComponent,
      },
    ],
  },
  {
    path: 'admin/create-product',
    loadComponent: () =>
      import('./pages/admin/create-product/create-product.component').then(
        (x) => x.CreateProductComponent
      ),
  },
  {
    path: 'product/:id',
    redirectTo: 'product-detail/:id',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
