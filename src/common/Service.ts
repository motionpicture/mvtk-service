import * as soap from 'soap';
// import log4js = require('log4js');

/**
 * ムビチケサービスベースクラス
 */
export class Service {
    /**
     * wsdl
     */
    protected wsdl: string;

    /**
     * soapクライアント
     */
    private client: soap.Client | null = null;

    /**
     * クッキー文字列
     */
    private cookie: string;

    constructor(wsdl: string) {
        this.wsdl = wsdl;
    }

    public setCookie(cookie: string) {
        this.cookie = cookie;
    }

    /**
     * サービスメソッドを呼び出す
     *
     * @param  method メソッド名
     * @param  args INパラメーター(オブジェクト、あるいは、xml文字列を想定している)
     */
    protected call(
        method: string,
        args: Object | string,
        cb: (err: any, _response: any, result: any, lastResponseHeaders: any) => void
    ) {
        // let logger = log4js.getLogger('system');

        // logger.debug('MvtkService calling...', method, args);

        this.createClient((err, client) => {
            // クライアント生成に失敗したら終了
            if (err) {
                cb(err, null, null, null);

                return;
            }

            // logger.debug('MvtkService client.describe...', client.describe());

            // 一度だけ再試行(二度目は例外スロー)
            // if (canRetry) {
            //     return this.createClient(options, sessionCookie, false);
            // }

            const options = {
                timeout: process.env.MVTK_SERVICE_CONNECTION_TIMEOUT_MILLISEC !== undefined ?
                    parseInt(<string>process.env.DEFAULT_MVTK, 10) : 60000
            };

            const extraHeaders: {
                Cookie?: string;
            } = {};
            // クッキー文字列がある場合はヘッダーで送信(サービス側でログイン状態が判別される)
            if (this.cookie !== undefined) {
                extraHeaders.Cookie = this.cookie;
            }

            (<any>client)[method](
                args,
                (err2: any, response: any) => {
                    // response is a javascript object
                    // raw is the raw response
                    // header is the response soap header as a javascript object

                    // logger.debug('MvtkService response coming...lastRequest:', client.lastRequest);
                    // logger.debug('MvtkService response coming...', method, err, response, raw);

                    let result = null;
                    // プロパティ名`${method}Result`に結果が入っている
                    if (response && response.hasOwnProperty(`${method}Result`)) {
                        result = response[`${method}Result`];
                    }

                    cb(err2, response, result, client.lastResponseHeaders);
                },
                options,
                extraHeaders);
        });
    }

    /**
     * sopaクライアントを生成する
     */
    private createClient(cb: (err: any, client: soap.Client) => void) {
        // 一度生成済みであれば新たに生成しない
        if (this.client !== null) {
            cb(null, this.client);

            return;
        }

        const options = {
        };
        soap.createClient(this.wsdl, options, (err, client) => {
            this.client = client;

            cb(err, client);

            return;
        });
    }
}
