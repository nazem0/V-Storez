// import { DOCUMENT } from '@angular/common';
// import { Inject, Injectable } from '@angular/core';
// import { MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateParser, TranslateService, TranslateStore } from '@ngx-translate/core';
// import { from } from 'rxjs';
// import { Language } from '../app/enums/languages.enum';


// @Injectable({
//   providedIn: 'root'
// })

// export class I18nService extends TranslateService {
//   private static readonly storageKey = '~lang~'
//   public static readonly matLngStorageKey = '~mat~lang~'
//   public static readonly matLng = 'en-US'
//   constructor(
//     translateStore: TranslateStore,
//     translateLoader: TranslateLoader,
//     translateCompiler: TranslateCompiler,
//     translateParser: TranslateParser,
//     missingTranslationHandler: MissingTranslationHandler,
//     @Inject(DOCUMENT) document: Document
//   ) {
//     super(translateStore, translateLoader, translateCompiler, translateParser, missingTranslationHandler, true, false, false, Language.en);
//     from(this.onLangChange).subscribe({
//       next: next => {
//         document.documentElement.lang = next.lang;
//         document.documentElement.dir = next.lang === Language.en ? 'ltr' : 'rtl';
//         let matLng = next.lang === Language.en ? 'en-US' : 'ar-EG'
//         localStorage.setItem(I18nService.matLngStorageKey, matLng)
//         localStorage.setItem(I18nService.storageKey, next.lang);
//       }
//     });
//     this.restoreLang();
//   }

//   langToggle() {
//     const currentLang = (this.currentLang || this.defaultLang) === Language.en ? Language.ar : Language.en;
//     this.use(currentLang);
//   }

//   private restoreLang() {
//     const lang = localStorage.getItem(I18nService.storageKey) || Language.en;
//     // this.getBrowserLang()
//     //    const lang = localStorage.getItem(this.storageKey) || Language.en;

//     if (lang) this.use(lang);
//   }


//   dir(): 'rtl' | 'ltr' {
//     return document.documentElement.dir as 'rtl' | 'ltr';
//   }
// }
