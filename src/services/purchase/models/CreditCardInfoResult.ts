
import { Util } from '../../../common/util/Util';

/**
 * CreditCardInfoResult
 */
export class CreditCardInfoResult {
    public cardseq: string; // カード登録連番
    public crdtcrdNo: string; // クレジットカード番号
    public crdykkgn: string; // カード有効期限
    public mignn: string; // 名義人
    public scrtyCd: string; // セキュリティコード

    public static parse(resultObject: any): CreditCardInfoResult {
        const result = new CreditCardInfoResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        }

        return result;
    }

    /**
     * カード番号の一部を取得
     * @desc APIから取得した値は末尾3文字以外が伏せられているので、それに合わせて末尾3文字を返す。
     */
    public getNoSub(): string {
        return this.crdtcrdNo.substr(this.crdtcrdNo.length - 3);
    }

    /**
     * 有効期限（年）を取得
     */
    public getYukoKigenYear(): string {
        return this.crdykkgn.substr(0, 2);
    }

    /**
     * 有効期限（月）を取得
     */
    public getYukoKigenMonth(): string {
        return this.crdykkgn.substr(2);
    }
}
