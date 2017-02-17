import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import TicketInfoResult from '../Film/Models/TicketInfoResult';
import CreditCardInfoResult from './Models/CreditCardInfoResult';
import { DeleteIchjknrInfoIn } from './Models/DeleteIchjknrInfoIn';
import { ForwardPurchaseInfoMailIn, IForwardPurchaseInfoMailIn } from './Models/ForwardPurchaseInfoMailIn';
import { GetGmoExecTranIn, IGetGmoExecTranIn } from './Models/GetGmoExecTranIn';
import GetGmoExecTranResult from './Models/GetGmoExecTranResult';
import { GetQuestionnaireListIn, IGetQuestionnaireListIn } from './Models/GetQuestionnaireListIn';
import GetQuestionnaireListResult from './Models/GetQuestionnaireListResult';
import GetShhriInfoByKeyResult from './Models/GetShhriInfoByKeyResult';
import GetTsuryShhziInfoResult from './Models/GetTsuryShhziInfoResult';
import { GMOCancelIn, IGMOCancelIn } from './Models/GMOCancelIn';
import { IRegisterIchjknrInfoIn, RegisterIchjknrInfoIn } from './Models/RegisterIchjknrInfoIn';
import { IRegisterQuestionnaireIn, RegisterQuestionnaireIn } from './Models/RegisterQuestionnaireIn';
import SelectIchjknrInfoResult from './Models/SelectIchjknrInfoResult';

/**
 * PurchaseService
 * @class
 * @extends {Service}
 */
export default class PurchaseService extends Service {
    /**
     * 購入日時チェック
     *
     * @param {string} skhnCd 作品コード
     */
    public isPurchaseDatetime(skhnCd: string, cb: (err: any, responnes: any, isOnSalse: boolean) => void): void {
        const method = 'IsPurchaseDatetime';

        const args = {
            skhnCd: skhnCd
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, false);

            let isOnSale = false;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                // 鑑賞券販売フラグ 0：販売期間外/1：販売中
                isOnSale = (result.KNSHKNHMBI_FLG === '1');
            }

