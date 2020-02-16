export class Userdata {
    constructor(
      public id: void,
      public applicationType: string,
      public applicationDescription: string,
      public pagesCount: number,
      public pagesNames: [ 
        {pageName:string}
      ],
      public component: [ 
        {
          id: void,
          name: string,
          src: string,
          fee: number,
          needed: boolean
        }
      ],
      public name: string,
      public email: string,
      public message: string,
      public finished: boolean
    ) {}
  }
  