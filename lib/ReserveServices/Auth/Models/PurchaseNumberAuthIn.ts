import BaseIn from '../../../Common/models/BaseIn';

/**
 * 購入管理番号情報
 */
export interface KnyknrNoInfoIn {
    /**
     * 購入管理番号（ムビチケ購入番号）
     */
    KNYKNR_NO: string;
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
 * @extends {BaseIn}
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
        let messege = `
        <tns:PurchaseNumberAuth>
            <tns:kgygishCd>${this.kgygishCd}</tns:kgygishCd>
            <tns:jhshbtsCd>${this.jhshbtsCd}</tns:jhshbtsCd>
            <tns:knyknrNoInfoIn>
                `;
        if (this.knyknrNoInfoIn.length > 0) {
            for (const info of this.knyknrNoInfoIn) {
                messege += `<q1:KnyknrNoInfoIn>
                    <q1:KNYKNR_NO>${info.KNYKNR_NO}</q1:KNYKNR_NO>
                    <q1:PIN_CD>${info.PIN_CD}</q1:PIN_CD>
                </q1:KnyknrNoInfoIn>
            `;
            }
        }
        messege += `</tns:knyknrNoInfoIn>
            <tns:skhnCd>${this.skhnCd}</tns:skhnCd>
            <tns:stCd>${this.stCd}</tns:stCd>
            <tns:jeiYmd>${this.jeiYmd}</tns:jeiYmd>
        </tns:PurchaseNumberAuth>`;
        return messege;
    }
}
