import gxRequest from "..";

export function getHomeGoodPriceData() {
  return gxRequest.get({
    url: "/home/goodprice"
  })
}