import CommonUtil from '../../../common/util/Util';
import TicketInfoTypeResult from './TicketInfoTypeResult';

export default class TicketInfoResult {
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
    public knshkmmisiInfo: Array<TicketInfoTypeResult> = [];
    /**
     * 券種情報(itemArray)
     */
    public knshInfo: Array<TicketInfoTypeResult> = [];

    public static parse (resultObject): TicketInfoResult {
        let result = new TicketInfoResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'knshkmmisiInfo') {
                let types = [];
                if (Array.isArray(property.KnshkmmisiInfo)) {
                    for (let info of property.KnshkmmisiInfo) {
                        types.push(TicketInfoTypeResult.parse(info));
                    }
                } else {
                    types.push(TicketInfoTypeResult.parse(property.KnshkmmisiInfo));
                }

                result[normalizedName] = types;
            } else if (normalizedName === 'knshInfo') {
                let types: Array<TicketInfoTypeResult> = [];

                if (property !== null && property.hasOwnProperty('KnshInfo')) {
                    if (Array.isArray(property.KnshInfo)) {
                        for (let info of property.KnshInfo) {
                            types.push(TicketInfoTypeResult.parse(info));
                        }
                    } else {
                        types.push(TicketInfoTypeResult.parse(property.KnshInfo));
                    }
                }

                result[normalizedName] = types;
            } else {
                result[normalizedName] = property;
            }
        }

        return result;
    };

    /**
     * 販売状態かどうかを取得する
     *
     * @return {boolean}
     */
    public isOnSale(): boolean {
        //開始時間まで取得
        let startTimeStr: string;
        if (this.knshknhmbikishHms) {
            startTimeStr = `${this.knshknhmbikishHms.substring(0, 2)}:${this.knshknhmbikishHms.substring(2, 4)}:00`;
        } else {
            startTimeStr = '00:00:00';
        }
        let startStr = `${this.knshknhmbikishYmd.substring(0, 4)}/${this.knshknhmbikishYmd.substring(4, 6)}/${this.knshknhmbikishYmd.substring(6)} ${startTimeStr}`;
        let startTimestamp = Date.parse(startStr);

        // 終日なので23時59分59秒
        let endStr = `${this.knshknhmbishryYmd.substring(0, 4)}/${this.knshknhmbishryYmd.substring(4, 6)}/${this.knshknhmbishryYmd.substring(6)} 23:59:59`;
        let endTimestamp = Date.parse(endStr);

        let nowTimestamp = Date.now();

        return (startTimestamp <= nowTimestamp && nowTimestamp <= endTimestamp);
    }
}
