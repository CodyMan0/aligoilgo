export type ActionType =
	| { type: "SET_EMAIL"; data: string }
	| { type: "SET_PASSWORD"; data: string }
	| { type: "SET_NICKNAME"; data: string };

export type UserInfoType = {
	email: string;
	password: string;
	nickName: string;
	emailValid: boolean;
	passwordValid: boolean;
	nickNameValid: boolean;
};

export type AuthResponse = {
	tokenInfo : {
		accessToken: string;
		refreshToken: string;
	}
	isFirst: boolean
};

