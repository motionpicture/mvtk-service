/**
 * ムビチケサービス共通の定数
 * @namespace Common.Util.Constants
 */
declare const constants: {
    DVC_TYP_PC: string;
    DVC_TYP_MOBILE: string;
    DVC_TYP_SP: string;
    RESULT_INFO_STATUS_SUCCESS: string;
    RESULT_INFO_STATUS_CRITICAL_ERROR: string;
    RESULT_INFO_STATUS_CHECK_ERROR: string;
    RESULT_INFO_STATUS_REPLICATION_ERROR: string;
    RESULT_INFO_STATUS_CLIENT_ERROR: string;
    RESULT_INFO_STATUS_OVERFLOW_ERROR: string;
    AU_RESPONSE_STATUS_REQSUCCESS: string;
    AU_RESPONSE_STATUS_AUTHPROCESS: string;
    AU_RESPONSE_STATUS_AUTH: string;
    AU_RESPONSE_STATUS_CAPTURE: string;
    AU_RESPONSE_STATUS_PAYFAIL: string;
    AU_PAY_METHOD_TOTALING: string;
    AU_PAY_METHOD_CREDIT_CARD: string;
    AU_PAY_METHOD_WEB_MONEY: string;
    DOCOMO_RESPONSE_STATUS_REQSUCCESS: string;
    DOCOMO_RESPONSE_STATUS_AUTHPROCESS: string;
    DOCOMO_RESPONSE_STATUS_AUTH: string;
    DOCOMO_RESPONSE_STATUS_CAPTURE: string;
    DOCOMO_RESPONSE_STATUS_PAYFAIL: string;
    DOCOMO_PAY_METHOD_TOTALING: string;
    DOCOMO_PAY_METHOD_CREDIT_CARD: string;
    DOCOMO_PAY_METHOD_WEB_MONEY: string;
    TDFKN_INFO: {
        CD: string;
        NM: string;
    }[];
    KIIN_MLADDR_MB_DOMAINS: string[];
    MLTMPLT_CD_PURCHASE_COMPLETE: string;
    MLTMPLT_CD_KNYKNR_NO_TRANSFER: string;
    MLTMPLT_CD_PURCHASE_COMPLETE_MOBILE: string;
    MLTMPLT_CD_KNYKNR_NO_TRANSFER_MOBILE: string;
    ELECTRONIC_TICKET_ELECTRONIC: string;
    ELECTRONIC_TICKET_PAPER: string;
    ADVANCE_TICKET_COMMON: string;
    ADVANCE_TICKET_THEATER: string;
    TICKET_TYPE: {
        '10': string;
        '11': string;
        '12': string;
        '01': string;
        '02': string;
        '03': string;
        '04': string;
        '05': string;
        '06': string;
        '07': string;
        '08': string;
        '09': string;
    };
};
export default constants;
