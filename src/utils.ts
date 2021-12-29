import { en } from '../locales/en';
import { cn } from '../locales/cn';

export  const translateMaker = (router) =>{
  if(router){
    const { locale } = router;
    const translatedText = locale === 'en' ? en : cn;
    return translatedText
  }
}

export const changeLanguage = (e, router) => {
  if(router){
    const locale = e.target.value;
    router.push(router.pathname, router.pathname, { locale });
  }
};