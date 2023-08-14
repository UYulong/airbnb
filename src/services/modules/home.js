import request from "../request";

export const getGoodPriceList = () => {
  return request.get({
    url: '/home/goodPrice'
  })
}