import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import CreditCardInfoResult from './Models/CreditCardInfoResult';
import GetGmoExecTranIn from './Models/GetGmoExecTranIn';
import GetGmoExecTranResult from './Models/GetGmoExecTranResult';
import RegisterIchjknrInfoIn from './Models/RegisterIchjknrInfoIn';
import DeleteIchjknrInfoIn from './Models/DeleteIchjknrInfoIn';
import SelectIchjknrInfoResult from './Models/SelectIchjknrInfoResult';
import GetShhriInfoByKeyResult from './Models/GetShhriInfoByKeyResult';
import GetTsuryShhziInfoResult from './Models/GetTsuryShhziInfoResult';
import GMOCancelIn from './Models/GMOCancelIn';
import TicketInfoResult from '../Film/Models/TicketInfoResult';
import RegisterQuestionnaireIn from './Models/RegisterQuestionnaireIn';
import GetQuestionnaireListIn from './Models/GetQuestionnaireListIn';
import GetQuestionnaireListResult from './Models/GetQuestionnaireListResult';

export default class PurchaseService extends Service {
    /**
     * 購入日時チェック
     *
     * @param {string} skhnCd 作品コード
     */
    public isPurchaseDatetime(skhnCd: string, cb: (err, responnes, isOnSalse: boolean) => any) {
        let method = 'IsPurchaseDatetime';

        let args = {
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
    public getGmoSearchCard(kiinCd: string, cb: (err, response, creditCardInfoResult: CreditCardInfoResult) => any) {
        let method = 'GetGmoSearchCard';

        let args = {
            kiinCd: kiinCd
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let creditCardInfoResult: CreditCardInfoResult = null;

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
    public getTicketTypeList(skhnCd, dvcTyp, cb: (err, response, result: TicketInfoResult) => any) {
        let method = 'GetTicketTypeList';

        let args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let ticketInfoResult: TicketInfoResult = null;

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
    public saibanKssiknrNo(cb: (err, response, kssiknrNo: string) => any) {
        let method = 'SaibanKssiknrNo';

        let args = {
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let kssiknrNo: string = null;

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
     * @param {string} kssiknrNo   決済管理番号
     * @param {string} kssihhTyp  決済方法区分
     * @param {string} accessId        取引ID
     * @param {string} accessPwd  取引パスワード
     * @param Array<string>  params
     */
    public getGmoExecTran(params: Object, cb: (err, response, GetGmoExecTranResult: GetGmoExecTranResult) => any)
    {
        let method = 'GetGmoExecTran';

        let args = GetGmoExecTranIn.create(params);

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let getGmoExecTranResult: GetGmoExecTranResult = null;

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
    public getGmoSaveCard(kssiknrNo, kiinCd, mignn, cb: (err, response, isSuccess: boolean) => any) {
        let method = 'GetGmoSaveCard';

        let args = {
            kssiknrNo: kssiknrNo,
            kiinCd: kiinCd,
            mignn: mignn,
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
     * @param {RegisterIchjknrInfoIn} args
     */
    public registerIchjknr(params: Object, cb: (err, response, isSuccess: boolean) => any) {
        let method = 'RegisterIchjknr';

        let args = RegisterIchjknrInfoIn.create(params);

        let message = args.toXml();

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
    public selectIchjknr(kssihhTyp, accessIdOrkssiknrNo, cb: (err, response, selectIchjknrInfoResults: Array<SelectIchjknrInfoResult>) => any) {
        let method = 'SelectIchjknr';

        let args = {
            accessIdOrkssiknrNo: accessIdOrkssiknrNo,
            kssihhTyp: kssihhTyp
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, []);

            let selectIchjknrInfoResults: Array<SelectIchjknrInfoResult> = [];

            // // 処理結果情報がないのでRESULT_INFO.STATUSによるエラー判定不可
            if (result !== null && result.hasOwnProperty('SelectIchjknrInfoOut')) {
                if (Array.isArray(result.SelectIchjknrInfoOut)) {
                    for (let info of result.SelectIchjknrInfoOut) {
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
     * @param {Array<string>} accessIds
     */
    public deleteIchjknr(accessIds: Array<string>, cb: (err, response, isSuccess: boolean) => any) {
        let method = 'DeleteIchjknr';

        let deleteIchjknrInfoIn = new DeleteIchjknrInfoIn();
        deleteIchjknrInfoIn.accessIdList = accessIds;

        let message = deleteIchjknrInfoIn.toXml();

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
    public getTsuryShhziInfo(knshknknrNo, cb: (err, response, getTsuryShhziInfoResults: Array<GetTsuryShhziInfoResult>) => any) {
        let method = 'GetTsuryShhziInfo';

        let args = {
            knshknknrNo: knshknknrNo
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let getTsuryShhziInfoResults: Array<GetTsuryShhziInfoResult> = [];

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
            }

            cb(err, response, getTsuryShhziInfoResults);
        });
    }

    /**
     * 支払先情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    public getShhriInfoByKey(knshknknrNo, cb: (err, respones, getShhriInfoByKeyResult: GetShhriInfoByKeyResult) => any) {
        let method = 'GetShhriInfoByKey';

        let args = {
            knshknknrNo: knshknknrNo
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let getShhriInfoByKeyResult: GetShhriInfoByKeyResult = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getShhriInfoByKeyResult = GetShhriInfoByKeyResult.parse(result);
            }

            cb(err, response, getShhriInfoByKeyResult);
        });
    }

    /**
     * 代行会社決済取消呼出
     *
     * @param {GMOCancelIn} args
     */
    public gMOCancel(params: Object, cb: (err, response, isSuccess: boolean) => any) {
        let method = 'GMOCancel';

        let args = GMOCancelIn.create(params);

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
     * @param {GetQuestionnaireListIn} args
     */
    public getQuestionnaireList(params: Object, cb: (err, response, getQuestionnaireListResult: GetQuestionnaireListResult) => any) {
        let method = 'GetQuestionnaireList';

        let args = GetQuestionnaireListIn.create(params);

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
     * @param {RegisterQuestionnaireIn} args
     */
    public registerQuestionnaire(params: Object, cb: (err, response, isSuccess: boolean) => any) {
        let method = 'RegisterQuestionnaire';

        let args = RegisterQuestionnaireIn.create(params);

        let message = args.toXml();
        let isSuccess = false;

        this.call(method, message, (err, response, result) => {
            if (err) return cb(err, response, isSuccess);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }
}