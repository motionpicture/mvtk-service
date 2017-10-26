"use strict";
const soap = require("soap");
// import log4js = require('log4js');
/**
 * ムビチケサービスベースクラス
 */
class Service {
    constructor(wsdl) {
        this.wsdl = wsdl;
        /**
         * soapクライアント
         */
        this.client = null;
    }
    setCookie(cookie) {
        this.cookie = cookie;
    }
    /**
     * サービスメソッドを呼び出す
     *
     * @param {string} method メソッド名
     * @param {Object|string} args INパラメーター(オブジェクト、あるいは、xml文字列を想定している)
     */
    call(method, args, cb) {
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
                timeout: 60000 // 60 * 1000
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
                let result = null;
                // プロパティ名`${method}Result`に結果が入っている
                if (response && response.hasOwnProperty(`${method}Result`)) {
                    result = response[`${method}Result`];
                }
                cb(err, response, result, client['lastResponseHeaders']);
            }, options, extraHeaders);
        });
    }
    /**
     * sopaクライアントを生成する
     */
    createClient(cb) {
        // 一度生成済みであれば新たに生成しない
        if (this.client !== null) {
            return cb(null, this.client);
        }
        let options = {};
        soap.createClient(this.wsdl, options, (err, client) => {
            this.client = client;
            return cb(err, client);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Service;
