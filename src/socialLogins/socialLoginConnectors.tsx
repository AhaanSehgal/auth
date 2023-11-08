export enum SocialLoginTypes {
  Google = "google",
  Instagram = "instagram",
  X = "X",
  Discord = "Discord",
}

export interface SocialLogin {
  id: string;
  iconUrl: any;
  type: SocialLoginTypes;
}

function googleIcon() {
  return (
    <div className='h-10 w-10 bg-white rounded-full flex center justify-center items-center'>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5595 12.25C22.5595 11.47 22.4895 10.72 22.3595 10H11.9995V14.255H17.9195C17.6645 15.63 16.8895 16.795 15.7245 17.575V20.335H19.2795C21.3595 18.42 22.5595 15.6 22.5595 12.25Z" fill="#4285F4" />
        <path d="M11.9984 22.9998C14.9684 22.9998 17.4584 22.0148 19.2784 20.3348L15.7234 17.5748C14.7384 18.2348 13.4784 18.6248 11.9984 18.6248C9.13345 18.6248 6.70845 16.6898 5.84345 14.0898H2.16846V16.9398C3.97845 20.5348 7.69845 22.9998 11.9984 22.9998Z" fill="#34A853" />
        <path d="M5.84475 14.0901C5.62475 13.4301 5.49975 12.7251 5.49975 12.0001C5.49975 11.2751 5.62475 10.5701 5.84475 9.91006V7.06006H2.16976C1.39976 8.59292 0.999077 10.2847 0.999757 12.0001C0.999757 13.7751 1.42476 15.4551 2.16976 16.94L5.84475 14.0901Z" fill="#FBBC05" />
        <path d="M11.9984 5.375C13.6134 5.375 15.0634 5.92999 16.2034 7.01999L19.3584 3.865C17.4534 2.09 14.9634 1 11.9984 1C7.69845 1 3.97845 3.465 2.16846 7.05999L5.84345 9.90999C6.70845 7.30999 9.13345 5.375 11.9984 5.375Z" fill="#EA4335" />
      </svg>
    </div>
  )
}

function instaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z" fill="url(#paint0_radial_1628_57)" />
      <path d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z" fill="url(#paint1_radial_1628_57)" />
      <path d="M12.0008 2.625C9.45478 2.625 9.13519 2.63616 8.13525 2.68163C7.13719 2.72738 6.45591 2.88534 5.85984 3.11719C5.24316 3.35662 4.72013 3.67697 4.19906 4.19822C3.67753 4.71937 3.35719 5.24241 3.117 5.85881C2.8845 6.45506 2.72634 7.13662 2.68144 8.13422C2.63672 9.13425 2.625 9.45394 2.625 12.0001C2.625 14.5463 2.63625 14.8648 2.68163 15.8647C2.72756 16.8628 2.88553 17.5441 3.11719 18.1402C3.35681 18.7568 3.67716 19.2799 4.19841 19.8009C4.71938 20.3225 5.24241 20.6436 5.85863 20.883C6.45516 21.1148 7.13653 21.2728 8.13441 21.3186C9.13444 21.364 9.45375 21.3752 11.9997 21.3752C14.5461 21.3752 14.8646 21.364 15.8646 21.3186C16.8626 21.2728 17.5447 21.1148 18.1412 20.883C18.7576 20.6436 19.2799 20.3225 19.8007 19.8009C20.3223 19.2799 20.6425 18.7568 20.8828 18.1404C21.1132 17.5441 21.2715 16.8626 21.3184 15.8649C21.3633 14.865 21.375 14.5463 21.375 12.0001C21.375 9.45394 21.3633 9.13444 21.3184 8.13441C21.2715 7.13634 21.1132 6.45516 20.8828 5.85909C20.6425 5.24241 20.3223 4.71937 19.8007 4.19822C19.2793 3.67678 18.7578 3.35644 18.1406 3.11728C17.543 2.88534 16.8613 2.72728 15.8632 2.68163C14.8632 2.63616 14.5448 2.625 11.9979 2.625H12.0008ZM11.1598 4.31447C11.4095 4.31409 11.688 4.31447 12.0008 4.31447C14.5041 4.31447 14.8007 4.32347 15.7892 4.36838C16.7032 4.41019 17.1994 4.56291 17.5298 4.69125C17.9674 4.86113 18.2793 5.06428 18.6072 5.3925C18.9353 5.72063 19.1384 6.03309 19.3088 6.47062C19.4371 6.80062 19.59 7.29675 19.6316 8.21081C19.6765 9.19913 19.6863 9.49594 19.6863 11.9979C19.6863 14.4999 19.6765 14.7968 19.6316 15.7851C19.5898 16.6991 19.4371 17.1952 19.3088 17.5253C19.1389 17.9629 18.9353 18.2744 18.6072 18.6023C18.2791 18.9305 17.9676 19.1335 17.5298 19.3035C17.1998 19.4324 16.7032 19.5848 15.7892 19.6266C14.8009 19.6715 14.5041 19.6812 12.0008 19.6812C9.49753 19.6812 9.20081 19.6715 8.21259 19.6266C7.29853 19.5844 6.80241 19.4317 6.47166 19.3033C6.03422 19.1333 5.72166 18.9303 5.39353 18.6022C5.06541 18.274 4.86234 17.9623 4.692 17.5246C4.56366 17.1945 4.41075 16.6984 4.36913 15.7843C4.32422 14.796 4.31522 14.4992 4.31522 11.9956C4.31522 9.49209 4.32422 9.19678 4.36913 8.20847C4.41094 7.29441 4.56366 6.79828 4.692 6.46781C4.86197 6.03028 5.06541 5.71781 5.39363 5.38969C5.72175 5.06156 6.03422 4.85841 6.47175 4.68816C6.80222 4.55925 7.29853 4.40691 8.21259 4.36491C9.07744 4.32581 9.41259 4.31409 11.1598 4.31212V4.31447ZM17.0052 5.87109C16.3841 5.87109 15.8802 6.37453 15.8802 6.99572C15.8802 7.61681 16.3841 8.12072 17.0052 8.12072C17.6263 8.12072 18.1302 7.61681 18.1302 6.99572C18.1302 6.37463 17.6263 5.87072 17.0052 5.87072V5.87109ZM12.0008 7.18556C9.34209 7.18556 7.18641 9.34125 7.18641 12.0001C7.18641 14.6589 9.34209 16.8136 12.0008 16.8136C14.6597 16.8136 16.8146 14.6589 16.8146 12.0001C16.8146 9.34134 14.6595 7.18556 12.0007 7.18556H12.0008ZM12.0008 8.87503C13.7267 8.87503 15.1259 10.2741 15.1259 12.0001C15.1259 13.7259 13.7267 15.1252 12.0008 15.1252C10.2749 15.1252 8.87588 13.7259 8.87588 12.0001C8.87588 10.2741 10.2749 8.87503 12.0008 8.87503Z" fill="white" />
      <defs>
        <radialGradient id="paint0_radial_1628_57" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.375 25.8485) rotate(-90) scale(23.7858 22.1227)">
          <stop stop-color="#FFDD55" />
          <stop offset="0.1" stop-color="#FFDD55" />
          <stop offset="0.5" stop-color="#FF543E" />
          <stop offset="1" stop-color="#C837AB" />
        </radialGradient>
        <radialGradient id="paint1_radial_1628_57" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-4.02009 1.72884) rotate(78.681) scale(10.6324 43.827)">
          <stop stop-color="#3771C8" />
          <stop offset="0.128" stop-color="#3771C8" />
          <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>

  )
}

