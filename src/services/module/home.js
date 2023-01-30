import gxRequest from "..";

// 佛山搞性价比房源
export function getHomeGoodPriceData() {
  return gxRequest.get({
    url: "/home/goodprice"
  })
}

// 佛山高分好评房源
export function getHomeHighScoreData() {
  return gxRequest.get({
    url: "/home/highscore"
  })
}

// 热门目的地(折扣数据)
export function getHomeDiscountData() {
  return gxRequest.get({
    url: "/home/discount"
  })
}

// 探索佛山的精彩之地
export function getHomeHotRecommendData() {
  return gxRequest.get({
    url: "/home/hotrecommenddest"
  })
}

// 你可能想去
export function getHomeLongforData() {
  return gxRequest.get({
    url: "/home/longfor"
  })
}

// Plus房源
export function getHomePlusData() {
  return gxRequest.get({
    url: "/home/plus"
  })
}