import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  static readonly dummyData = {
    firstName: "Mohamed",
    lastName: "Nazem",
    phoneNumber: "01100233249",
    email: "mohamednazem09@gmail.com",
    password: "Asd@12345",
  }
  static readonly regEx = {
    egPhoneNumberRegex: /^01[0125][0-9]{8}$/gm,
    //passwordRegex: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, //Not Used
  }
  static readonly generators = {
    guid(): string {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },

    img(text:string|null=null){
      return `https://placehold.co/350?text=${text}`
    },

    avatar(name:string, bgColor:string|null=null, color:string|null=null){
      return `https://ui-avatars.com/api/?name=${name}&background=${bgColor??'3f51b5'}&color=${color??'fff'}`
    }

  }
}
