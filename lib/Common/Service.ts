import soap = require('soap');
// import log4js = require('log4js');

/**
 * ムビチケサービスベースクラス
 */
export default class Service
{
    /**
     * soapクライアント
     */
    private client: soap.Client = null;

    /**
     * クッキー文字列
     */
    private cookie: string;

    constructor(protected wsdl: string) {
    }

    public setCookie(cookie) {
        this.cookie = cookie;
    }

    /**
     * サービスメソッドを呼び出す
     * 
     * @param {string} method メソッド名
     * @param {Object|string} args INパラメーター(オブジェクト、あるいは、xml文字列を想定している)
     */
    protected call(method: string, args: Object|string, cb: (err: Error, response: any, result: any, lastResponseHeaders: any) => void) {
        // let logger = log4js.getLogger('system');

        // logger.debug('MvtkService calling...', method, args);

        this.createClient((err, client) => {
            // クライアント生成に失敗したら終了
            if (err) {
                return cb(err, null, null, null);
            }

            // logger.debug('MvtkService client.describe...', client.describe());

            // 一度だけ再試行(二度目は例外スロー)
            // if (canRetry) {
            //     return this.createClient(options, sessionCookie, false);
            // }

            let options = {
            };

            let extraHeaders = {};
            // クッキー文字列がある場合はヘッダーで送信(サービス側でログイン状態が判別される)
            if (this.cookie) {
                extraHeaders['Cookie'] = this.cookie;
            }

            client[method](args, (err, response) => {
                // response is a javascript object
                // raw is the raw response
                // header is the response soap header as a javascript object

                // logger.debug('MvtkService response coming...lastRequest:', client.lastRequest);
                // logger.debug('MvtkService response coming...', method, err, response, raw);

                // プロパティ名`${method}Result`に結果が入っている
                let result = response[`${method}Result`];

                cb(err, response, result, client['lastResponseHeaders']);
            }, options, extraHeaders);
        });
    }

    /**
     * sopaクライアントを生成する
     */
    private createClient(cb: (err: Error, client: soap.Client) => void) {
        // 一度生成済みであれば新たに生成しない
        if (this.client !== null) {
            return cb(null, this.client);
        }

        let options = {
        };
        soap.createClient(this.wsdl, options, (err, client) => {
            this.client = client;
            return cb(err, client);
        });
    }
}