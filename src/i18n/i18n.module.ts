import { NgModule } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@NgModule({
    imports: [
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            isolate: true,
        })
    ],
    providers: [{
        provide: TranslateService,
        useClass: TranslateService
    }]
})
export class I18nModule {
    constructor(protected translateService: TranslateService) {
        (async () => {
            const en = await import(`./translations/en.json`);
            const ar = await import(`./translations/ar.json`);
            translateService.setTranslation('en', en);
            translateService.setTranslation('ar', ar);
            translateService.setDefaultLang(environment.defaultLanguage);
        })()
    }
}