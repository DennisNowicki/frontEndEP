import {Components} from "../components/components.model";

export class Userdata {
    constructor(
      public id: void,
      public applicationType: string,
      public applicationDescription: string,
      public pagesCount: number,
      public pagesNames: [
        {pageName:string},
        {pageName:string},
        {pageName:string}
      ],
      public components,
      public name: string,
      public email: string,
      public message: string,
      public finished: boolean
    ) {}
  }
  