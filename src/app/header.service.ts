import { Injectable } from '@angular/core';
@Injectable()
export class HeaderService {
  public show = { 'profile': false, 'friendList': false, 'post': false };
  constructor() { }
  
}
