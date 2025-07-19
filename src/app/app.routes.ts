import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { CategoryList } from './category-list/category-list';

export const routes: Routes = [
  { 
    path:'products', 
    component: ProductList, 
  },
  {
    path: 'categories',
    component: CategoryList,
  },
  {
    path: 'products/:id',
    component: ProductDetail,
  },
];
