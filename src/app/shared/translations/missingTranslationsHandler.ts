import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams
} from '@ngx-translate/core';

export class CustomMissingHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return 'TBT: ' + params.key;
  }
}
