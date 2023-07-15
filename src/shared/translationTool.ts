import i18n from '../i18n';

export function changeLanguage(value: string): void {
  if (value) {
    document.querySelector('html')?.setAttribute('lang', value);
  }
  i18n.changeLanguage(value).catch((e: any) => console.log('Error changing language ', e));
}
