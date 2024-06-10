

import { LoginResponseType, RedisResponseType } from '@/types/auth.types';
import httpInternalApi from '../common/http.internal.service';
import httpexternalApi from '../common/http.external.service';

class AuthAPI {

  getRedisValue = async (key: string): Promise<RedisResponseType> => httpexternalApi.httpGet(`/redis`, new URLSearchParams({key:key}), process.env.REDIS_API_TOKEN)

  login = async (username: string, password: string): Promise<LoginResponseType> => httpexternalApi.httpPost(`/auth/login`, {username: username, password: password})

  register = async (username: string, password: string, name: string, photoUrl: string): Promise<LoginResponseType> => httpexternalApi.httpPost(`/auth/register`, {username, password, name, photoUrl})

  logout = async (): Promise<LoginResponseType> => httpexternalApi.httpPost(`/auth/logout`, {})

  loginInternal = async (username: string, password: string): Promise<LoginResponseType> => httpInternalApi.httpPostPublic(`/auth/login`, {username: username, password: password})

  registerInternal = async (username: string, password: string, name: string, photoUrl: string): Promise<LoginResponseType> => httpInternalApi.httpPostPublic(`/auth/register`, {username, password, name, photoUrl})
  
}


const authAPI = new AuthAPI();
export default authAPI;