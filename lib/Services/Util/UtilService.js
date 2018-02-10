"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const EncryptDataListIn_1 = require("./models/EncryptDataListIn");
const GetCodeNameResult_1 = require("./models/GetCodeNameResult");
// tslint:disable-next-line:variable-name no-var-requires no-require-imports
const Cookie = require('soap-cookie');
/**
 * UtilService
 */
class UtilService extends Service_1.Service {
    /**
     * 都道府県コード検索
     *
     * @param string  $prefectureCode 都道府県コード
     * @param boolean $addBlank       trueにすると一覧にブランク用が追加される
     * @return array
     *
     * @throws sfMovieticketAPIException
     */
    // tslint:disable-next-line:prefer-function-over-method
    getPrefectureCode(_prefectureCode, _addBlank) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
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
    // tslint:disable-next-line:prefer-function-over-method
    getPrefectureCodeWithMvitckttio(_prefectureCode, _addBlank) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    /**
     * 会員認証クッキー追加
     *
     * API側で会員情報がセッションに追加され、セッションクッキーが発行される。
     *
     * @param kiinCd ムビチケ会員コード
     */
    signIn(kiinCd) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'SignIn';
            const args = {
                kiinCd: kiinCd
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result, lastResponseHeaders) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let cookieString = null;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        const cookie = new Cookie(lastResponseHeaders);
                        cookieString = cookie.cookies;
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: cookieString
                    });
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
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'SignOut';
            const args = {};
            let isSuccess = false;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result, _lastResponseHeaders) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        isSuccess = true;
                    }
                    resolve({
                        response: response,
                        result: isSuccess
                    });
                });
            });
        });
    }
    /**
     * 電子券QRコード生成
     *
     * @param knyknrNo 購入管理番号
     * @param pinCd    PINコード（購入者電話番号下４桁）
     */
    createQrCode(knyknrNo, pinCd) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'CreateQrCode';
            const args = {
                knyknrNo: knyknrNo,
                pinCd: pinCd
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let qrcdUrl;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        qrcdUrl = result.QRCD_URL;
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: qrcdUrl
                    });
                });
            });
        });
    }
    /**
     * 暗号化
     *
     * @return string 暗号化した文字列
     *
     * @throws sfMovieticketAPIException
     */
    // tslint:disable-next-line:prefer-function-over-method
    encryptData(_value) {
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
     */
    encryptDataList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'EncryptDataList';
            const args = new EncryptDataListIn_1.EncryptDataListIn(params);
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let encryptedStrings;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        encryptedStrings = result.ENCRYPTED_DATALIST.string;
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: encryptedStrings
                    });
                });
            });
        });
    }
    /**
     * 各種コード検索
     *
     * @param kmkTyp 項目区分
     * @param typ 区分
     * @param blnkarFlg ブランク有フラグ
     */
    getCodeName(kmkTyp, typ, blnkarFlg) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetCodeName';
            const args = {
                kmkTyp: kmkTyp,
                typ: typ,
                blnkarFlg: blnkarFlg
            };
            let getCodeNameResult;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        getCodeNameResult = GetCodeNameResult_1.GetCodeNameResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: getCodeNameResult
                    });
                });
            });
        });
    }
}
exports.UtilService = UtilService;
