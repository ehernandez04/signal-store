import { inject, Injectable } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductService } from './products.service';
import { map } from 'rxjs';

interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductsStateService {
  private productService: ProductService = inject(ProductService);

  private initialState: State = {
    products: [],
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.productService
        .getProducts()
        .pipe(map((products) => ({ products, status: 'success' as const }))),
    ],
  });
}
