
import {  type NextRequest } from 'next/server';
import { AccesDeniedError } from '../../../../services/common/http.errors';
import authService from '@/services/auth/auth.service';
import LoginScheme from '@/schemes/login.scheme';
import { cookies } from "next/headers";



export async function POST(request: NextRequest) {
  const { username, password } = await LoginScheme.validate(await request.json());
  
  try {
    const loginResponse = await authService.authenticate(username, password);
    
    cookies().set("SocialSessionID", loginResponse.sessionId, {
      expires: loginResponse.expireAt,
      httpOnly: true,
      secure: true,
      domain: "localhost",
      path:"/"
    })

    cookies().set("SocialUsername", loginResponse.user.username, {
      expires: loginResponse.expireAt,
      httpOnly: false,
      secure: true,
      domain: "localhost",
      path:"/"
    })

    return new Response(JSON.stringify(loginResponse.user), {
      status: 200,
    });

  } catch (e) {
    if (e instanceof AccesDeniedError) {
      return new Response(JSON.stringify({
        error: 'Invalid credential for user:' + username,
      }), {
        status: 403,
      });
    } else {
      return new Response(JSON.stringify({
        error: "Internal server error",
      }), {
        status: 500,
      });
    }
  }
}
