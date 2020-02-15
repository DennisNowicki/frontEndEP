export class Userdata {
    constructor(
      public id: void,
      public applicationType: string,
      public applicationDescription: string,
      public pagesCount: number,
      public pagesNames: {
        pageName:string
      },
      public adminPanel: boolean,
      public calendar: boolean,
      public shoppingCart: boolean,
      public chatbox: boolean,
      public database: boolean,
      public geolocation: boolean,
      public multiLanguage: boolean,
      public loginSystem: boolean,
      public mediaSupport: boolean,
      public notification: boolean,
      public paymentService: boolean,
      public statistics: boolean,
      public techSupport: boolean,
      public fileUpload: boolean,
      public userExperience: boolean,
      public name: string,
      public email: string,
      public message: string,
      public finished: boolean
    ) {}
  }
  