            cb(err, response, isOnSale);
        });
    }

    /**
     * 代行会社カード参照呼出
     *
     * @param {string} kiinCd
     */
    public getGmoSearchCard(
        kiinCd: string,
        cb: (err: any, responnes: any, creditCardInfoResult: CreditCardInfoResult | null) => void
    ): void {
        const method = 'GetGmoSearchCard';

        const args = {
            kiinCd: kiinCd
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let creditCardInfoResult: CreditCardInfoResult | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                if (result.CRDJHUM_FLG !== '0') {
                    if (Array.isArray(result.CRDTCRD_INFO.CrdtcrdInfo)) {
                        creditCardInfoResult = CreditCardInfoResult.parse(result.CRDTCRD_INFO.CrdtcrdInfo[0]);
                    } else {
                        creditCardInfoResult = CreditCardInfoResult.parse(result.CRDTCRD_INFO.CrdtcrdInfo);
                    }
                }
            }

            cb(err, response, creditCardInfoResult);
        });
    }

    /**
     * 券種情報検索
     *
     * @param {string} skhnCd
     * @param {string} dvcTyp
     */
    public getTicketTypeList(
        skhnCd: string,
        dvcTyp: string,
        cb: (err: any, responnes: any, result: TicketInfoResult | null) => void
    ): void {
        const method = 'GetTicketTypeList';

        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let ticketInfoResult: TicketInfoResult | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                ticketInfoResult = TicketInfoResult.parse(result);
            }

            cb(err, response, ticketInfoResult);
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
    public saibanKssiknrNo(cb: (err: any, responnes: any, kssiknrNo: string | null) => void): void {
        const method = 'SaibanKssiknrNo';

        const args = {
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let kssiknrNo: string | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                // 取引ID（ACCESS_ID）、取引パスワード（ACCESS_PWD）は使用しない。値も返却されない。
                kssiknrNo = result.KSSIKNR_NO;
            }

            cb(err, response, kssiknrNo);
        });
    }

    /**
     * 代行会社決済実行呼出
     *
     * @param {IGetGmoExecTranIn}  params
     */
    public getGmoExecTran(
        params: IGetGmoExecTranIn,
        cb: (err: any, responnes: any, getGmoExecTranResult: GetGmoExecTranResult | null) => any
    ) {
        const method = 'GetGmoExecTran';

        const args = new GetGmoExecTranIn(params);

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let getGmoExecTranResult: GetGmoExecTranResult | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getGmoExecTranResult = GetGmoExecTranResult.parse(result);
            }

            cb(err, response, getGmoExecTranResult);
        });
    }

    /**
     * 代行会社カード登録更新呼出
     *
     * @param {string} kssiknrNo       決済管理番号
     * @param {string} kiinCd          会員コード
     * @param {string} mignn  クレジットカード名義人
     */
    public getGmoSaveCard(
        kssiknrNo: string,
        kiinCd: string,
        mignn: string,
        cb: (err: any, responnes: any, isSuccess: boolean) => void
    ): void {
        const method = 'GetGmoSaveCard';

        const args = {
            kssiknrNo: kssiknrNo,
            kiinCd: kiinCd,
            mignn: mignn
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, false);

            let isSuccess = false;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }

    /**
     * 一時管理テーブル（情報）登録
     *
     * @param {IRegisterIchjknrInfoIn} args
     */
    public registerIchjknr(params: IRegisterIchjknrInfoIn, cb: (err: any, responnes: any, isSuccess: boolean) => void): void {
        const method = 'RegisterIchjknr';

        const args = new RegisterIchjknrInfoIn(params);

        const message = args.toXml();

        this.call(method, message, (err, response, result) => {
            if (err) return cb(err, response, false);

            let isSuccess = false;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }

    /**
     * 一時管理テーブル（情報）取得
     *
     * @param {string} kssihhTyp    決済方法区分
     * @param {string} accessIdOrkssiknrNo 決済管理番号or取引ID。クレジットカード決済の場合のみ、取引ID
     */
    public selectIchjknr(
        kssihhTyp: string,
        accessIdOrkssiknrNo: string,
        cb: (err: any, responnes: any, selectIchjknrInfoResults: SelectIchjknrInfoResult[]) => void
    ): void {
        const method = 'SelectIchjknr';

        const args = {
            accessIdOrkssiknrNo: accessIdOrkssiknrNo,
            kssihhTyp: kssihhTyp
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, []);

            const selectIchjknrInfoResults: SelectIchjknrInfoResult[] = [];

            // // 処理結果情報がないのでRESULT_INFO.STATUSによるエラー判定不可
            if (result !== null && result.hasOwnProperty('SelectIchjknrInfoOut')) {
                if (Array.isArray(result.SelectIchjknrInfoOut)) {
                    for (const info of result.SelectIchjknrInfoOut) {
                        selectIchjknrInfoResults.push(SelectIchjknrInfoResult.parse(info));
                    }
                } else {
                    selectIchjknrInfoResults.push(SelectIchjknrInfoResult.parse(result.SelectIchjknrInfoOut));
                }
            }

            cb(err, response, selectIchjknrInfoResults);
        });
    }

    /**
     * 一時管理テーブル（情報）削除
     *
     * @param {string[]} accessIds
     */
    public deleteIchjknr(accessIds: string[], cb: (err: any, responnes: any, isSuccess: boolean) => void): void {
        const method = 'DeleteIchjknr';

        const deleteIchjknrInfoIn = new DeleteIchjknrInfoIn();
        deleteIchjknrInfoIn.accessIdList = accessIds;

        const message = deleteIchjknrInfoIn.toXml();

        this.call(method, message, (err, response, result) => {
            if (err) return cb(err, response, false);

            let isSuccess = false;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }

    /**
     * 手数料・消費税情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    public getTsuryShhziInfo(
        knshknknrNo: string,
        cb: (err: any, responnes: any, getTsuryShhziInfoResults: GetTsuryShhziInfoResult[] | null) => void
    ): void {
        const method = 'GetTsuryShhziInfo';

        const args = {
            knshknknrNo: knshknknrNo
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

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
            }

            cb(err, response, getTsuryShhziInfoResults);
        });
    }

    /**
     * 支払先情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    public getShhriInfoByKey(
        knshknknrNo: string,
        cb: (err: any, respones: any, getShhriInfoByKeyResult: GetShhriInfoByKeyResult | null) => void
    ): void {
        const method = 'GetShhriInfoByKey';

        const args = {
            knshknknrNo: knshknknrNo
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let getShhriInfoByKeyResult: GetShhriInfoByKeyResult | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getShhriInfoByKeyResult = GetShhriInfoByKeyResult.parse(result);
            }

            cb(err, response, getShhriInfoByKeyResult);
        });
    }

    /**
     * 代行会社決済取消呼出
     *
     * @param {IGMOCancelIn} args
     */
    public gMOCancel(params: IGMOCancelIn, cb: (err: any, responnes: any, isSuccess: boolean | null) => void): void {
        const method = 'GMOCancel';

        const args = new GMOCancelIn(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let isSuccess = false;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }

    /**
     * アンケート設問検索
     *
     * @param {IGetQuestionnaireListIn} args
     */
    public getQuestionnaireList(
        params: IGetQuestionnaireListIn,
        cb: (err: any, responnes: any, getQuestionnaireListResult: GetQuestionnaireListResult) => void
    ): void {
        const method = 'GetQuestionnaireList';

        const args = new GetQuestionnaireListIn(params);

        let getQuestionnaireListResult: GetQuestionnaireListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, getQuestionnaireListResult);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getQuestionnaireListResult = GetQuestionnaireListResult.parse(result);
            }

            cb(err, response, getQuestionnaireListResult);
        });
    }

    /**
     * アンケート設問登録
     *
     * @param {IRegisterQuestionnaireIn} args
     */
    public registerQuestionnaire(params: IRegisterQuestionnaireIn, cb: (err: any, responnes: any, isSuccess: boolean) => void): void {
        const method = 'RegisterQuestionnaire';

        const args = new RegisterQuestionnaireIn(params);

        const message = args.toXml();
        let isSuccess = false;

        this.call(method, message, (err, response, result) => {
            if (err) return cb(err, response, isSuccess);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }

    /**
     * 購入管理番号メール転送
     *
     * @param {IForwardPurchaseInfoMailIn} params
     */
    public forwardPurchaseInfoMail(params: IForwardPurchaseInfoMailIn, cb: (err: any, responnes: any, isSuccess: boolean) => void): void {
        const method = 'ForwardPurchaseInfoMail';

        const args = new ForwardPurchaseInfoMailIn(params);

        let isSuccess = false;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, isSuccess);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }
}
