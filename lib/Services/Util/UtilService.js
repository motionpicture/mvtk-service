"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const Cookie = require("soap-cookie");
const GetCodeNameResult_1 = require("./Models/GetCodeNameResult");
const EncryptDataListIn_1 = require("./Models/EncryptDataListIn");
class UtilService extends Service_1.default {
    /**
     * 都道府県コード検索
     *
     * @param string  $prefectureCode 都道府県コード
     * @param boolean $addBlank       trueにすると一覧にブランク用が追加される
     * @return array
     *
     * @throws sfMovieticketAPIException
     */
    getPrefectureCode(prefectureCode = '', addBlank = false) {
        // $methodName = 'GetPrefectureCode';
        // $params = array(
        //     'tdfknCd'   => $prefectureCode,
        //     'blnkarFlg' => $addBlank ? '1' : '0',
        // );
        // $response = $this->callMethod($methodName, $params);
        // if ($response->isError()) {
        //     $message = sprintf('Method:%s.%s Status:%s Message:%s',
        //     $this->serviceName, $methodName, $response->getStatus(), $response->getMessage());
        //     throw new sfMovieticketAPIException($message, $response->getStatus());
        // }
        // $result = $response->getResponseResultField();
        // $prefectures = array();
        // foreach ($result->TDFKN_INFO->TdfknInfo as $value)
        // {
        //     $prefecture = new MovieticketPrefecture();
        //     $prefecture->fromResponse($value);
        //     $prefectures[] = $prefecture;
        // }
        // return $prefectures;
    }
    /**
     * ムビチケ対応劇場都道府県コード検索
     *
     * @param string  $prefectureCode 都道府県コード。現状は指定しても都道府県一覧に影響しない
     * @param boolean $addBlank       trueにすると一覧にブランク用が追加される
     * @return array
     *
     * @throws sfMovieticketAPIException
     */
    getPrefectureCodeWithMvitckttio(prefectureCode = '', addBlank = false) {
        // $methodName = 'GetPrefectureCodeWithMvitckttio';
        // $params = array(
        //     'tdfknCd'   => $prefectureCode,
        //     'blnkarFlg' => $addBlank ? '1' : '0',
        // );
        // $response = $this->callMethod($methodName, $params);
        // if ($response->isError()) {
        //     $message = sprintf('Method:%s.%s Status:%s Message:%s',
        //     $this->serviceName, $methodName, $response->getStatus(), $response->getMessage());
        //     throw new sfMovieticketAPIException($message, $response->getStatus());
        // }
        // $result = $response->getResponseResultField();
        // $prefectures = array();
        // foreach ($result->TDFKN_INFO->TdfknInfo as $value)
        // {
        //     $prefecture = new MovieticketPrefecture();
        //     $prefecture->fromResponse($value);
        //     $prefectures[] = $prefecture;
        // }
        // return $prefectures;
    }
    /**
     * 会員認証クッキー追加
     *
     * API側で会員情報がセッションに追加され、セッションクッキーが発行される。
     *
     * @param {string} kiinCd ムビチケ会員コード
     */
    signIn(kiinCd) {
        let method = 'SignIn';
        let args = {
            kiinCd: kiinCd
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result, lastResponseHeaders) => {
                if (err) {
                    return reject(err);
                }
                let cookieString = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    let cookie = new Cookie(lastResponseHeaders);
                    cookieString = cookie.cookies;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: cookieString
                });
            });
        });
    }
    /**
     * サインアウト
     *
     * API側のセッション情報を破棄
     */
    signOut() {
        let method = 'SignOut';
        let args = {};
        let isSuccess = false;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result, lastResponseHeaders) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }
    /**
     * 電子券QRコード生成
     *
     * @param {string}  knyknrNo 購入管理番号
     * @param {string}  pinCd    PINコード（購入者電話番号下４桁）
     */
    createQrCode(knyknrNo, pinCd) {
        let method = 'CreateQrCode';
        let args = {
            knyknrNo: knyknrNo,
            pinCd: pinCd
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let qrcdUrl = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    qrcdUrl = result.QRCD_URL;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: qrcdUrl
                });
            });
        });
    }
    /**
     * 暗号化
     *
     * @param string $value
     * @return string 暗号化した文字列
     *
     * @throws sfMovieticketAPIException
     */
    encryptData(value) {
        // $methodName = 'EncryptData';
        // $params = array(
        //     'data' => $value,
        // );
        // $response = $this->callMethod($methodName, $params);
        // if ($response->isError()) {
        //     $message = sprintf('Method:%s.%s Status:%s Message:%s',
        //     $this->serviceName, $methodName, $response->getStatus(), $response->getMessage());
        //     throw new sfMovieticketAPIException($message, $response->getStatus());
        // }
        // $result = $response->getResponseResultField();
        // return $result->ENCRYPTED_DATA;
    }
    /**
     * 暗号化（配列）
     *
     * @param {Object} values
     */
    encryptDataList(params) {
        let method = 'EncryptDataList';
        let args = new EncryptDataListIn_1.default(params);
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let encryptedStrings = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    encryptedStrings = result.ENCRYPTED_DATALIST.string;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: encryptedStrings
                });
            });
        });
    }
    /**
     * 各種コード検索
     *
     * @param {string} kmkTyp 項目区分
     * @param {string} typ 区分
     * @param {string} blnkarFlg ブランク有フラグ
     */
    getCodeName(kmkTyp, typ, blnkarFlg) {
        let method = 'GetCodeName';
        let args = {
            kmkTyp: kmkTyp,
            typ: typ,
            blnkarFlg: blnkarFlg
        };
        let getCodeNameResult;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    getCodeNameResult = GetCodeNameResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getCodeNameResult
                });
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UtilService;
