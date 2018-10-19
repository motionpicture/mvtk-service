
import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { TicketInfoResult } from '../film/models/TicketInfoResult';
import { CreditCardInfoResult } from './models/CreditCardInfoResult';
import { DeleteIchjknrInfoIn } from './models/DeleteIchjknrInfoIn';
import { ForwardPurchaseInfoMailIn } from './models/ForwardPurchaseInfoMailIn';
import { GetGmoExecTranIn } from './models/GetGmoExecTranIn';
import { GetGmoExecTranResult } from './models/GetGmoExecTranResult';
import { GetQuestionnaireListIn } from './models/GetQuestionnaireListIn';
import { GetQuestionnaireListResult } from './models/GetQuestionnaireListResult';
import { GetShhriInfoByKeyResult } from './models/GetShhriInfoByKeyResult';
import { GetTsuryShhziInfoResult } from './models/GetTsuryShhziInfoResult';
import { GMOCancelIn } from './models/GMOCancelIn';
import { RegisterIchjknrInfoIn } from './models/RegisterIchjknrInfoIn';
import { RegisterQuestionnaireIn } from './models/RegisterQuestionnaireIn';
import { SelectIchjknrInfoResult } from './models/SelectIchjknrInfoResult';

/**
 * PurchaseService
 */
