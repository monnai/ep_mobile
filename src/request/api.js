/**
 * api接口统一管理
 */
import { get } from './http'

export const apiAddress = p => get(
  'http://localhost:3000/list')
