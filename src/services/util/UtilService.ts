
import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { EncryptDataListIn } from './models/EncryptDataListIn';
import { GetCodeNameResult } from './models/GetCodeNameResult';
// tslint:disable-next-line:variable-name no-var-requires no-require-imports
const Cookie = require('soap-cookie');

/**
 * UtilService
 */
export class UtilService extends Service {
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
    public async getPrefectureCode(_prefectureCode: string, _addBlank: boolean) {
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
    // tslint:disable-next-line:prefer-function-over-method
    public async getPrefectureCodeWithMvitckttio(_prefectureCode: string, _addBlank: boolean) {
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
     * @param kiinCd ムビチケ会員コード
     */
    public async signIn(kiinCd: string) {
        const method = 'SignIn';

        const args = {
            kiinCd: kiinCd
        };

        return new Promise<{
            response: any;
            result: string;
        }>((resolve, reject) => {
            this.call(method, args, (err, _response, result, lastResponseHeaders) => {
                if (err) {
                    reject(err);

                    return;
                }

                let cookieString = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    const cookie = new Cookie(lastResponseHeaders);
                    cookieString = cookie.cookies;
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
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
    public async signOut() {
        const method = 'SignOut';

        const args = {
        };

        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, _response, result, _lastResponseHeaders) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                }
                resolve({
                    response: result,
                    result: isSuccess
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
    public async createQrCode(knyknrNo: string, pinCd: string) {
        const method = 'CreateQrCode';

        const args = {
            knyknrNo: knyknrNo,
            pinCd: pinCd
        };

        return new Promise<{
            response: any;
            result: string;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let qrcdUrl: string;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    qrcdUrl = result.QRCD_URL;
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: qrcdUrl
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
    public encryptData(_value: string): void {
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
    public async encryptDataList(params: Object) {
        const method = 'EncryptDataList';

        const args = new EncryptDataListIn(params);

        return new Promise<{
            response: any;
            result: string[];
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let encryptedStrings: string[];

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    encryptedStrings = result.ENCRYPTED_DATALIST.string;
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: encryptedStrings
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
    public async getCodeName(kmkTyp: string, typ: string, blnkarFlg: string) {
        const method = 'GetCodeName';

        const args = {
            kmkTyp: kmkTyp,
            typ: typ,
            blnkarFlg: blnkarFlg
        };

        let getCodeNameResult: GetCodeNameResult;

        return new Promise<{
            response: any;
            result: GetCodeNameResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getCodeNameResult = GetCodeNameResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: getCodeNameResult
                });
            });
        });
    }
}
