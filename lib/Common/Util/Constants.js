/**
 * ムビチケサービス共通の定数
 * @namespace Common.Util.Constants
 */
"use strict";
/**
 * constants
 * @memberOf Common.Util.Constants
 * @const constants
 */
const constants = {
    /**
     * デバイス区分
     */
    DVC_TYP_PC: '01',
    DVC_TYP_MOBILE: '02',
    DVC_TYP_SP: '09',
    /**
     * レスポンスステータス
     */
    RESULT_INFO_STATUS_SUCCESS: 'N000',
    RESULT_INFO_STATUS_CRITICAL_ERROR: 'E001',
    RESULT_INFO_STATUS_CHECK_ERROR: 'L001',
    RESULT_INFO_STATUS_REPLICATION_ERROR: 'L002',
    RESULT_INFO_STATUS_CLIENT_ERROR: 'L003',
    RESULT_INFO_STATUS_OVERFLOW_ERROR: 'L004',
    /**
     * auステータス
     */
    AU_RESPONSE_STATUS_REQSUCCESS: 'REQSUCCESS',
    AU_RESPONSE_STATUS_AUTHPROCESS: 'AUTHPROCESS',
    AU_RESPONSE_STATUS_AUTH: 'AUTH',
    AU_RESPONSE_STATUS_CAPTURE: 'CAPTURE',
    AU_RESPONSE_STATUS_PAYFAIL: 'PAYFAIL',
    /**
     * au支払方法
     */
    AU_PAY_METHOD_TOTALING: '01',
    AU_PAY_METHOD_CREDIT_CARD: '02',
    AU_PAY_METHOD_WEB_MONEY: '03',
    /**
     * docomoステータス
     */
    DOCOMO_RESPONSE_STATUS_REQSUCCESS: 'REQSUCCESS',
    DOCOMO_RESPONSE_STATUS_AUTHPROCESS: 'AUTHPROCESS',
    DOCOMO_RESPONSE_STATUS_AUTH: 'AUTH',
    DOCOMO_RESPONSE_STATUS_CAPTURE: 'CAPTURE',
    DOCOMO_RESPONSE_STATUS_PAYFAIL: 'PAYFAIL',
    /**
     * docomo支払方法
     */
    DOCOMO_PAY_METHOD_TOTALING: '01',
    DOCOMO_PAY_METHOD_CREDIT_CARD: '02',
    DOCOMO_PAY_METHOD_WEB_MONEY: '03',
    /**
     * 都道府県リスト
     */
    TDFKN_INFO: [
        { CD: '01', NM: '北海道' },
        { CD: '02', NM: '青森県' },
        { CD: '03', NM: '岩手県' },
        { CD: '04', NM: '宮城県' },
        { CD: '05', NM: '秋田県' },
        { CD: '06', NM: '山形県' },
        { CD: '07', NM: '福島県' },
        { CD: '08', NM: '茨城県' },
        { CD: '09', NM: '栃木県' },
        { CD: '10', NM: '群馬県' },
        { CD: '11', NM: '埼玉県' },
        { CD: '12', NM: '千葉県' },
        { CD: '13', NM: '東京都' },
        { CD: '14', NM: '神奈川県' },
        { CD: '15', NM: '新潟県' },
        { CD: '16', NM: '富山県' },
        { CD: '17', NM: '石川県' },
        { CD: '18', NM: '福井県' },
        { CD: '19', NM: '山梨県' },
        { CD: '20', NM: '長野県' },
        { CD: '21', NM: '岐阜県' },
        { CD: '22', NM: '静岡県' },
        { CD: '23', NM: '愛知県' },
        { CD: '24', NM: '三重県' },
        { CD: '25', NM: '滋賀県' },
        { CD: '26', NM: '京都府' },
        { CD: '27', NM: '大阪府' },
        { CD: '28', NM: '兵庫県' },
        { CD: '29', NM: '奈良県' },
        { CD: '30', NM: '和歌山県' },
        { CD: '31', NM: '鳥取県' },
        { CD: '32', NM: '島根県' },
        { CD: '33', NM: '岡山県' },
        { CD: '34', NM: '広島県' },
        { CD: '35', NM: '山口県' },
        { CD: '36', NM: '徳島県' },
        { CD: '37', NM: '香川県' },
        { CD: '38', NM: '愛媛県' },
        { CD: '39', NM: '高知県' },
        { CD: '40', NM: '福岡県' },
        { CD: '41', NM: '佐賀県' },
        { CD: '42', NM: '長崎県' },
        { CD: '43', NM: '熊本県' },
        { CD: '44', NM: '大分県' },
        { CD: '45', NM: '宮崎県' },
        { CD: '46', NM: '鹿児島県' },
        { CD: '47', NM: '沖縄県' }
    ],
    /**
     * モバイルメールアドレスドメインリスト
     */
    KIIN_MLADDR_MB_DOMAINS: [
        'ezweb.ne.jp',
        'docomo.ne.jp',
        'i.softbank.jp',
        'softbank.ne.jp',
        'disney.ne.jp',
        'vodafone.ne.jp',
        'ymobile1.ne.jp',
        'ymobile.ne.jp',
        'y-mobile.ne.jp',
        'd.vodafone.ne.jp',
        'h.vodafone.ne.jp',
        't.vodafone.ne.jp',
        'c.vodafone.ne.jp',
        'r.vodafone.ne.jp',
        'k.vodafone.ne.jp',
        'n.vodafone.ne.jp',
        's.vodafone.ne.jp',
        'q.vodafone.ne.jp',
        'biz.ezweb.ne.jp',
        'augps.ezweb.ne.jp',
        'ido.ne.jp',
        'pdx.ne.jp',
        'willcom.com',
        'mopera.net',
        'uqmobile.jp',
        'emnet.ne.jp',
        'emobile.ne.jp',
        'emobile-s.ne.jp',
        'wcm.ne.jp',
        'vertuclub.ne.jp',
        'dwmail.jp',
        'docomo-camera.ne.jp'
    ],
    /**
     * メール種類区分
     */
    MLTMPLT_CD_PURCHASE_COMPLETE: 'U0001',
    MLTMPLT_CD_KNYKNR_NO_TRANSFER: 'U0004',
    MLTMPLT_CD_PURCHASE_COMPLETE_MOBILE: 'M0001',
    MLTMPLT_CD_KNYKNR_NO_TRANSFER_MOBILE: 'M0004',
    /**
     * 電子券区分: 電子券
     */
    ELECTRONIC_TICKET_ELECTRONIC: '01',
    /**
     * 電子券区分: 紙券
     */
    ELECTRONIC_TICKET_PAPER: '02',
    /**
     * 前売券区分: 全国共通券
     */
    ADVANCE_TICKET_COMMON: '01',
    /**
     * 前売券区分: 劇場券
     */
    ADVANCE_TICKET_THEATER: '02',
    /**
     * 券種区分
     */
    TICKET_TYPE: [
        { code: '01', name: '一般2D' },
        { code: '02', name: '小人2D' },
        { code: '03', name: '一般3D' },
        { code: '04', name: '小人3D' },
        { code: '05', name: '一般IMAX2D' },
        { code: '06', name: '小人IMAX2D' },
        { code: '07', name: '一般IMAX3D' },
        { code: '08', name: '小人IMAX3D' },
        { code: '09', name: '親子ペア一般' },
        { code: '10', name: '親子ペア小人' },
        { code: '11', name: '親子ペア一般3D' },
        { code: '12', name: '親子ペア小人3D' },
        { code: '13', name: '学生' },
        { code: '14', name: '学生3D' },
        { code: '15', name: '一般ペア' },
        { code: '16', name: '招待券' },
        { code: '17', name: '一般【B】' },
        { code: '18', name: '一般1000ペア用' },
        { code: '19', name: '一般法人' },
        { code: '20', name: '一般（3250）' },
        { code: '21', name: '一般【C】' },
        { code: 'BG', name: '一般特別上映' }
    ]
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = constants;