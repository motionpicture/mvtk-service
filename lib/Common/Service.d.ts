/**
 * ムビチケサービスベースクラス
 */
export declare class Service {
    /**
     * wsdl
     */
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
    setCookie(cookie: string): void;
    /**
     * サービスメソッドを呼び出す
     *
     * @param  method メソッド名
     * @param  args INパラメーター(オブジェクト、あるいは、xml文字列を想定している)
     */
    protected call(method: string, args: Object | string, cb: (err: any, _response: any, result: any, lastResponseHeaders: any) => void): void;
    /**
     * sopaクライアントを生成する
     */
    private createClient(cb);
}
