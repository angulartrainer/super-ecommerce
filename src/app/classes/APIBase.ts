import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class APIBase<T> implements OnInit {
  public data: T | null = null;
  public loading: boolean = false;
  public error: any = null;
  apiURL;

  constructor(apiURL: string, private http: HttpClient) {
    this.apiURL = apiURL;
  }

  ngOnInit(): void {
    this.loading = true;
    this.http.get(this.apiURL).subscribe({
      next: (data: any) => {
        this.data = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = error;
        this.loading = false;
      },
    });
  }
}
