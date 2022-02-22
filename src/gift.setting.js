export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: 'cici 520专属抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: 'cici专属礼物抽奖！' },
    { key: 's', wording: '八大奖池，总有一款属于您～' },
    { key: 'd', wording: '期待么？！？还不快上滑看看都有啥！' },
  ],
  // 最终解释权归属人
  owner: 'IvanLi',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: 'HEFANG首饰自选', alias: 'HEFANG', image: '/images/1.jpeg', description: '「传递情感共鸣，彰显奢华魅力」' },
  { key: 'w', name: '腾讯视频终身VIP', alias: 'VIP', image: '/images/2.png', description: '“为你承包一辈子的VIP”' },
  { key: 'e', name: '兰蔻粉底霜', alias: '粉底霜', image: '/images/3.jpeg', description: '「还原肌肤出生质感～」' },
  { key: 'r', name: '¥520红包', alias: '520', image: '/images/4.png', description: '“想给你唱一百首情歌”' },
  { key: 't', name: 'gucci女鞋', alias: 'gucci鞋', image: '/images/5.jpeg', description: '「走出自信人生路！」' },
  { key: 'u', name: '清空购物车：¥2,888', alias: '清空购物车', image: '/images/6.jpeg', description: '“买！买！买！”' },
  { key: 'y', name: '¥1314红包', alias: '1314', image: '/images/4.png', description: '“从今往后，我都会在你旁边”' },
  { key: 'i', name: '今年做饭我包了', alias: '做饭', image: '/images/8.jpeg', description: '“告别油烟，放着我来！”' },
];
