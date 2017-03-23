import BaseIn from '../../../Common/models/BaseIn';
/**
 * 代行会社決済実行呼出inクラス
 * @class
 * @extends {BaseIn}
 */
export declare class GetGmoExecTranIn extends BaseIn {
    kssiknrNo: string;
    kssihhTyp: string;
    accessId: string;
    accessPwd: string;
    crdtcrdinputKbn: string;
    httpAccept: string;
    httpUserAgent: string;
    dvcTyp: string;
    crdtcrdNo: string;
    crdykkgn: string;
    scrtyCd: string;
    kiinCd: string;
    cardseq: string;
    knyshNm: string;
    shhnTyp: string;
    toXml(): string;
}
/**
 * 代行会社決済実行呼出in
 * @interface
 */
export interface IGetGmoExecTranIn {
    /**
     * 決済管理番号
     */
    kssiknrNo: string;
    /**
     * 決済方法区分
     */
    kssihhTyp: string;
    /**
     * 取引ID
     */
    accessId: string;
    /**
     * 取引パスワード
     */
    accessPwd: string;
    /**
     * カード情報入力区分
     */
    crdtcrdinputKbn: string;
    /**
     * HTTP_ACCEPT
     */
    httpAccept: string;
    /**
     * HTTP_USER_AGENT
     */
    httpUserAgent: string;
    /**
     * デバイス区分
     */
    dvcTyp: string;
    /**
     * クレジットカード番号
     */
    crdtcrdNo: string;
    /**
     * カード有効期限
     */
    crdykkgn: string;
    /**
     * セキュリティーコード
     */
    scrtyCd: string;
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * カード登録連番
     */
    cardseq: string;
    /**
     * 購入者名
     */
    knyshNm: string;
    /**
     * ???
     */
    shhnTyp: string;
}
