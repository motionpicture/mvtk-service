import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 代行会社カード参照呼出out
 * @class
 */
export default class CreditCardInfoResult {
    public cardseq: string; // カード登録連番
    public crdtcrdNo: string; // クレジットカード番号
    public crdykkgn: string; // カード有効期限
    public mignn: string; // 名義人
    public scrtyCd: string; // セキュリティコード

    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): CreditCardInfoResult {
        const result = new CreditCardInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }

    /**
     * カード番号の一部を取得
     *
     * APIから取得した値は末尾3文字以外が伏せられているので、
     * それに合わせて末尾3文字を返す。
     *
     * @return {string}
     */
    public getNoSub(): string {
        return this.crdtcrdNo.substr(this.crdtcrdNo.length - 3);
    }

    /**
     * 有効期限（年）を取得
     *
     * @return {string} YY形式
     */
    public getYukoKigenYear(): string {
        return this.crdykkgn.substr(0, 2);
    }

    /**
     * 有効期限（月）を取得
     *
     * @return {string} MM形式
     */
    public getYukoKigenMonth(): string {
        return this.crdykkgn.substr(2);
    }
}
