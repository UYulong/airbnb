import request from "../request";

export const getGoodPriceList = () => {
  return request.get({
    url: '/home/goodPrice'
  })
}

export const getHighScoreList = () => {
  return request.get({
    url: '/home/highScore'
  })
}

export const getDiscountList = () => {
  return request.get({
    url: '/home/discount'
  })
}

export const getHotDestList = () => {
  return request.get({
    url: '/home/hotrecommenddest'
  })
}