
export interface UserAuth{
    username:string,
    password:string
}

export interface AuthSuccess{
    "id": number,
    "username": string,
    "email": string,
    "firstName": string,
    "lastName": string,
    "gender": string,
    "image": string,
    "accessToken": string,
    "refreshToken": string 
  }

  export interface PostsSuccess{
    "posts": [],
      "total": number,
      "skip": number,
      "limit": number
    }
  