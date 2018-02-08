import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import CreditCardInfoResult from './models/CreditCardInfoResult';
import GetGmoExecTranIn from './models/GetGmoExecTranIn';
import GetGmoExecTranResult from './models/GetGmoExecTranResult';
import RegisterIchjknrInfoIn from './models/RegisterIchjknrInfoIn';
import DeleteIchjknrInfoIn from './models/DeleteIchjknrInfoIn';
import SelectIchjknrInfoResult from './models/SelectIchjknrInfoResult';
import GetShhriInfoByKeyResult from './models/GetShhriInfoByKeyResult';
import GetTsuryShhziInfoResult from './models/GetTsuryShhziInfoResult';
import GMOCancelIn from './models/GMOCancelIn';
import TicketInfoResult from '../Film/models/TicketInfoResult';
import RegisterQuestionnaireIn from './models/RegisterQuestionnaireIn';
import GetQuestionnaireListIn from './models/GetQuestionnaireListIn';
import GetQuestionnaireListResult from './models/GetQuestionnaireListResult';
import ForwardPurchaseInfoMailIn from './models/ForwardPurchaseInfoMailIn';

export default class PurchaseService extends Service {
    /**
     * 購入日時チェック
     *
     * @param {string} skhnCd 作品コード
     */
    public isPurchaseDatetime(skhnCd: string) {
        let method = 'IsPurchaseDatetime';

        let args = {
            skhnCd: skhnCd
        };

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let isOnSale = false;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                // 鑑賞券販売フラグ 0：販売期間外/1：販売中
                isOnSale = (result.KNSHKNHMBI_FLG === '1');
            } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isOnSale
                });
            });
        });
    }

    /**
     * 代行会社カード参照呼出
     *
     * @param {string} kiinCd
     */
    public getGmoSearchCard(kiinCd: string) {
        let method = 'GetGmoSearchCard';

        let args = {
            kiinCd: kiinCd
        };

        return new Promise<{
            response: any;
            result: CreditCardInfoResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let creditCardInfoResult: CreditCardInfoResult = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    if (result.CRDJHUM_FLG !== '0') {
                        if (Array.isArray(result.CRDTCRD_INFO.CrdtcrdInfo)) {
                            creditCardInfoResult = CreditCardInfoResult.parse(result.CRDTCRD_INFO.CrdtcrdInfo[0]);
                        } else {
                            creditCardInfoResult = CreditCardInfoResult.parse(result.CRDTCRD_INFO.CrdtcrdInfo);
                        }
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: creditCardInfoResult
                });
            });
        });
    }

    /**
     * 券種情報検索
     *
     * @param {string} skhnCd
     * @param {string} dvcTyp
     */
    public getTicketTypeList(skhnCd, dvcTyp) {
        let method = 'GetTicketTypeList';

        let args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        return new Promise<{
            response: any;
            result: TicketInfoResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let ticketInfoResult: TicketInfoResult = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    ticketInfoResult = TicketInfoResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: ticketInfoResult
                });
            });
        });
    }

    /**
     * 決済管理番号採番
     *
     * 決済エラーの処理はしない。
     * 決済エラー関係のフィールドはあるが、値は返却されない。
     *
     * @return string 決済管理番号
     */
    public saibanKssiknrNo() {
        let method = 'SaibanKssiknrNo';

        let args = {
        };

        return new Promise<{
            response: any;
            result: string;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let kssiknrNo: string = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    // 取引ID（ACCESS_ID）、取引パスワード（ACCESS_PWD）は使用しない。値も返却されない。
                    kssiknrNo = result.KSSIKNR_NO;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: kssiknrNo
                });
            });
        });
    } 
    /**
     * 代行会社決済実行呼出
     *
     * @param {string} kssiknrNo   決済管理番号
     * @param {string} kssihhTyp  決済方法区分
     * @param {string} accessId        取引ID
     * @param {string} accessPwd  取引パスワード
     * @param Array<string>  params
     */
    public getGmoExecTran(params: Object) {
        let method = 'GetGmoExecTran';

        let args = new GetGmoExecTranIn(params);

        return new Promise<{
            response: any;
            result: GetGmoExecTranResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let getGmoExecTranResult: GetGmoExecTranResult = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getGmoExecTranResult = GetGmoExecTranResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getGmoExecTranResult
                });
            });
        });
    }

    /**
     * 代行会社カード登録更新呼出
     *
     * @param {string} kssiknrNo       決済管理番号
     * @param {string} kiinCd          会員コード
     * @param {string} mignn  クレジットカード名義人
     */
    public getGmoSaveCard(kssiknrNo, kiinCd, mignn) {
        let method = 'GetGmoSaveCard';

        let args = {
            kssiknrNo: kssiknrNo,
            kiinCd: kiinCd,
            mignn: mignn,
        };

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
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
     * 一時管理テーブル（情報）登録
     *
     * @param {RegisterIchjknrInfoIn} args
     */
    public registerIchjknr(params: Object) {
        let method = 'RegisterIchjknr';

        let args = new RegisterIchjknrInfoIn(params);

        let message = args.toXml();

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
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
     * 一時管理テーブル（情報）取得
     *
     * @param {string} kssihhTyp    決済方法区分
     * @param {string} accessIdOrkssiknrNo 決済管理番号or取引ID。クレジットカード決済の場合のみ、取引ID
     */
    public selectIchjknr(kssihhTyp, accessIdOrkssiknrNo) {
        let method = 'SelectIchjknr';

        let args = {
            accessIdOrkssiknrNo: accessIdOrkssiknrNo,
            kssihhTyp: kssihhTyp
        };

        return new Promise<{
            response: any;
            result: SelectIchjknrInfoResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let selectIchjknrInfoResults: SelectIchjknrInfoResult[] = [];

                // 処理結果情報がないのでRESULT_INFO.STATUSによるエラー判定不可
                if (result !== null && result.hasOwnProperty('SelectIchjknrInfoOut')) {
                    if (Array.isArray(result.SelectIchjknrInfoOut)) {
                        for (let info of result.SelectIchjknrInfoOut) {
                            selectIchjknrInfoResults.push(SelectIchjknrInfoResult.parse(info));
                        }
                    } else {
                        selectIchjknrInfoResults.push(SelectIchjknrInfoResult.parse(result.SelectIchjknrInfoOut));
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: selectIchjknrInfoResults
                });
            });
        });
    }

    /**
     * 一時管理テーブル（情報）削除
     *
     * @param {Array<string>} accessIds
     */
    public deleteIchjknr(accessIds: string[]) {
        let method = 'DeleteIchjknr';

        let deleteIchjknrInfoIn = new DeleteIchjknrInfoIn();
        deleteIchjknrInfoIn.accessIdList = accessIds;

        let message = deleteIchjknrInfoIn.toXml();

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
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
     * 手数料・消費税情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    public getTsuryShhziInfo(knshknknrNo) {
        let method = 'GetTsuryShhziInfo';

        let args = {
            knshknknrNo: knshknknrNo
        };

        return new Promise<{
            response: any;
            result: GetTsuryShhziInfoResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let getTsuryShhziInfoResults: GetTsuryShhziInfoResult[] = [];

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    let infos = result.GetTsuryShhziInfoOut.KeyValueOfstringGetTsuryShhziInfoOutPz9MKw_Pl;
                    if (Array.isArray(infos)) {
                        for (let info of infos) {
                            let getTsuryShhziInfoResult = GetTsuryShhziInfoResult.parse(info.Value);
                            getTsuryShhziInfoResult.knshknknrmisiNo = info.Key;
                            getTsuryShhziInfoResults.push(getTsuryShhziInfoResult);
                        }
                    } else {
                        let getTsuryShhziInfoResult = GetTsuryShhziInfoResult.parse(infos.Value);
                        getTsuryShhziInfoResult.knshknknrmisiNo = infos.Key;
                        getTsuryShhziInfoResults.push(getTsuryShhziInfoResult);
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getTsuryShhziInfoResults
                });
            });
        });
    }

    /**
     * 支払先情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    public getShhriInfoByKey(knshknknrNo) {
        let method = 'GetShhriInfoByKey';

        let args = {
            knshknknrNo: knshknknrNo
        };

        return new Promise<{
            response: any;
            result: GetShhriInfoByKeyResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let getShhriInfoByKeyResult: GetShhriInfoByKeyResult = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getShhriInfoByKeyResult = GetShhriInfoByKeyResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getShhriInfoByKeyResult
                });
            });
        });
    }

    /**
     * 代行会社決済取消呼出
     *
     * @param {GMOCancelIn} args
     */
    public gMOCancel(params: Object) {
        let method = 'GMOCancel';

        let args = new GMOCancelIn(params);

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let isSuccess = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
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
     * アンケート設問検索
     *
     * @param {GetQuestionnaireListIn} args
     */
    public getQuestionnaireList(params: Object) {
        let method = 'GetQuestionnaireList';

        let args = new GetQuestionnaireListIn(params);

        let getQuestionnaireListResult: GetQuestionnaireListResult;

        return new Promise<{
            response: any;
            result: GetQuestionnaireListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getQuestionnaireListResult = GetQuestionnaireListResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getQuestionnaireListResult
                });
            });
        });
    }

    /**
     * アンケート設問登録
     *
     * @param {RegisterQuestionnaireIn} args
     */
    public registerQuestionnaire(params: Object) {
        let method = 'RegisterQuestionnaire';

        let args = new RegisterQuestionnaireIn(params);

        let message = args.toXml();
        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
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
     * 購入管理番号メール転送
     *
     * @param {Object} params
     */
    public forwardPurchaseInfoMail(params: Object) {
        let method = 'ForwardPurchaseInfoMail';

        let args = new ForwardPurchaseInfoMailIn(params);

        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }
}