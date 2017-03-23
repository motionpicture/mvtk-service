"use strict";
const Cookie = require("soap-cookie");
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const EncryptDataListIn_1 = require("./Models/EncryptDataListIn");
const GetCodeNameResult_1 = require("./Models/GetCodeNameResult");
/**
 * UtilService
 * @class
 * @extends {Service}
 */
class UtilService extends Service_1.default {
    // /**
    //  * 都道府県コード検索
    //  *
    //  * @param {string}  $prefectureCode 都道府県コード
    //  * @param {boolean} $addBlank       trueにすると一覧にブランク用が追加される
    //  * @return {array}
    //  *
    //  * @throws sfMovieticketAPIException
    //  */
    // public getPrefectureCode(prefectureCode = '', addBlank = false): void {
    //     // $methodName = 'GetPrefectureCode';
    //     // $params = array(
    //     //     'tdfknCd'   => $prefectureCode,
    //     //     'blnkarFlg' => $addBlank ? '1' : '0',
    //     // );
    //     // $response = $this->callMethod($methodName, $params);
    //     // if ($response->isError()) {
    //     //     $message = sprintf('Method:%s.%s Status:%s Message:%s',
    //     //     $this->serviceName, $methodName, $response->getStatus(), $response->getMessage());
    //     //     throw new sfMovieticketAPIException($message, $response->getStatus());
    //     // }
    //     // $result = $response->getResponseResultField();
    //     // $prefectures = array();
    //     // foreach ($result->TDFKN_INFO->TdfknInfo as $value)
    //     // {
    //     //     $prefecture = new MovieticketPrefecture();
    //     //     $prefecture->fromResponse($value);
    //     //     $prefectures[] = $prefecture;
    //     // }
    //     // return $prefectures;
    // }
    // /**
    //  * ムビチケ対応劇場都道府県コード検索
    //  *
    //  * @param {string}  $prefectureCode 都道府県コード。現状は指定しても都道府県一覧に影響しない
    //  * @param {boolean} $addBlank       trueにすると一覧にブランク用が追加される
    //  * @return {array}
    //  *
    //  * @throws sfMovieticketAPIException
    //  */
    // public getPrefectureCodeWithMvitckttio(prefectureCode = '', addBlank = false): void {
    //     // $methodName = 'GetPrefectureCodeWithMvitckttio';
    //     // $params = array(
    //     //     'tdfknCd'   => $prefectureCode,
    //     //     'blnkarFlg' => $addBlank ? '1' : '0',
    //     // );
    //     // $response = $this->callMethod($methodName, $params);
    //     // if ($response->isError()) {
    //     //     $message = sprintf('Method:%s.%s Status:%s Message:%s',
    //     //     $this->serviceName, $methodName, $response->getStatus(), $response->getMessage());
    //     //     throw new sfMovieticketAPIException($message, $response->getStatus());
    //     // }
    //     // $result = $response->getResponseResultField();
    //     // $prefectures = array();
    //     // foreach ($result->TDFKN_INFO->TdfknInfo as $value)
    //     // {
    //     //     $prefecture = new MovieticketPrefecture();
    //     //     $prefecture->fromResponse($value);
    //     //     $prefectures[] = $prefecture;
    //     // }
    //     // return $prefectures;
    // }
    /**
     * 会員認証クッキー追加
     *
     * API側で会員情報がセッションに追加され、セッションクッキーが発行される。
     *
     * @param {string} kiinCd ムビチケ会員コード
     */
    signIn(kiinCd, cb) {
        const method = 'SignIn';
        const args = {
            kiinCd: kiinCd
        };
        this.call(method, args, (err, response, result, lastResponseHeaders) => {
            if (err)
                return cb(err, response, null);
            let cookieString = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                const cookie = new Cookie(lastResponseHeaders);
                cookieString = cookie.cookies;
            }
            cb(err, response, cookieString);
        });
    }
    /**
     * サインアウト
     *
     * API側のセッション情報を破棄
     */
    signOut(cb) {
        const method = 'SignOut';
        const args = {};
        let isSuccess = false;
        // tslint:disable-next-line:variable-name
        this.call(method, args, (err, response, result, _lastResponseHeaders) => {
            if (err)
                return cb(err, response, isSuccess);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }
            cb(err, response, isSuccess);
        });
    }
    /**
     * 電子券QRコード生成
     *
     * @param {string}  knyknrNo 購入管理番号
     * @param {string}  pinCd    PINコード（購入者電話番号下４桁）
     */
    createQrCode(knyknrNo, pinCd, cb) {
        const method = 'CreateQrCode';
        const args = {
            knyknrNo: knyknrNo,
            pinCd: pinCd
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let qrcdUrl = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                qrcdUrl = result.QRCD_URL;
            }
            cb(err, response, qrcdUrl);
        });
    }
    // /**
    //  * 暗号化
    //  *
    //  * @param string $value
    //  * @return string 暗号化した文字列
    //  *
    //  * @throws sfMovieticketAPIException
    //  */
    // public encryptData(value): void {
    //     // $methodName = 'EncryptData';
    //     // $params = array(
    //     //     'data' => $value,
    //     // );
    //     // $response = $this->callMethod($methodName, $params);
    //     // if ($response->isError()) {
    //     //     $message = sprintf('Method:%s.%s Status:%s Message:%s',
    //     //     $this->serviceName, $methodName, $response->getStatus(), $response->getMessage());
    //     //     throw new sfMovieticketAPIException($message, $response->getStatus());
    //     // }
    //     // $result = $response->getResponseResultField();
    //     // return $result->ENCRYPTED_DATA;
    // }
    /**
     * 暗号化（配列）
     *
     * @param {Object} values
     */
    encryptDataList(params, cb) {
        const method = 'EncryptDataList';
        const args = new EncryptDataListIn_1.default(params);
        this.call(method, args.toXml(), (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let encryptedStrings = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                encryptedStrings = result.ENCRYPTED_DATALIST.string;
            }
            cb(err, response, encryptedStrings);
        });
    }
    /**
     * 各種コード検索
     *
     * @param {string} kmkTyp 項目区分
     * @param {string} typ 区分
     * @param {string} blnkarFlg ブランク有フラグ
     */
    getCodeName(kmkTyp, typ, blnkarFlg, cb) {
        const method = 'GetCodeName';
        const args = {
            kmkTyp: kmkTyp,
            typ: typ,
            blnkarFlg: blnkarFlg
        };
        let getCodeNameResult;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, result);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                getCodeNameResult = GetCodeNameResult_1.default.parse(result);
            }
            cb(err, response, getCodeNameResult);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UtilService;
