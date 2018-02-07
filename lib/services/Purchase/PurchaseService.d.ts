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
    isPurchaseDatetime(skhnCd: string): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 代行会社カード参照呼出
     *
     * @param {string} kiinCd
     */
    getGmoSearchCard(kiinCd: string): Promise<{
        response: any;
        result: CreditCardInfoResult;
    }>;
    /**
     * 券種情報検索
     *
     * @param {string} skhnCd
     * @param {string} dvcTyp
     */
    getTicketTypeList(skhnCd: any, dvcTyp: any): Promise<{
        response: any;
        result: TicketInfoResult;
    }>;
    /**
     * 決済管理番号採番
     *
     * 決済エラーの処理はしない。
     * 決済エラー関係のフィールドはあるが、値は返却されない。
     *
     * @return string 決済管理番号
     */
    saibanKssiknrNo(): Promise<{
        response: any;
        result: string;
    }>;
    /**
     * 代行会社決済実行呼出
     *
     * @param {string} kssiknrNo   決済管理番号
     * @param {string} kssihhTyp  決済方法区分
     * @param {string} accessId        取引ID
     * @param {string} accessPwd  取引パスワード
     * @param Array<string>  params
     */
    getGmoExecTran(params: Object): Promise<{
        response: any;
        result: GetGmoExecTranResult;
    }>;
    /**
     * 代行会社カード登録更新呼出
     *
     * @param {string} kssiknrNo       決済管理番号
     * @param {string} kiinCd          会員コード
     * @param {string} mignn  クレジットカード名義人
     */
    getGmoSaveCard(kssiknrNo: any, kiinCd: any, mignn: any): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 一時管理テーブル（情報）登録
     *
     * @param {RegisterIchjknrInfoIn} args
     */
    registerIchjknr(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 一時管理テーブル（情報）取得
     *
     * @param {string} kssihhTyp    決済方法区分
     * @param {string} accessIdOrkssiknrNo 決済管理番号or取引ID。クレジットカード決済の場合のみ、取引ID
     */
    selectIchjknr(kssihhTyp: any, accessIdOrkssiknrNo: any): Promise<{
        response: any;
        result: SelectIchjknrInfoResult[];
    }>;
    /**
     * 一時管理テーブル（情報）削除
     *
     * @param {Array<string>} accessIds
     */
    deleteIchjknr(accessIds: string[]): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 手数料・消費税情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    getTsuryShhziInfo(knshknknrNo: any): Promise<{
        response: any;
        result: GetTsuryShhziInfoResult[];
    }>;
    /**
     * 支払先情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    getShhriInfoByKey(knshknknrNo: any): Promise<{
        response: any;
        result: GetShhriInfoByKeyResult;
    }>;
    /**
     * 代行会社決済取消呼出
     *
     * @param {GMOCancelIn} args
     */
    gMOCancel(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * アンケート設問検索
     *
     * @param {GetQuestionnaireListIn} args
     */
    getQuestionnaireList(params: Object): Promise<{
        response: any;
        result: GetQuestionnaireListResult;
    }>;
    /**
     * アンケート設問登録
     *
     * @param {RegisterQuestionnaireIn} args
     */
    registerQuestionnaire(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 購入管理番号メール転送
     *
     * @param {Object} params
     */
    forwardPurchaseInfoMail(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
}
