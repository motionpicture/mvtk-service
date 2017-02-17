/**
 * ムビチケサービス共通のユーティリティ
 * @namespace Common.Util.Util
 */

/**
 * soapサービス実行結果のプロパティ名をaBcdEfgの形式に変換する
 * @memberOf Common.Util.Util
 * @function
 * @param {strign} propertyName
 * @return {string}
 */
export function normalizePropertyName(propertyName: string): string {
    propertyName = propertyName.trim();
    propertyName = propertyName[0].toLowerCase() + propertyName.substring(1);

    // 以下のように文字列を変換
    // 1. アンダーバーで分割
    // 2. 各文字列の頭文字を大文字に
    // 3. 全てつなげて、全体の頭文字だけ小文字にする
    const splits = propertyName.split('_');
    let upperCaseName = '';
    for (const str of splits) {
        upperCaseName += str[0].toUpperCase() + str.substring(1).toLowerCase();
    }

    return upperCaseName[0].toLowerCase() + upperCaseName.substring(1); // 頭だけ小文字に
}
