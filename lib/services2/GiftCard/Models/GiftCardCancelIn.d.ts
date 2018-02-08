import BaseIn from '../../../common/models/BaseIn';
export default class GiftCardCancelIn extends BaseIn {
    /**
     * ギフトカードID情報
     */
    MVTKGFTCRD_INFO_IN: {
        MvtkGftcrdCancelInfo: Array<{
            MVTKGFTCRD_ID: string;
            MVTKGFTCRDPIN_CD: string;
            GFTCRDKSSIKNR_NO: string;
            RYUKNGK: string;
            SYRYKY_DT: string;
        }>;
    };
    /**
     * 取消区分
     * 決済取消を行う区分
     * 0：ロック解除 1：取消 2：障害取消
     */
    TRKSH_TYP: string;
    /**
     * ギフトカード決済取消を行うデバイスの区分
     * 1：PC 09：SmartPhone
     */
    DVC_TYP: string;
    /**
     * 取消しする作品のコード
     */
    SKHN_CD: string;
    /**
     * 取消しする決済の管理番号
     */
    KSSIKNR_NO: string;
    toXml(): string;
}