export class PurchaseService extends Service {
    /**
     * 購入日時チェック
     *
     * @param skhnCd 作品コード
     */
    public async isPurchaseDatetime(skhnCd: string) {
        const method = 'IsPurchaseDatetime';

        const args = {
            skhnCd: skhnCd
        };

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let isOnSale = false;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    // 鑑賞券販売フラグ 0：販売期間外/1：販売中
                    isOnSale = (result.KNSHKNHMBI_FLG === '1');
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: isOnSale
                });
            });
        });
    }

    /**
     * 代行会社カード参照呼出
     */
    public async getGmoSearchCard(kiinCd: string) {
        const method = 'GetGmoSearchCard';

        const args = {
            kiinCd: kiinCd
        };

        return new Promise<{
            response: any;
            result: CreditCardInfoResult | null;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let creditCardInfoResult: CreditCardInfoResult | null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    if (result.CRDJHUM_FLG === '1') {
                        if (Array.isArray(result.CRDTCRD_INFO.CrdtcrdInfo)) {
                            creditCardInfoResult = CreditCardInfoResult.parse(result.CRDTCRD_INFO.CrdtcrdInfo[0]);
                        } else {
                            creditCardInfoResult = CreditCardInfoResult.parse(result.CRDTCRD_INFO.CrdtcrdInfo);
                        }
                    } else {
                        creditCardInfoResult = null;
                    }
                    resolve({
                        response: result,
                        result: creditCardInfoResult
                    });
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
            });
        });
    }

    /**
     * 券種情報検索
     */
    public async getTicketTypeList(skhnCd: string, dvcTyp: string) {
        const method = 'GetTicketTypeList';

        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        return new Promise<{
            response: any;
            result: TicketInfoResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let ticketInfoResult: TicketInfoResult;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    ticketInfoResult = TicketInfoResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
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
    public async saibanKssiknrNo() {
        const method = 'SaibanKssiknrNo';

        const args = {
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

                let kssiknrNo: string;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    // 取引ID（ACCESS_ID）、取引パスワード（ACCESS_PWD）は使用しない。値も返却されない。
                    kssiknrNo = result.KSSIKNR_NO;
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: kssiknrNo
                });
            });
        });
    }
    /**
     * 代行会社決済実行呼出
     *
     * @param kssiknrNo   決済管理番号
     * @param kssihhTyp  決済方法区分
     * @param accessId        取引ID
     * @param accessPwd  取引パスワード
     * @param Array<string>  params
     */
    public async getGmoExecTran(params: Object) {
        const method = 'GetGmoExecTran';

        const args = new GetGmoExecTranIn(params);

        return new Promise<{
            response: any;
            result: GetGmoExecTranResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let getGmoExecTranResult: GetGmoExecTranResult;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getGmoExecTranResult = GetGmoExecTranResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: getGmoExecTranResult
                });
            });
        });
    }

    /**
     * 代行会社カード登録更新呼出
     *
     * @param kssiknrNo       決済管理番号
     * @param kiinCd          会員コード
     * @param mignn  クレジットカード名義人
     */
    public async getGmoSaveCard(kssiknrNo: string, kiinCd: string, mignn: string) {
        const method = 'GetGmoSaveCard';

        const args = {
            kssiknrNo: kssiknrNo,
            kiinCd: kiinCd,
            mignn: mignn
        };

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let isSuccess = false;

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
     * 一時管理テーブル（情報）登録
     */
    public async registerIchjknr(params: Object) {
        const method = 'RegisterIchjknr';

        const args = new RegisterIchjknrInfoIn(params);

        const message = args.toXml();

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, message, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let isSuccess = false;

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
     * 一時管理テーブル（情報）取得
     */
    public async selectIchjknr(kssihhTyp: string, accessIdOrkssiknrNo: string) {
        const method = 'SelectIchjknr';

        const args = {
            accessIdOrkssiknrNo: accessIdOrkssiknrNo,
            kssihhTyp: kssihhTyp
        };

        return new Promise<{
            response: any;
            result: SelectIchjknrInfoResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                const selectIchjknrInfoResults: SelectIchjknrInfoResult[] = [];

                // 処理結果情報がないのでRESULT_INFO.STATUSによるエラー判定不可
                if (result !== null && result.hasOwnProperty('SelectIchjknrInfoOut')) {
                    if (Array.isArray(result.SelectIchjknrInfoOut)) {
                        for (const info of result.SelectIchjknrInfoOut) {
                            selectIchjknrInfoResults.push(SelectIchjknrInfoResult.parse(info));
                        }
                    } else {
                        selectIchjknrInfoResults.push(SelectIchjknrInfoResult.parse(result.SelectIchjknrInfoOut));
                    }
                } else {
                    reject(new Error('一時管理データを取得できませんでした。'));

                    return;
                }
                resolve({
                    response: result,
                    result: selectIchjknrInfoResults
                });
            });
        });
    }

    /**
     * 一時管理テーブル（情報）削除
     */
    public async deleteIchjknr(accessIds: string[]) {
        const method = 'DeleteIchjknr';

        const deleteIchjknrInfoIn = new DeleteIchjknrInfoIn();
        deleteIchjknrInfoIn.accessIdList = accessIds;

        const message = deleteIchjknrInfoIn.toXml();

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, message, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let isSuccess = false;

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
     * 手数料・消費税情報取得
     *
     * @param knshknknrNo 鑑賞券管理番号
     */
    public async getTsuryShhziInfo(knshknknrNo: string) {
        const method = 'GetTsuryShhziInfo';

        const args = {
            knshknknrNo: knshknknrNo
        };

        return new Promise<{
            response: any;
            result: GetTsuryShhziInfoResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                const getTsuryShhziInfoResults: GetTsuryShhziInfoResult[] = [];

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    const infos = result.GetTsuryShhziInfoOut.KeyValueOfstringGetTsuryShhziInfoOutPz9MKw_Pl;
                    if (Array.isArray(infos)) {
                        for (const info of infos) {
                            const getTsuryShhziInfoResult = GetTsuryShhziInfoResult.parse(info.Value);
                            getTsuryShhziInfoResult.knshknknrmisiNo = info.Key;
                            getTsuryShhziInfoResults.push(getTsuryShhziInfoResult);
                        }
                    } else {
                        const getTsuryShhziInfoResult = GetTsuryShhziInfoResult.parse(infos.Value);
                        getTsuryShhziInfoResult.knshknknrmisiNo = infos.Key;
                        getTsuryShhziInfoResults.push(getTsuryShhziInfoResult);
                    }
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: getTsuryShhziInfoResults
                });
            });
        });
    }

    /**
     * 支払先情報取得
     *
     * @param knshknknrNo 鑑賞券管理番号
     */
    public async getShhriInfoByKey(knshknknrNo: string) {
        const method = 'GetShhriInfoByKey';

        const args = {
            knshknknrNo: knshknknrNo
        };

        return new Promise<{
            response: any;
            result: GetShhriInfoByKeyResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let getShhriInfoByKeyResult: GetShhriInfoByKeyResult;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getShhriInfoByKeyResult = GetShhriInfoByKeyResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: getShhriInfoByKeyResult
                });
            });
        });
    }

    /**
     * 代行会社決済取消呼出
     */
    public async gMOCancel(params: Object) {
        const method = 'GMOCancel';

        const args = new GMOCancelIn(params);

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let isSuccess = false;

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
     * アンケート設問検索
     */
    public async getQuestionnaireList(params: Object) {
        const method = 'GetQuestionnaireList';

        const args = new GetQuestionnaireListIn(params);

        let getQuestionnaireListResult: GetQuestionnaireListResult;

        return new Promise<{
            response: any;
            result?: GetQuestionnaireListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getQuestionnaireListResult = GetQuestionnaireListResult.parse(result);
                }
                resolve({
                    response: result,
                    result: getQuestionnaireListResult
                });
            });
        });
    }

    /**
     * アンケート設問登録
     */
    public async registerQuestionnaire(params: Object) {
        const method = 'RegisterQuestionnaire';

        const args = new RegisterQuestionnaireIn(params);

        const message = args.toXml();
        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, message, (err: any, _response: any, result: any) => {
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
     * 購入管理番号メール転送
     */
    public async forwardPurchaseInfoMail(params: Object) {
        const method = 'ForwardPurchaseInfoMail';

        const args = new ForwardPurchaseInfoMailIn(params);

        let isSuccess = false;

        return new Promise<{
            response: any;
            result: boolean;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
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
}
