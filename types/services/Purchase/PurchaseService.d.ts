import Service from '../../common/Service';
import CreditCardInfoResult from './Models/CreditCardInfoResult';
import GetGmoExecTranResult from './Models/GetGmoExecTranResult';
import SelectIchjknrInfoResult from './Models/SelectIchjknrInfoResult';
import GetShhriInfoByKeyResult from './Models/GetShhriInfoByKeyResult';
import GetTsuryShhziInfoResult from './Models/GetTsuryShhziInfoResult';
import TicketInfoResult from '../Film/Models/TicketInfoResult';
import GetQuestionnaireListResult from './Models/GetQuestionnaireListResult';
export default class PurchaseService extends Service {
    /**
     * 購入日時チェック
     *
     * @param {string} skhnCd 作品コード
     */
    isPurchaseDatetime(skhnCd: string, cb: (err, responnes, isOnSalse: boolean) => void): void;
    /**
     * 代行会社カード参照呼出
     *
     * @param {string} kiinCd
     */
    getGmoSearchCard(kiinCd: string, cb: (err, response, creditCardInfoResult: CreditCardInfoResult) => void): void;
    /**
     * 券種情報検索
     *
     * @param {string} skhnCd
     * @param {string} dvcTyp
     */
    getTicketTypeList(skhnCd: any, dvcTyp: any, cb: (err, response, result: TicketInfoResult) => void): void;
    /**
     * 決済管理番号採番
     *
     * 決済エラーの処理はしない。
     * 決済エラー関係のフィールドはあるが、値は返却されない。
     *
     * @return string 決済管理番号
     */
    saibanKssiknrNo(cb: (err, response, kssiknrNo: string) => void): void;
    /**
     * 代行会社決済実行呼出
     *
     * @param {string} kssiknrNo   決済管理番号
     * @param {string} kssihhTyp  決済方法区分
     * @param {string} accessId        取引ID
     * @param {string} accessPwd  取引パスワード
     * @param Array<string>  params
     */
    getGmoExecTran(params: Object, cb: (err, response, GetGmoExecTranResult: GetGmoExecTranResult) => any): void;
    /**
     * 代行会社カード登録更新呼出
     *
     * @param {string} kssiknrNo       決済管理番号
     * @param {string} kiinCd          会員コード
     * @param {string} mignn  クレジットカード名義人
     */
    getGmoSaveCard(kssiknrNo: any, kiinCd: any, mignn: any, cb: (err, response, isSuccess: boolean) => void): void;
    /**
     * 一時管理テーブル（情報）登録
     *
     * @param {RegisterIchjknrInfoIn} args
     */
    registerIchjknr(params: Object, cb: (err, response, isSuccess: boolean) => void): void;
    /**
     * 一時管理テーブル（情報）取得
     *
     * @param {string} kssihhTyp    決済方法区分
     * @param {string} accessIdOrkssiknrNo 決済管理番号or取引ID。クレジットカード決済の場合のみ、取引ID
     */
    selectIchjknr(kssihhTyp: any, accessIdOrkssiknrNo: any, cb: (err, response, selectIchjknrInfoResults: Array<SelectIchjknrInfoResult>) => void): void;
    /**
     * 一時管理テーブル（情報）削除
     *
     * @param {Array<string>} accessIds
     */
    deleteIchjknr(accessIds: Array<string>, cb: (err, response, isSuccess: boolean) => void): void;
    /**
     * 手数料・消費税情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    getTsuryShhziInfo(knshknknrNo: any, cb: (err, response, getTsuryShhziInfoResults: Array<GetTsuryShhziInfoResult>) => void): void;
    /**
     * 支払先情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    getShhriInfoByKey(knshknknrNo: any, cb: (err, respones, getShhriInfoByKeyResult: GetShhriInfoByKeyResult) => void): void;
    /**
     * 代行会社決済取消呼出
     *
     * @param {GMOCancelIn} args
     */
    gMOCancel(params: Object, cb: (err, response, isSuccess: boolean) => void): void;
    /**
     * アンケート設問検索
     *
     * @param {GetQuestionnaireListIn} args
     */
    getQuestionnaireList(params: Object, cb: (err, response, getQuestionnaireListResult: GetQuestionnaireListResult) => void): void;
    /**
     * アンケート設問登録
     *
     * @param {RegisterQuestionnaireIn} args
     */
    registerQuestionnaire(params: Object, cb: (err, response, isSuccess: boolean) => void): void;
    /**
     * 購入管理番号メール転送
     *
     * @param {Object} params
     */
    forwardPurchaseInfoMail(params: Object, cb: (err, response, isSuccess: boolean) => void): void;
}
