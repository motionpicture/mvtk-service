"use strict";
/**
 * ムビチケサービス共通のユーティリティ
 */
class Util {
    /**
     * soapサービス実行結果のプロパティ名をaBcdEfgの形式に変換する
     *
     * @param {strign} propertyName
     * @return {string}
     */
    static normalizePropertyName(propertyName) {
        propertyName = propertyName.trim();
        propertyName = propertyName[0].toLowerCase() + propertyName.substring(1);
        // 以下のように文字列を変換
        // 1. アンダーバーで分割
        // 2. 各文字列の頭文字を大文字に
        // 3. 全てつなげて、全体の頭文字だけ小文字にする
        let splits = propertyName.split('_');
        let upperCaseName = '';
        for (let str of splits) {
            upperCaseName += str[0].toUpperCase() + str.substring(1).toLowerCase();
        }
        return upperCaseName[0].toLowerCase() + upperCaseName.substring(1); // 頭だけ小文字に
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Util;
