import * as CommonUtil from '../../../Common/Util/Util';
import * as FilmUtilities from '../FilmUtilities';
import FilmCastResult from './FilmCastResult';
import FilmGenreResult from './FilmGenreResult';
import FilmPhotoGalleryResult from './FilmPhotoGalleryResult';
import FilmStaffResult from './FilmStaffResult';
import TicketInfoResult from './TicketInfoResult';

/**
 * 作品
 * @class
 */
export default class FilmResult {
    /**
     * 作品コード
     */
    public skhnCd: string;
    /**
     * デバイス区分
     */
    public dvcTyp: string;
    /**
     * 作品名称
     */
    public skhnNm: string;
    /**
     * 全国公開開始年月日(YYYY/MM/DD)
     */
    public znkkkkikishYmd: string;
    /**
     * 全国公開時期記述
     */
    public znkkkkijkDspt: string;
    /**
     * ポスター画像URL
     */
    public pstrgzUrl: string;
    /**
     * 作品コメント本文(解説)
     */
    public skhncmmntKistsTxt: string;
    /**
     * 作品コメント本文(物語)
     */
    public skhncmmntMngtrTxt: string;
    /**
     * 作品コメント本文(注釈-共通)
     */
    public skhncmmntChshkKytsu: string;
    /**
     * 作品コメント本文(注釈-作品詳細)
     */
    public skhncmmntChshkShsi: string;
    /**
     * 作品コメント本文(セールスコピー1)
     */
    public skhncmmntSlscpy1Txt: string;
    /**
     * 作品コメント本文(セールスコピー2)
     */
    public skhncmmntSlscpy2Txt: string;
    /**
     * 作品コメント本文(セールスコピー3)
     */
    public skhncmmntSlscpy3Txt: string;
    /**
     * キャスト情報（itemArray）
     */
    public cstInfo: FilmCastResult[];
    /**
     * スタッフ情報（itemArray）
     */
    public stffInfo: FilmStaffResult[];
    /**
     * フォトギャラリー情報（itemArray）
     */
    public phtgllryInfo: FilmPhotoGalleryResult[];
    /**
     * 作品名オリジナル名称
     */
    public skhmmiorgnlNm: string;
    /**
     * 制作年
     */
    public siskY: string;
    /**
     * 製作国名称
     */
    public siskkkNm: string;
    /**
     * 配給会社名称
     */
    public hikygishNm: string;
    /**
     * 上映時間分
     */
    public jeiTmm: string;
    /**
     * 映倫レイティングコード
     */
    public eirnrtngCd: string;
    /**
     * 公式サイトURL
     */
    public kshkstUrl: string;
    /**
     * 作品著作権記述
     */
    public skhnchskknDspt: string;
    /**
     * ジャンル情報（itemArray）
     */
    public gnrInfo: FilmGenreResult[];
    /**
     *  観たい登録者数
     */
    public mtitrksyNum: string; //
    /**
     * 観たい登録済フラグ
     */
    public mtitrkzmFlg: string;
    /**
     * 鑑賞券販売フラグ
     */
    public knshknhmbiFlg: string;
    /**
     * 鑑賞券販売開始日時
     */
    public knshknhmbikishYmd: string;
    /**
     * 鑑賞券販売終了年月日
     */
    public knshknhmbishryYmd: string;
    /**
     * ECサイト販売承認済みフラグ
     */
    public ecsthmbishnnzmFlg: string;
    /**
     * 座席予約終了フラグ
     */
    public zskyykshryFlg: string;

    // 以下は、作品検索APIのOUTにのみ含まれる(詳細APIには含まれない)
    /**
     * 予告編URL
     */
    public ykkhnUrl: string;
    /**
     * 予告編番号
     */
    public ykkhnNo: string;
    /**
     * 購入特典フラグ
     */
    public knytktnFlg: string;
    /**
     * 観たいフラグ
     */
    public mtiFlg: string;
    /**
     * 予告編有りフラグ
     */
    public ykkhnarFlg: string;
    /**
     * 売れ筋ランキング
     */
    public urszrnkngNo: string;
    /**
     * 期待度ランキング
     */
    public ktidrnkngNo: string;
    /**
     * 注目度ランキング
     */
    public chmkdrnkngNo: string;
    /**
     * 作品アクセスランキング順位
     */
    public skhnaccssrnkngNo: string;
    /**
     * 予告編アクセスランキング順位
     */
    public ykkhnaccssrnkngNo: string;
    /**
     * 話題・感想数
     */
    public wdiknsNum: string;
    /**
     * 話題性ランキング順位
     */
    public wdisirnkngNo: string;
    /**
     * 興行ランキング順位
     */
    public kgyrnkngNo: string;
    /**
     * 鑑賞券情報(itemArray)
     */
    public knshknInfo: TicketInfoResult[];

