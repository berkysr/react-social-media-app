import i18n from '@base/i18n';

export function changeLanguage(value: string): void {
  if (value) {
    document.querySelector('html')?.setAttribute('lang', value);
  }
  i18n.changeLanguage(value).catch((e: unknown) => console.log('Error changing language ', e));
}
