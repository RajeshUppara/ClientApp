import { MatSnackBar } from '@angular/material';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class ApexService {
    sessionUserEvent: EventEmitter<any> = new EventEmitter();
    menuEvent: EventEmitter<any> = new EventEmitter();
    loaderEvent: EventEmitter<any> = new EventEmitter();
    titleUpdateEvent: EventEmitter<any> = new EventEmitter();

    constructor(private _domSanitizer: DomSanitizer, private _snackBarService: MatSnackBar) {  }
    showMessage(message: string) {
        this._snackBarService.open(message, 'x', { duration: 3000 });
    }
    showLoader(show: Boolean) {
        this.loaderEvent.next(show);
    }

    updateTitle(title: string) {
        console.log(title);
        this.titleUpdateEvent.next(title);
    }

    sessionUserEmit(sessionUser: any) {
        //console.log(sessionStorage.getItem("user"));
        this.sessionUserEvent.emit(sessionUser);
    }
    menuEmit(menu: any) {
        this.menuEvent.next(menu);
    }
    bypassURL(url: string) {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
}