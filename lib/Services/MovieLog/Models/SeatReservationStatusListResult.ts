import CommonUtil from '../../../common/util/Util';

interface KnshbtskiinknyyykInfo {
    /**
     * 券種区分名称
     */
    knshkbnNm: string;
    /**
     * 鑑賞券枚数
     */
    knshkmmiNum : string;
}

export default class SeatReservationStatusListResult {
    
    /**
     * 座席予約番号
     */
    public zskyykNo: string;
    /**
     * 興行ユーザー座席予約番号
     */
    public kgyusrzskyykNo: string;
    /**
     * 鑑賞予定年月日
     */
    public knshyttYmd: string;
    /**
     * 鑑賞予定時刻
     */
    public knshytiHms: string;
    /**
     * 鑑賞予定サイトコード
     */
    public knshytistCd: string;
    /**
     * サイト名称
     */
    public stNm: string;
    /**
     * 券種別会員購入鑑賞情報(itemArray)	
     */
    public knshbtskiinknyyykInfo: Array<KnshbtskiinknyyykInfo>;

    public static parse (resultObject): SeatReservationStatusListResult {
        let result = new SeatReservationStatusListResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'knshbtskiinknyyykInfo') {
                let infos: Array<KnshbtskiinknyyykInfo> = [];
                if (property !== null && property.hasOwnProperty('KnshbtskiinknyyykInfo')) {
                    if (Array.isArray(property.knshbtskiinknygftInfo)) {
                        for (let info of property.KnshbtskiinknyyykInfo) {
                            infos.push(info);
                        }
                    } else {
                        infos.push(property.KnshbtskiinknyyykInfo);
                    }
                }

                result[normalizedName] = infos;
            } else {
                result[normalizedName] = property;
            }
        }

        return result;
    };

}