    public static PARSE(resultObject: any): FilmResult {
        const filmResult = new FilmResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'knshknInfo') {
                const ticketInfos: TicketInfoResult[] = [];

                if (property !== null && property.hasOwnProperty('KnshknInfo')) {
                    if (Array.isArray(property.KnshknInfo)) {
                        for (const info of property.KnshknInfo) {
                            ticketInfos.push(TicketInfoResult.PARSE(info));
                        }
                    } else {
                        ticketInfos.push(TicketInfoResult.PARSE(property.KnshknInfo));
                    }
                }

                filmResult[normalizedName] = ticketInfos;
            } else if (normalizedName === 'cstInfo') {
                const casts: FilmCastResult[] = [];

                if (property !== null && property.hasOwnProperty('CstInfo')) {
                    if (Array.isArray(property.CstInfo)) {
                        for (const info of property.CstInfo) {
                            casts.push(FilmCastResult.PARSE(info));
                        }
                    } else {
                        casts.push(FilmCastResult.PARSE(property.CstInfo));
                    }
                }

                filmResult[normalizedName] = casts;
            } else if (normalizedName === 'gnrInfo') {
                const genres: FilmGenreResult[] = [];

                if (property !== null && property.hasOwnProperty('GnrInfo')) {
                    if (Array.isArray(property.GnrInfo)) {
                        for (const info of property.GnrInfo) {
                            genres.push(FilmGenreResult.PARSE(info));
                        }
                    } else {
                        genres.push(FilmGenreResult.PARSE(property.GnrInfo));
                    }
                }

                filmResult[normalizedName] = genres;
            } else if (normalizedName === 'phtgllryInfo') {
                const galleries: FilmPhotoGalleryResult[] = [];

                if (property !== null && property.hasOwnProperty('PhtgllryInfo')) {
                    if (Array.isArray(property.PhtgllryInfo)) {
                        for (const info of property.PhtgllryInfo) {
                            galleries.push(FilmPhotoGalleryResult.PARSE(info));
                        }
                    } else {
                        galleries.push(FilmPhotoGalleryResult.PARSE(property.PhtgllryInfo));
                    }
                }

                filmResult[normalizedName] = galleries;
            } else if (normalizedName === 'stffInfo') {
                const staffs: FilmStaffResult[] = [];

                if (property !== null && property.hasOwnProperty('StffInfo')) {
                    if (Array.isArray(property.StffInfo)) {
                        for (const info of property.StffInfo) {
                            staffs.push(FilmStaffResult.PARSE(info));
                        }
                    } else {
                        staffs.push(FilmStaffResult.PARSE(property.StffInfo));
                    }
                }

                filmResult[normalizedName] = staffs;
            } else {
                (<any>filmResult)[normalizedName] = property;
            }
        });

        return filmResult;
    };

    /**
     * 公開状態かどうかを取得する
     *
     * @return {boolean}
     */
    public isShowing(): boolean {
        if (!this.znkkkkikishYmd) {
            return false;
        }

        // YYYY/MM/DD HH:ii:ss形式にする
        const startDate = new Date(this.znkkkkikishYmd + ' 00:00:00');
        const startTimestamp = startDate.getTime();

        const nowDate = new Date();
        const nowTimestamp = nowDate.getTime();

        return nowTimestamp >= startTimestamp;
    }

    /**
     * 媒体区分が電子券のチケットがあるかどうか
     *
     * @return {boolean}
     */
    public hasOnlinetTicket() {
        return (this.getOnlineTicket() !== null);
    }

    /**
     * チケットリストから、媒体区分が電子券のチケットを取得する
     *
     * @return {TicketInfoResult}
     */
    public getOnlineTicket(): TicketInfoResult | null {
        if (Array.isArray(this.knshknInfo)) {
            for (const ticketInfo of this.knshknInfo) {
                if (ticketInfo.tcktbitiTyp === FilmUtilities.TCKTBITI_TYP_ELECTRON_TICKET) {
                    return ticketInfo;
                }
            }
        }

        return null;
    }

    public getCastNames(leadingFilter: boolean = false): string {
        // 表示順でソート
        const compare = (a: FilmCastResult, b: FilmCastResult) => {
            const radix = 10;
            const aHyjjnNo = (a.cstHyjjnNo) ? parseInt(a.cstHyjjnNo, radix) : 0;
            const bHyjjnNo = (b.cstHyjjnNo) ? parseInt(b.cstHyjjnNo, radix) : 0;

            if (aHyjjnNo > bHyjjnNo) {
                return 1;
            } else if (aHyjjnNo < bHyjjnNo) {
                return -1;
            } else {
                return 0;
            }
        };

        this.cstInfo.sort(compare);

        //主役フィルター
        if (leadingFilter) {
            const cast: string[] = [];
            for (const info of this.cstInfo) {
                if (info.cstShenFlg === '1') {
                    cast.push(info.cstJmbtsNm);
                }
            }
            return cast.join('、');
        }

        return this.cstInfo.map((info) => {
            return info.cstJmbtsNm;
        }).join('、');
    }

    /**
     * 監督名リストを取得する
     */
    public getDirectors(): string[] {
        const directers: string[] = [];

        for (const staff of this.stffInfo) {
            if (staff.stffYkwrNm === '監督') {
                directers.push(staff.stffJmbtsNm);
            }
        }

        return directers;
    }

    /**
     * スタッフデータを生成
     */
    public getStaffs(): FilmStaffResult[] {
        // 表示順でソート
        const compare = (a: FilmStaffResult, b: FilmStaffResult) => {
            const radix = 10;
            const aHyjjnNo = (a.stffHyjjnNo) ? parseInt(a.stffHyjjnNo, radix) : 0;
            const bHyjjnNo = (b.stffHyjjnNo) ? parseInt(b.stffHyjjnNo, radix) : 0;

            if (aHyjjnNo > bHyjjnNo) {
                return 1;
            } else if (aHyjjnNo < bHyjjnNo) {
                return -1;
            } else {
                return 0;
            }
        };

        this.stffInfo.sort(compare);

        // $result = array();

        // foreach ($staffs as $staff) {
        // // 役割名をキーに
        //     $key = $staff->getYakuwariName();
        //     if (false === isset($result[$key])) {
        //     $result[$key] = array();
        //     }

        //     $result[$key][] = $staff->getName();
        // }

        return this.stffInfo;
    }
}
