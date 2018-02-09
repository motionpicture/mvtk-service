import { Service } from '../../common/Service';
import { TicketInfoResult } from '../film/models/TicketInfoResult';
import { CreditCardInfoResult } from './models/CreditCardInfoResult';
import { GetGmoExecTranResult } from './models/GetGmoExecTranResult';
import { GetQuestionnaireListResult } from './models/GetQuestionnaireListResult';
import { GetShhriInfoByKeyResult } from './models/GetShhriInfoByKeyResult';
import { GetTsuryShhziInfoResult } from './models/GetTsuryShhziInfoResult';
import { SelectIchjknrInfoResult } from './models/SelectIchjknrInfoResult';
/**
 * PurchaseService
 */
export declare class PurchaseService extends Service {
    /**
     * 購入日時チェック
     *
     * @param skhnCd 作品コード
     */
    isPurchaseDatetime(skhnCd: string): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 代行会社カード参照呼出
     */
    getGmoSearchCard(kiinCd: string): Promise<{
        response: any;
        result: CreditCardInfoResult;
    }>;
    /**
     * 券種情報検索
     */
    getTicketTypeList(skhnCd: string, dvcTyp: string): Promise<{
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
     * @param kssiknrNo   決済管理番号
     * @param kssihhTyp  決済方法区分
     * @param accessId        取引ID
     * @param accessPwd  取引パスワード
     * @param Array<string>  params
     */
    getGmoExecTran(params: Object): Promise<{
        response: any;
        result: GetGmoExecTranResult;
    }>;
    /**
     * 代行会社カード登録更新呼出
     *
     * @param kssiknrNo       決済管理番号
     * @param kiinCd          会員コード
     * @param mignn  クレジットカード名義人
     */
    getGmoSaveCard(kssiknrNo: string, kiinCd: string, mignn: string): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 一時管理テーブル（情報）登録
     */
    registerIchjknr(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 一時管理テーブル（情報）取得
     */
    selectIchjknr(kssihhTyp: string, accessIdOrkssiknrNo: string): Promise<{
        response: any;
        result: SelectIchjknrInfoResult[];
    }>;
    /**
     * 一時管理テーブル（情報）削除
     */
    deleteIchjknr(accessIds: string[]): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 手数料・消費税情報取得
     *
     * @param knshknknrNo 鑑賞券管理番号
     */
    getTsuryShhziInfo(knshknknrNo: string): Promise<{
        response: any;
        result: GetTsuryShhziInfoResult[];
    }>;
    /**
     * 支払先情報取得
     *
     * @param knshknknrNo 鑑賞券管理番号
     */
    getShhriInfoByKey(knshknknrNo: string): Promise<{
        response: any;
        result: GetShhriInfoByKeyResult;
    }>;
    /**
     * 代行会社決済取消呼出
     */
    gMOCancel(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * アンケート設問検索
     */
    getQuestionnaireList(params: Object): Promise<{
        response: any;
        result: GetQuestionnaireListResult;
    }>;
    /**
     * アンケート設問登録
     */
    registerQuestionnaire(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 購入管理番号メール転送
     */
    forwardPurchaseInfoMail(params: Object): Promise<{
        response: any;
        result: boolean;
    }>;
}
