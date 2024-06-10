import { UserType } from "./user.types";

export type LoginResponseType = {
    accessToken: string;
    user: UserType;
}

export type AuthResponseType = {
    sessionId: string;
    user: UserType;
    expireAt: number;
}

export type RedisResponseType = {
    value: string;
}