function xIcon() {
  return (
    <div className='h-10 w-10 bg-white rounded-full flex center justify-center items-center pl-1 pt-1'>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_935_452)">
          <path d="M15.7425 0.963867H18.7947L12.128 8.63456L19.9995 19.0362H13.8148L8.99549 12.7309L3.45332 19.0362H0.401118L7.5497 10.8434L-0.000488281 0.963867H6.34489L10.7224 6.74701L15.7425 0.963867ZM14.6581 17.1888H16.3449L5.42119 2.69078H3.5738L14.6581 17.1888Z" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_935_452">
            <rect width="24" height="20.0723" fill="white" transform="translate(0 0.963867)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

function discordIcon() {
  return (
    <div className='h-10 w-10 bg-white rounded-full flex center justify-center items-center'>
      <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_935_456)">
          <mask id="mask0_935_456" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="20">
            <path d="M23.667 0.962402H0.33374V19.0375H23.667V0.962402Z" fill="white" />
          </mask>
          <g mask="url(#mask0_935_456)">
            <path d="M20.0864 2.57195C18.5992 1.88956 17.0044 1.38681 15.337 1.09886C15.3066 1.09331 15.2763 1.10719 15.2606 1.13497C15.0555 1.49976 14.8283 1.97566 14.6692 2.34972C12.8758 2.08122 11.0915 2.08122 9.33488 2.34972C9.17575 1.96735 8.94031 1.49976 8.73429 1.13497C8.71865 1.10812 8.68831 1.09423 8.65795 1.09886C6.99142 1.38589 5.39664 1.88864 3.90853 2.57195C3.89565 2.5775 3.88461 2.58677 3.87728 2.5988C0.852315 7.11803 0.02365 11.5262 0.430165 15.8797C0.432005 15.901 0.443961 15.9214 0.460516 15.9343C2.4563 17.4 4.38956 18.2898 6.28692 18.8795C6.31729 18.8888 6.34946 18.8777 6.36879 18.8527C6.81761 18.2398 7.21769 17.5935 7.56072 16.9139C7.58097 16.8741 7.56164 16.8269 7.52027 16.8111C6.88567 16.5704 6.2814 16.2769 5.70014 15.9436C5.65416 15.9167 5.65048 15.851 5.69278 15.8195C5.8151 15.7278 5.93745 15.6325 6.05425 15.5362C6.07538 15.5186 6.10482 15.5149 6.12967 15.526C9.94831 17.2694 14.0824 17.2694 17.856 15.526C17.8809 15.514 17.9103 15.5177 17.9324 15.5352C18.0492 15.6315 18.1715 15.7278 18.2948 15.8195C18.3371 15.851 18.3343 15.9167 18.2883 15.9436C17.7071 16.2834 17.1028 16.5704 16.4673 16.8102C16.4259 16.8259 16.4075 16.8741 16.4277 16.9139C16.7781 17.5926 17.1782 18.2388 17.6188 18.8518C17.6372 18.8777 17.6703 18.8888 17.7006 18.8795C19.6072 18.2898 21.5404 17.4 23.5362 15.9343C23.5537 15.9214 23.5647 15.9019 23.5666 15.8806C24.0531 10.8475 22.7517 6.47548 20.1167 2.59972C20.1103 2.58677 20.0993 2.5775 20.0864 2.57195ZM8.13098 13.2289C6.9813 13.2289 6.034 12.1734 6.034 10.8771C6.034 9.58088 6.96293 8.52539 8.13098 8.52539C9.30819 8.52539 10.2463 9.59015 10.2279 10.8771C10.2279 12.1734 9.29899 13.2289 8.13098 13.2289ZM15.8842 13.2289C14.7345 13.2289 13.7872 12.1734 13.7872 10.8771C13.7872 9.58088 14.7161 8.52539 15.8842 8.52539C17.0614 8.52539 17.9995 9.59015 17.9811 10.8771C17.9811 12.1734 17.0614 13.2289 15.8842 13.2289Z" fill="#5865F2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_935_456">
            <rect width="23.3333" height="18.0751" fill="white" transform="translate(0.333252 0.962402)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export function useSocialLoginConnectors() {
  const google: SocialLogin = {
    iconUrl:
      googleIcon(),
    id: "1",
    type: SocialLoginTypes.Google,
  };
  const instagram: SocialLogin = {
    iconUrl:
      instaIcon(),
    id: "2",
    type: SocialLoginTypes.Instagram,
  };
  const twitter: SocialLogin = {
    iconUrl:
      xIcon(),
    id: "3",
    type: SocialLoginTypes.X,
  };
  const discord: SocialLogin = {
    iconUrl:
      discordIcon(),
    id: "4",
    type: SocialLoginTypes.Discord,
  };
  return [google, twitter, discord,instagram];
}
