import { useI18next } from "gatsby-plugin-react-i18next"
// import { defaultLanguage } from "../configs/language"

const useRouteChange = (pathname: string): string => {
  const { language } = useI18next()
  return `/${language}/${pathname}`
}

export default useRouteChange
