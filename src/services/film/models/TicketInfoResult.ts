/**
 * TicketInfoResult
 */
import { Util } from '../../../common/util/Util';
import { TicketInfoTypeResult } from './TicketInfoTypeResult';
import * as moment from 'moment-timezone';

moment.tz.setDefault('Asia/Tokyo');

/**
 * 鑑賞券情報検索out
 */
export class TicketInfoResult {
    /**
     * 鑑賞券管理番号
     */
    public knshknknrNo: string;
    /**
     * チケット媒体区分
     */
    public tcktbitiTyp: string;
    /**
     * 鑑賞券オーナー区分
     */
    public knshknownrTyp: string;
    /**
     * 鑑賞券オーナーコード
     */
    public knshknownrCd: string;
    /**
     * 鑑賞券販売開始年月日(20160523)
     */
    public knshknhmbikishYmd: string;
    /**
     * 鑑賞券販売開始時刻 Hi形式(sがないので注意)(0000)
     */
    public knshknhmbikishHms: string;
    /**
     * 鑑賞券販売終了年月日(20160731)
     */
    public knshknhmbishryYmd: string;
    /**
     * チェーンマスタコード
     */
    public chanmstCd: string;
    /**
     * 預り金支払タイミング区分
     */
    public azkrknshhritmngTyp: string;
    /**
     * 預り金支払先区分
     */
    public azkrknshhriskTyp: string;
    /**
     * ３Ｄメガネ代金単価(100.000)
     */
    public thredmgndiknUnip: string;
    /**
     * 販売時３Ｄメガネ代金支払先区分
     */
    public hmbijthredmgndiknshhriskTyp: string;
    /**
     * 未着券精算年月日
     */
    public mchkknsisnYmd: string;
    /**
     * 興行ギフト券フラグ
     */
    public kgygftknFlg: string;
    /**
     * 興行ギフト券有効期間
     */
    public kgygftknykTm: string;
    /**
     * 購入上限枚数
     */
    public knyjgmmiNum: string;
    /**
     * ECサイト販売承認済フラグ
     */
    public ecsthmbishnnzmFlg: string;
    /**
     * ECサイト販売承認者コード
     */
    public ecsthmbishnnshCd: string;
    /**
     * ECサイト販売承認日時(2016-05-23 21:26:33)
     */
    public ecsthmbishnnDt: string;
    /**
     * 登録ステータス区分
     */
    public trksttsTyp: string;
    /**
     * 鑑賞券明細情報(itemArray)
     */
    public knshkmmisiInfo: TicketInfoTypeResult[] = [];
    /**
     * 券種情報(itemArray)
     */
    public knshInfo: TicketInfoTypeResult[] = [];
    /**
     * データ整形
     */
    public static parse(resultObject: any): TicketInfoResult {
        const result = new TicketInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'knshkmmisiInfo') {
                const types = [];
                if (Array.isArray(property.KnshkmmisiInfo)) {
                    for (const info of property.KnshkmmisiInfo) {
                        types.push(TicketInfoTypeResult.parse(info));
                    }
                } else {
                    types.push(TicketInfoTypeResult.parse(property.KnshkmmisiInfo));
                }

                result[normalizedName] = types;
            } else if (normalizedName === 'knshInfo') {
                const types: TicketInfoTypeResult[] = [];

                if (property !== null && property.hasOwnProperty('KnshInfo')) {
                    if (Array.isArray(property.KnshInfo)) {
                        for (const info of property.KnshInfo) {
                            types.push(TicketInfoTypeResult.parse(info));
                        }
                    } else {
                        types.push(TicketInfoTypeResult.parse(property.KnshInfo));
                    }
                }

                result[normalizedName] = types;
            } else {
                (<any>result)[normalizedName] = property;
            }
        });

        return result;
    }

    /**
     * 販売状態かどうかを取得する
     */
    public isOnSale(): boolean {
        //開始時間まで取得
        let startTimeStr: string;
        if (this.knshknhmbikishHms !== undefined) {
            startTimeStr = `${this.knshknhmbikishHms.substring(0, 2)}:${this.knshknhmbikishHms.substring(2, 4)}:00`;
        } else {
            startTimeStr = '00:00:00';
        }
        // tslint:disable-next-line:max-line-length
        const startStr = `${this.knshknhmbikishYmd.substring(0, 4)}/${this.knshknhmbikishYmd.substring(4, 6)}/${this.knshknhmbikishYmd.substring(6)} ${startTimeStr}`;
        const startTimestamp = Date.parse(startStr);

        // 終日なので23時59分59秒
        // tslint:disable-next-line:max-line-length
        const endStr = `${this.knshknhmbishryYmd.substring(0, 4)}/${this.knshknhmbishryYmd.substring(4, 6)}/${this.knshknhmbishryYmd.substring(6)} 23:59:59`;
        const endTimestamp = Date.parse(endStr);

        const nowTimestamp = moment.now();

        return (startTimestamp <= nowTimestamp && nowTimestamp <= endTimestamp);
    }
}
