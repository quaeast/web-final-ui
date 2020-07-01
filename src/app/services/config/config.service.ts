import { Injectable } from '@angular/core';


export class ConfigService {

  constructor() { }

  private _api: string;

  public static set(property, value) {
    this['_' + property] = value;
  }

  public static get(property) {
    return this['_' + property];
  }
}
