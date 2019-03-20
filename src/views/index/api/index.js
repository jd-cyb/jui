/**
 * 集中管理请求接口
 */
import fetch from './request'

// 登录
export const login = params => fetch('/api/login', params, 'POST')
// 基本表格
export const basictable = params => fetch('/api/basic-table', params, 'GET')
// 高级表格
export const searchtable = params => fetch('/api/search-table', params, 'GET')
