/// <reference types="react-scripts" />
declare namespace NodeJS {
	interface ProcessEnv {
		readonly NODE_ENV: 'development' | 'production' | 'test';
		readonly PUBLIC_URL: string;
		REACT_APP_API_URL: string;
		REACT_APP_STUDENT_URL: string;
	}
}
