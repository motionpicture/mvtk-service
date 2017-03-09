import BaseIn from '../../../Common/models/BaseIn';
/**
 * アンケート設問登録inクラス
 * @class
 * @extends {BaseIn}
 */
export declare class RegisterQuestionnaireIn extends BaseIn {
    /**
     * 作品コード
     */
    skhnCd: string;
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * アンケート回答情報(Item Array)
     */
    qustinnarkitInfo: ArrayOfQustinnarkitInfo;
    /**
     * 購入者コード
     */
    knyshCd: string;
    /**
     * 期待コメント本文
     */
    kticmmntTxt: string;
    toXml(): string;
}
/**
 * アンケート回答情報リスト
 * @interface
 */
export interface ArrayOfQustinnarkitInfo {
    QustinnarkitInfo: QustinnarkitInfo[];
}
/**
 * アンケート回答情報
 * @interface
 */
export interface QustinnarkitInfo {
    /**
     * 回答方式区分
     */
    KITHSHK_TYP: string;
    /**
     * 記述回答本文
     */
    KJTSKIT_TXT: string;
    /**
     * アンケート設問番号
     */
    QUSTINNARSTSMN_NO: string;
    /**
     * 選択式アンケート回答情報(itemArray)
     */
    SNTKSHKQUSTINNARKIT_INFO: ArrayOfSntkshkqustinnarkitInfo;
}
/**
 * 選択式アンケート回答情報リスト
 * @interface
 */
export interface ArrayOfSntkshkqustinnarkitInfo {
    SntkshkqustinnarkitInfo: SntkshkqustinnarkitInfo[];
}
/**
 * 選択式アンケート回答情報
 * @interface
 */
export interface SntkshkqustinnarkitInfo {
    /**
     * 選択肢番号
     */
    SNTKSH_NO: string;
}
/**
 * アンケート設問登録in
 * @interface
 */
export interface IRegisterQuestionnaireIn {
    /**
     * 作品コード
     */
    skhnCd: string;
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * アンケート回答情報(Item Array)
     */
    qustinnarkitInfo: ArrayOfQustinnarkitInfo;
    /**
     * 購入者コード
     */
    knyshCd: string;
    /**
     * 期待コメント本文
     */
    kticmmntTxt: string;
}