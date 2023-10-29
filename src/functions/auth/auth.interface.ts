export interface LoginData {
    code: number;
    message: string;
    token?: string;
    expires?: Date;
}