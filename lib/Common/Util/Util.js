"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ムビチケサービス共通のユーティリティ
 */
// tslint:disable-next-line:no-unnecessary-class no-stateless-class
class Util {
    /**
     * soapサービス実行結果のプロパティ名をaBcdEfgの形式に変換する
     */
    static normalizePropertyName(propertyName) {
        let convertName;
        convertName = propertyName.trim();
        convertName = convertName[0].toLowerCase() + convertName.substring(1);
        // 以下のように文字列を変換
        // 1. アンダーバーで分割
        // 2. 各文字列の頭文字を大文字に
        // 3. 全てつなげて、全体の頭文字だけ小文字にする
        const splits = convertName.split('_');
        let upperCaseName = '';
        for (const str of splits) {
            upperCaseName += str[0].toUpperCase() + str.substring(1).toLowerCase();
        }
        return upperCaseName[0].toLowerCase() + upperCaseName.substring(1); // 頭だけ小文字に
    }
}
exports.Util = Util;
