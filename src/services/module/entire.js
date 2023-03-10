import gxRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return gxRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}