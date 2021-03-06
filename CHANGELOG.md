# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## Unreleased
### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## v3.3.0 - 2021-07-14
### Added
- 決済方法区分に新しい区分を追加
    - ソフトバンクまとめて支払い
    - メルペイ
    - エポスかんたん決済

## v3.2.8 - 2021-04-27

## v3.2.7 - 2019-06-04
### Added
 - 一部、soap通信のパラメータをstring形式に戻す

## v3.2.4 - 2019-05-16
### Added
 - nodejsを10にアップグレード
 - クーポン対応

## v3.2.2 - 2019-02-14
### Added
 - GMOmethod名を再調整
 - エラーハンドリングを調整

## v3.2.1 - 2019-01-30
### Added
 - GMOmethod名を調整

## v3.1.8 - 2019-01-24
### Fixed
 - loggingでtoppageのresは除外する。

## v3.1.7 - 2019-01-24
### Fixed
 - env名調整

## v3.1.6 - 2019-01-24
### Fixed
 - loggingをconsoleに出力

## v3.1.5 - 2018-11-28
### Added
 - カード情報保存もtoken化
 - アンケートパラメータ順調整

## v3.1.4 - 2018-11-26
### Added
 - WSDL logging対応（In パラメータ）

## v3.1.3 - 2018-11-22
### Added
 - 楽天ペイ対応

## v3.1.2 - 2018-10-18
### Fixed
 - 一時管理データ取得失敗ハンドリングの調整

## v3.1.1 - 2018-10-03
### Fixed
 - ポイント単独決済時に特典コード確保APIのポイント利用フラグがnullでセットされているのを調整

## v3.1.0 - 2018-08-03
### Changed
 - WebMoneyEntryに利用金額（rykngk）追加

## v3.0.3 - 2018-07-18
### Changed
 - ムビチケサービスのtimeout値をenvで設定できるように調整

## v3.0.2 - 2018-06-20
### Fixed
 - クレジットカード情報未登録時取得エラー修正

## v3.0.1 - 2018-06-16
### Fixed
 - MovieLogServiceリストなしの際のエラー修正

## v3.0.0 - 2018-03-28
### Changed
 - 構成を変更
