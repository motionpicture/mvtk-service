/**
 * Defines constants, enums, and utility functions for use with the Film service.
 */
// tslint:disable-next-line:no-unnecessary-class no-stateless-class
export class FilmUtilities {
    /**
     * チケット媒体区分
     */
    public static TCKTBITI_TYP_ELECTRON_TICKET: string = '01'; // 電子券（オンライン券）
    public static TCKTBITI_TYP_ELECTRON_VOUCHAER: string = '02'; // 電子バウチャー
    public static TCKTBITI_TYP_CARD_TICKET: string = '03'; // カード券

    /**
     * 表示箇所区分（PC）
     */
    public static BNNRHYJKSH_TYP_PC_FILM_RIGHT: string = '01';
    public static BNNRHYJKSH_TYP_PC_FILM_BOTTOM: string = '02';
    public static BNNRHYJKSH_TYP_PC_PURCHASE: string = '03';

    /**
     * 表示箇所区分（SP)
     */
    public static BNNRHYJKSH_TYP_SP_UNUSED: string = '01';
    public static BNNRHYJKSH_TYP_SP_FILM: string = '02';
    public static BNNRHYJKSH_TYP_SP_PURCHASE: string = '03';
}
