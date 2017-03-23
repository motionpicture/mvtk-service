import Service from '../../Common/Service';
import TicketInfoResult from '../Film/Models/TicketInfoResult';
import CreditCardInfoResult from './Models/CreditCardInfoResult';
import { IForwardPurchaseInfoMailIn } from './Models/ForwardPurchaseInfoMailIn';
import { IGetGmoExecTranIn } from './Models/GetGmoExecTranIn';
import GetGmoExecTranResult from './Models/GetGmoExecTranResult';
import { IGetQuestionnaireListIn } from './Models/GetQuestionnaireListIn';
import GetQuestionnaireListResult from './Models/GetQuestionnaireListResult';
import GetShhriInfoByKeyResult from './Models/GetShhriInfoByKeyResult';
import GetTsuryShhziInfoResult from './Models/GetTsuryShhziInfoResult';
import { IGMOCancelIn } from './Models/GMOCancelIn';
import { IRegisterIchjknrInfoIn } from './Models/RegisterIchjknrInfoIn';
import { IRegisterQuestionnaireIn } from './Models/RegisterQuestionnaireIn';
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
    isPurchaseDatetime(skhnCd: string, cb: (err: any, responnes: any, isOnSalse: boolean) => void): void;
    /**
     * 代行会社カード参照呼出
     *
     * @param {string} kiinCd
     */
    getGmoSearchCard(kiinCd: string, cb: (err: any, responnes: any, creditCardInfoResult: CreditCardInfoResult | null) => void): void;
    /**
     * 券種情報検索
     *
     * @param {string} skhnCd
     * @param {string} dvcTyp
     */
    getTicketTypeList(skhnCd: string, dvcTyp: string, cb: (err: any, responnes: any, result: TicketInfoResult | null) => void): void;
    /**
     * 決済管理番号採番
     *
     * 決済エラーの処理はしない。
     * 決済エラー関係のフィールドはあるが、値は返却されない。
     *
     * @return string 決済管理番号
     */
    saibanKssiknrNo(cb: (err: any, responnes: any, kssiknrNo: string | null) => void): void;
    /**
     * 代行会社決済実行呼出
     *
     * @param {IGetGmoExecTranIn}  params
     */
    getGmoExecTran(params: IGetGmoExecTranIn, cb: (err: any, responnes: any, getGmoExecTranResult: GetGmoExecTranResult | null) => any): void;
    /**
     * 代行会社カード登録更新呼出
     *
     * @param {string} kssiknrNo       決済管理番号
     * @param {string} kiinCd          会員コード
     * @param {string} mignn  クレジットカード名義人
     */
    getGmoSaveCard(kssiknrNo: string, kiinCd: string, mignn: string, cb: (err: any, responnes: any, isSuccess: boolean) => void): void;
    /**
     * 一時管理テーブル（情報）登録
     *
     * @param {IRegisterIchjknrInfoIn} args
     */
    registerIchjknr(params: IRegisterIchjknrInfoIn, cb: (err: any, responnes: any, isSuccess: boolean) => void): void;
    /**
     * 一時管理テーブル（情報）取得
     *
     * @param {string} kssihhTyp    決済方法区分
     * @param {string} accessIdOrkssiknrNo 決済管理番号or取引ID。クレジットカード決済の場合のみ、取引ID
     */
    selectIchjknr(kssihhTyp: string, accessIdOrkssiknrNo: string, cb: (err: any, responnes: any, selectIchjknrInfoResults: SelectIchjknrInfoResult[]) => void): void;
    /**
     * 一時管理テーブル（情報）削除
     *
     * @param {string[]} accessIds
     */
    deleteIchjknr(accessIds: string[], cb: (err: any, responnes: any, isSuccess: boolean) => void): void;
    /**
     * 手数料・消費税情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    getTsuryShhziInfo(knshknknrNo: string, cb: (err: any, responnes: any, getTsuryShhziInfoResults: GetTsuryShhziInfoResult[] | null) => void): void;
    /**
     * 支払先情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    getShhriInfoByKey(knshknknrNo: string, cb: (err: any, respones: any, getShhriInfoByKeyResult: GetShhriInfoByKeyResult | null) => void): void;
    /**
     * 代行会社決済取消呼出
     *
     * @param {IGMOCancelIn} args
     */
    gMOCancel(params: IGMOCancelIn, cb: (err: any, responnes: any, isSuccess: boolean | null) => void): void;
    /**
     * アンケート設問検索
     *
     * @param {IGetQuestionnaireListIn} args
     */
    getQuestionnaireList(params: IGetQuestionnaireListIn, cb: (err: any, responnes: any, getQuestionnaireListResult: GetQuestionnaireListResult) => void): void;
    /**
     * アンケート設問登録
     *
     * @param {IRegisterQuestionnaireIn} args
     */
    registerQuestionnaire(params: IRegisterQuestionnaireIn, cb: (err: any, responnes: any, isSuccess: boolean) => void): void;
    /**
     * 購入管理番号メール転送
     *
     * @param {IForwardPurchaseInfoMailIn} params
     */
    forwardPurchaseInfoMail(params: IForwardPurchaseInfoMailIn, cb: (err: any, responnes: any, isSuccess: boolean) => void): void;
}
