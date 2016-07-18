# Mvtk Client Library for Node.js

This project provides a Node.js package that makes it easy to use Mvtk Services.

# Features

- DigitalIncentiveDownload
  - Please check details on https://www.movieticket.jp/services/DigitalIncentive/DigitalIncentiveDownloadsvc.svc
- Film
  - Please check details on https://www.movieticket.jp/services/Film/FilmSvc.svc
- GiftCard
  - Please check details on https://www.movieticket.jp/services/MvtkGiftCard/MvtkGiftCardSvc.svc
- GiftCard2
  - Please check details on https://services.movieticket.jp/services/giftcard/giftcardsvc.svc
- Inquiry
  - Please check details on https://www.movieticket.jp/services/Inquiry/Inquirysvc.svc
- MemberInfo
  - Please check details on https://www.movieticket.jp/services/Member/MemberInfoSvc.svc
- MovieLog
  - Please check details on https://www.movieticket.jp/services/MovieLog/MovieLogSvc.svc
- Purchase
  - Please check details on https://www.movieticket.jp/services/Purchase/PurchaseSvc.svc
- Purchase2
  - Please check details on https://services.movieticket.jp/services/purchase/purchasesvc.svc
- RegisterMember
  - Please check details on https://www.movieticket.jp/services/Member/RegisterMemberSvc.svc
- Util
  - Please check details on https://www.movieticket.jp/services/util/Utilsvc.svc
- Util2
  - Please check details on https://services.movieticket.jp/services/util/utilsvc.svc
- WebMoney
  - Please check details on https://www.movieticket.jp/services/WebMoney/WebMoneySvc.svc
- Mail
  - Please check details on https://www.movieticket.jp/services/mail/mailsvc.svc

# Getting Started

## Install

```shell
npm install @motionpicture/mvtk-service
```

## Usage

```Javascript
var mvtkService = require('@motionpicture/mvtk-service');
```

When using the Mvtk Service SDK, you must provide connection information for the soap url to use. This can be provided using:

* Initializing - For example, `mvtkService.inititalize(endpoint1, endpoint2);`


## Code Samples

Some samples are available.

* [How to use the Film Service from Node.js](/examples/samples/getFilmTopPageSample.js)

* [How to use the Util Service from Node.js](/examples/samples/signInSample.js)
