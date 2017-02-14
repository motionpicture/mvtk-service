/**
 * ムビチケサービスベースクラス
 */
export default class Service {
    protected wsdl: string;
    /**
     * soapクライアント
     */
    private client;
    /**
     * クッキー文字列
     */
    private cookie;
    constructor(wsdl: string);
    setCookie(cookie: any): void;
    /**
     * サービスメソッドを呼び出す
     *
     * @param {string} method メソッド名
     * @param {Object|string} args INパラメーター(オブジェクト、あるいは、xml文字列を想定している)
     */
    protected call(method: string, args: Object | string, cb: (err: Error, response: any, result: any, lastResponseHeaders: any) => void): void;
    /**
     * sopaクライアントを生成する
     */
    private createClient(cb);
}
