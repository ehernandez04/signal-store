import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  httpClient: HttpClient = inject(HttpClient);
  apiUrl = environment.API_URL;
}