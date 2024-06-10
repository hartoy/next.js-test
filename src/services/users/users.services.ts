import { TrendingUserType, UserType } from '@/types/user.types'
import { MessageType } from '@/types/message.types'
import { PageType } from '@/types/pagination.types'
import httpInternalApi from '../common/http.internal.service'


class userAPI {
  getUserData = async (username: string): Promise<UserType> => httpInternalApi.httpGetPublic(`/users/${username}`)
  getMeInternal = async (accessToken: string): Promise<UserType> => httpInternalApi.httpGet(`/me`, undefined, accessToken)
  getUserMessages = async (username: string): Promise<PageType<MessageType>> => httpInternalApi.httpGetPublic(`/users/${username}/messages`)
  getUserMessagesReplies = async (username: string): Promise<PageType<MessageType>> =>
    httpInternalApi.httpGetPublic(`/users/${username}/messages/replies`)
  getUserFollowers = async (username: string): Promise<TrendingUserType> => httpInternalApi.httpGetPublic(`/users/${username}/followers`)
  getUserFollowing = async (username: string): Promise<TrendingUserType> => httpInternalApi.httpGetPublic(`/users/${username}/following`)
}


const userApi = new userAPI();
export default userApi;