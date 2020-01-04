import defaultSettings from '@/config/settings'
import { routes } from '@/config/routes'
const { title, showSettings, fixedHeader, sidebarLogo } = defaultSettings
export default () => ({
  routes,
  title,
  showSettings,
  fixedHeader,
  sidebarLogo
})
