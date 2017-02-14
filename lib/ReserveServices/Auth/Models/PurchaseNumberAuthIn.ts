import BaseIn from '../../../Common/models/BaseIn';

/**
 * 購入管理番号情報
 */
export interface KnyknrNoInfoIn {
    /**
     * 購入管理番号（ムビチケ購入番号）
     */
    KnyKNR_NO: string;
    /**
     * PINコード（ムビチケ暗証番号）
     */
    PIN_CD: string;
}

/**
 * 購入管理番号認証In
 */
export interface IPurchaseNumberAuthIn {
    /**
     * 興行会社コード
     */
    kgygishCd: string;
    /**
     * 情報種別コード
     */
    jhshbtsCd: string;
    /**
     * 購入管理番号情報
     */
    knyknrNoInfoIn: KnyknrNoInfoIn[];
    /**
     * 作品コード
     */
    skhnCd: string;
    /**
     * サイトコード
     */
    stCd: string;
    /**
     * 上映年月日(YYYY/MM/DD)
     */
    jeiYmd: string;
}

/**
 * 購入管理番号認証Inクラス
 * @class
 */
export class PurchaseNumberAuthIn extends BaseIn {
    /**
     * 興行会社コード
     */
    public kgygishCd: string;
    /**
     * 情報種別コード
     */
    public jhshbtsCd: string;
    /**
     * 購入管理番号情報
     */
    public knyknrNoInfoIn: KnyknrNoInfoIn[];
    /**
     * 作品コード
     */
    public skhnCd: string;
    /**
     * サイトコード
     */
    public stCd: string;
    /**
     * 上映年月日(YYYY/MM/DD)
     */
    public jeiYmd: string;

    public toXml(): string {
        let messege = `<tns:PurchaseNumberAuth>
            <tns:kgygishCd>${this.kgygishCd}</tns:kgygishCd>
            <tns:jhshbtsCd>${this.jhshbtsCd}</tns:jhshbtsCd>
            <q1:knyknrNoInfoIn>`;
        if (this.knyknrNoInfoIn.length > 0) {
            for (const info of this.knyknrNoInfoIn) {
                messege += `<q1: KnyknrNoInfoIn>
                    <tns:KnyKNR_NO>${info.KnyKNR_NO}</tns:KnyKNR_NO>
                    <tns:PIN_CD>${info.PIN_CD}</tns:PIN_CD>
                </q1: KnyknrNoInfoIn>`;
            }
        }
        messege += `</q1:knyknrNoInfoIn>
            <tns:skhnCd>${this.skhnCd}</tns:skhnCd>
            <tns:stCd>${this.stCd}</tns:stCd>
            <tns:jeiYmd>${this.jeiYmd}</tns:jeiYmd>
        <tns:PurchaseNumberAuth>`;
        return messege;
    }
}
