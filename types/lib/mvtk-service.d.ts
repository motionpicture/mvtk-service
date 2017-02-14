/// <reference path="../../definitions/main.d.ts" />
import Constants from './Common/Util/Constants';
import Util from './Common/Util/Util';
import PurchaseNumberAuthService from './ReserveServices/Auth/PurchaseNumberAuthService';
import SeatInfoSyncService from './ReserveServices/Seat/SeatInfoSyncService';
export { Constants, Util };
/**
 * サービスビルダー初期化
 *
 * @param {string} endpoint
 * @param {string} endpoint2
 */
export declare function initialize(endpointArg: string, endpoint2Arg: string, endpointReserveArg: string): void;
export declare function getCookie(): string;
export declare function setCookie(cookieArg: string): void;
/**
 * 購入管理番号認証サービスを生成する
 */
export declare function createPurchaseNumberAuthService(): PurchaseNumberAuthService;
/**
 * 購入管理番号認証サービスを生成する
 */
export declare function createSeatInfoSyncService(): SeatInfoSyncService;
