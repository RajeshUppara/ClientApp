import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from "../utils/storage";
import { ApexService } from "./apex.service";


@Injectable()
export class AppInterceptor implements HttpInterceptor {
  CONTENT_TYPE: string = "application/x-www-form-urlencoded";
  // CONTENT_TYPE : string = "application/json";
  constructor(private apexService: ApexService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        "Content-Type": this.CONTENT_TYPE,
        Authorization: `${this.getToken()}`
      }
    });
    return next.handle(request);
  }

  public getToken(): string {
    return Storage.getJWT();
  }
  errorMessage(err: any) {
    console.log(err);
    let message = err.message ? err.message : err;
    this.apexService.showMessage(message);
  }
}
