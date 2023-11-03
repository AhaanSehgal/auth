export enum SocialLoginTypes {
    Google = "google",
    Instagram = "instagram",
    X = "X",
    Discord = "Discord",
  }
  
  export interface SocialLogin {
    id: string;
    iconUrl: string;
    type: SocialLoginTypes;
  }
  
  export function useSocialLoginConnectors() {
    const google: SocialLogin = {
      iconUrl:
        "/icons/google.svg",
      id: "1",
      type: SocialLoginTypes.Google,
    };
    const instagram: SocialLogin = {
      iconUrl:
        "/icons/instagram.svg",
      id: "2",
      type: SocialLoginTypes.Instagram,
    };
    const twitter: SocialLogin = {
      iconUrl:
        "/icons/x.svg",
      id: "3",
      type: SocialLoginTypes.X,
    };
    const discord: SocialLogin = {
      iconUrl:
        "/icons/discord.svg",
      id: "4",
      type: SocialLoginTypes.Discord,
    };
    return [google, twitter, discord, instagram];
  }
  