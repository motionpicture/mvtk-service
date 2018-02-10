/**
 * Defines constants, enums, and utility functions for use with the Film service.
 */
export declare class FilmUtilities {
    /**
     * チケット媒体区分
     */
    static TCKTBITI_TYP_ELECTRON_TICKET: string;
    static TCKTBITI_TYP_ELECTRON_VOUCHAER: string;
    static TCKTBITI_TYP_CARD_TICKET: string;
    /**
     * 表示箇所区分（PC）
     */
    static BNNRHYJKSH_TYP_PC_FILM_RIGHT: string;
    static BNNRHYJKSH_TYP_PC_FILM_BOTTOM: string;
    static BNNRHYJKSH_TYP_PC_PURCHASE: string;
    /**
     * 表示箇所区分（SP)
     */
    static BNNRHYJKSH_TYP_SP_UNUSED: string;
    static BNNRHYJKSH_TYP_SP_FILM: string;
    static BNNRHYJKSH_TYP_SP_PURCHASE: string;
}
export interface IFilmUtilities {
    /**
     * チケット媒体区分 電子券（オンライン券）
     */
    TCKTBITI_TYP_ELECTRON_TICKET: string;
    /**
     * チケット媒体区分 電子バウチャー
     */
    TCKTBITI_TYP_ELECTRON_VOUCHAER: string;
    /**
     * チケット媒体区分 カード券
     */
    TCKTBITI_TYP_CARD_TICKET: string;
    /**
     * 表示箇所区分（PC）作品右
     */
    BNNRHYJKSH_TYP_PC_FILM_RIGHT: string;
    /**
     * 表示箇所区分（PC）作品下
     */
    BNNRHYJKSH_TYP_PC_FILM_BOTTOM: string;
    /**
     * 表示箇所区分（PC）購入
     */
    BNNRHYJKSH_TYP_PC_PURCHASE: string;
    /**
     * 表示箇所区分（SP)
     */
    BNNRHYJKSH_TYP_SP_UNUSED: string;
    /**
     * 表示箇所区分（SP)作品
     */
    BNNRHYJKSH_TYP_SP_FILM: string;
    /**
     * 表示箇所区分（SP)購入
     */
    BNNRHYJKSH_TYP_SP_PURCHASE: string;
}
